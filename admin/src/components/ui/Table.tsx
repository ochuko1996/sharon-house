import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => React.ReactNode;
  width?: string;
}

interface TableProps<T extends { _id: string }> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  loading?: boolean;
  emptyMessage?: string;
  actionColumn?: {
    label: string;
    render: (row: T) => React.ReactNode;
  };
}

export default function Table<T extends { _id: string }>({
  columns,
  data,
  onRowClick,
  loading = false,
  emptyMessage = "No data available",
  actionColumn,
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue === bValue) return 0;

    const comparison = aValue < bValue ? -1 : 1;
    return sortConfig.direction === "asc" ? comparison : -comparison;
  });

  const handleSort = (key: keyof T) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return current.direction === "asc" ? { key, direction: "desc" } : null;
      }
      return { key, direction: "asc" };
    });
  };

  const SortIcon = ({
    columnKey,
    sortable,
  }: {
    columnKey: keyof T;
    sortable?: boolean;
  }) => {
    if (!sortable) return null;
    if (sortConfig?.key !== columnKey) {
      return <ChevronDown className="w-4 h-4 text-gray-300 ml-1" />;
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4 text-primary ml-1" />
    ) : (
      <ChevronDown className="w-4 h-4 text-primary ml-1" />
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center py-12 text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`px-6 py-3 text-left text-sm font-semibold text-gray-900 ${
                  column.width || ""
                }`}
              >
                {column.sortable ? (
                  <button
                    onClick={() => handleSort(column.key)}
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    {column.label}
                    <SortIcon
                      columnKey={column.key}
                      sortable={column.sortable}
                    />
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
            {actionColumn && (
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                {actionColumn.label}
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedData.map((row) => (
            <tr
              key={row._id}
              onClick={() => onRowClick?.(row)}
              className={`hover:bg-gray-50 transition-colors ${
                onRowClick ? "cursor-pointer" : ""
              }`}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="px-6 py-4 text-sm text-gray-700"
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key])}
                </td>
              ))}
              {actionColumn && (
                <td className="px-6 py-4 text-sm">
                  {actionColumn.render(row)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
