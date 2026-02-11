import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import Button from "../components/ui/Button";
import Table, { type TableColumn } from "../components/ui/Table";
import Badge from "../components/ui/Badge";
import Alert from "../components/ui/Alert";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import SermonForm from "../components/forms/SermonForm";
import { useToast } from "../components/ui/useToast";
import { Trash2, Edit2, Plus, Play } from "lucide-react";

interface SermonData {
  _id: Id<"sermons">;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  date: string;
  category: "Sunday Service" | "Midweek Service" | "Youth Service" | "Special";
  speaker: string;
  description?: string;
  thumbnail?: string;
  published: boolean;
  featured: boolean;
  createdAt: number;
  updatedAt: number;
}

export default function Sermons() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSermon, setEditingSermon] = useState<SermonData | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<Id<"sermons"> | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const toast = useToast();
  const sermons = useQuery(api.sermons.getSermons) || [];
  const createSermon = useMutation(api.sermons.createSermon);
  const updateSermon = useMutation(api.sermons.updateSermon);
  const deleteSermonMutation = useMutation(api.sermons.deleteSermon);
  const togglePublished = useMutation(api.sermons.toggleSermonPublished);
  const toggleFeatured = useMutation(api.sermons.toggleSermonFeatured);

  const handleCreateOpen = () => {
    setEditingSermon(null);
    setIsFormOpen(true);
  };

  const handleEditOpen = (sermon: SermonData) => {
    setEditingSermon(sermon);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingSermon(null);
  };

  const handleFormSubmit = async (data: {
    title: string;
    youtubeId: string;
    youtubeUrl: string;
    date: string;
    category:
      | "Sunday Service"
      | "Midweek Service"
      | "Youth Service"
      | "Special";
    speaker: string;
    description?: string;
    thumbnail?: string;
    published: boolean;
    featured: boolean;
  }) => {
    try {
      setError(null);

      if (editingSermon) {
        await updateSermon({
          id: editingSermon._id,
          ...data,
        });
        toast.success("Sermon updated successfully!");
      } else {
        await createSermon(data);
        toast.success("Sermon created successfully!");
      }

      handleFormClose();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleDelete = async (id: Id<"sermons">) => {
    try {
      setError(null);
      await deleteSermonMutation({ id });
      toast.success("Sermon deleted successfully!");
      setDeleteConfirm(null);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to delete sermon";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleTogglePublished = async (id: Id<"sermons">) => {
    try {
      setError(null);
      await togglePublished({ id });
      toast.success("Sermon status updated!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update sermon";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleToggleFeatured = async (id: Id<"sermons">) => {
    try {
      setError(null);
      await toggleFeatured({ id });
      toast.success("Featured status updated!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update sermon";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const columns: TableColumn<SermonData>[] = [
    {
      key: "title",
      label: "Title",
      sortable: true,
      width: "w-40",
    },
    {
      key: "speaker",
      label: "Speaker",
      sortable: true,
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
      render: (value) => new Date(value as string).toLocaleDateString(),
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      render: (value) => <Badge type="primary">{String(value)}</Badge>,
    },
    {
      key: "featured",
      label: "Featured",
      render: (value) => (
        <Badge type={value ? "success" : "gray"}>{value ? "Yes" : "No"}</Badge>
      ),
    },
    {
      key: "published",
      label: "Published",
      render: (value, row) => (
        <button
          onClick={() => handleTogglePublished(row._id)}
          className="cursor-pointer"
        >
          <Badge type={value ? "success" : "warning"}>
            {value ? "Published" : "Draft"}
          </Badge>
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Sermons Management
          </h1>
          <p className="text-gray-600 mt-1">Upload and manage church sermons</p>
        </div>
        <Button variant="primary" size="lg" onClick={handleCreateOpen}>
          <Plus className="w-5 h-5" />
          Upload Sermon
        </Button>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert
          type="error"
          title="Error"
          message={error}
          onClose={() => setError(null)}
        />
      )}

      {/* Sermons Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {sermons === undefined ? (
          <div className="p-12 flex justify-center">
            <LoadingSpinner size="md" />
          </div>
        ) : (
          <Table
            columns={columns}
            data={sermons as SermonData[]}
            emptyMessage="No sermons yet. Upload one to get started!"
            actionColumn={{
              label: "Actions",
              render: (sermon) => (
                <div className="flex items-center gap-2">
                  <a
                    href={`https://www.youtube.com/watch?v=${(sermon as SermonData).youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                    title="Watch on YouTube"
                  >
                    <Play className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() =>
                      handleToggleFeatured((sermon as SermonData)._id)
                    }
                    className={`p-2 rounded transition-colors ${
                      (sermon as SermonData).featured
                        ? "text-yellow-600 bg-yellow-50"
                        : "text-gray-400 hover:bg-gray-50"
                    }`}
                    title="Toggle featured"
                  >
                    ⭐
                  </button>
                  <button
                    onClick={() => handleEditOpen(sermon as SermonData)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    title="Edit sermon"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  {deleteConfirm === (sermon as SermonData)._id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete((sermon as SermonData)._id)}
                        className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-2 py-1 text-xs bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() =>
                        setDeleteConfirm((sermon as SermonData)._id)
                      }
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete sermon"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ),
            }}
          />
        )}
      </div>

      {/* Sermon Form Modal */}
      <SermonForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        initialData={editingSermon || undefined}
      />
    </div>
  );
}
