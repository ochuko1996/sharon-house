import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import Button from "../components/ui/Button";
import Table, { type TableColumn } from "../components/ui/Table";
import Alert from "../components/ui/Alert";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Checkbox from "../components/ui/Checkbox";
import { useToast } from "../components/ui/useToast";
import { Trash2, Edit2, Plus, GripVertical } from "lucide-react";

interface MinistryData {
  _id: Id<"ministries">;
  name: string;
  slug: string;
  description: string;
  leader?: string;
  schedule?: string;
  color: string;
  icon?: string;
  active: boolean;
  order: number;
}

const COLORS = [
  "#6FAF2E",
  "#3E6F1E",
  "#e3781a",
  "#2563eb",
  "#7c3aed",
  "#ec4899",
];

// Helper to generate slug from name
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default function Ministries() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMinistry, setEditingMinistry] = useState<MinistryData | null>(
    null,
  );
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    leader: "",
    schedule: "",
    color: "#6FAF2E",
    icon: "",
    active: true,
  });

  const toast = useToast();
  const ministries = useQuery(api.ministries.getMinistries) || [];
  const createMinistry = useMutation(api.ministries.createMinistry);
  const updateMinistry = useMutation(api.ministries.updateMinistry);
  const deleteMinistryMutation = useMutation(api.ministries.deleteMinistry);
  const toggleActive = useMutation(api.ministries.toggleMinistryActive);

  const handleCreateOpen = () => {
    setEditingMinistry(null);
    setFormData({
      name: "",
      slug: "",
      description: "",
      leader: "",
      schedule: "",
      color: "#6FAF2E",
      icon: "",
      active: true,
    });
    setIsFormOpen(true);
  };

  const handleEditOpen = (ministry: MinistryData) => {
    setEditingMinistry(ministry);
    setFormData({
      name: ministry.name,
      slug: ministry.slug,
      description: ministry.description,
      leader: ministry.leader || "",
      schedule: ministry.schedule || "",
      color: ministry.color,
      icon: ministry.icon || "",
      active: ministry.active,
    });
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingMinistry(null);
    setError(null);
  };

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name),
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(null);

      if (!formData.name.trim()) {
        setError("Ministry name is required");
        return;
      }

      if (!formData.slug.trim()) {
        setError("Slug is required");
        return;
      }

      if (!formData.description.trim()) {
        setError("Description is required");
        return;
      }

      const order = editingMinistry
        ? editingMinistry.order
        : Math.max(0, ...ministries.map((m) => m.order || 0)) + 1;

      if (editingMinistry) {
        await updateMinistry({
          id: editingMinistry._id,
          name: formData.name,
          slug: formData.slug,
          description: formData.description,
          leader: formData.leader || undefined,
          schedule: formData.schedule || undefined,
          color: formData.color,
          icon: formData.icon || undefined,
          active: formData.active,
          order,
        });
        toast.success("Ministry updated successfully!");
      } else {
        await createMinistry({
          name: formData.name,
          slug: formData.slug,
          description: formData.description,
          leader: formData.leader || undefined,
          schedule: formData.schedule || undefined,
          color: formData.color,
          icon: formData.icon || undefined,
          active: formData.active,
          order,
        });
        toast.success("Ministry created successfully!");
      }

      handleFormClose();
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      toast.error(message);
    }
  };

  const handleDelete = async (id: Id<"ministries">) => {
    try {
      await deleteMinistryMutation({ id });
      toast.success("Ministry deleted successfully!");
      setDeleteConfirm(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete";
      toast.error(message);
    }
  };

  const handleToggleActive = async (id: Id<"ministries">) => {
    try {
      await toggleActive({ id });
      toast.success("Status updated!");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to update";
      toast.error(message);
    }
  };

  // Sort by order
  const sortedMinistries = [...ministries].sort(
    (a, b) => (a.order || 0) - (b.order || 0),
  );

  const columns: TableColumn<MinistryData>[] = [
    {
      key: "_id",
      label: "Ministry",
      render: (_value, ministry: MinistryData) => (
        <div className="flex items-center gap-3">
          <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
          <div>
            <div
              className="w-3 h-3 rounded-full inline-block mr-2"
              style={{ backgroundColor: ministry.color }}
            />
            <span className="font-medium">{ministry.name}</span>
          </div>
        </div>
      ),
    },
    {
      key: "slug",
      label: "Slug",
      render: (_value, ministry: MinistryData) => (
        <code className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
          {ministry.slug}
        </code>
      ),
    },
    {
      key: "leader",
      label: "Leader",
      render: (_value, ministry: MinistryData) => (
        <span className="text-sm">{ministry.leader || "—"}</span>
      ),
    },
    {
      key: "schedule",
      label: "Schedule",
      render: (_value, ministry: MinistryData) => (
        <span className="text-sm text-gray-600">
          {ministry.schedule || "—"}
        </span>
      ),
    },
    {
      key: "description",
      label: "Description",
      render: (_value, ministry: MinistryData) => (
        <div className="text-sm text-gray-600 max-w-md truncate">
          {ministry.description}
        </div>
      ),
    },
    {
      key: "active",
      label: "Status",
      render: (_value, ministry: MinistryData) => (
        <button
          onClick={() => handleToggleActive(ministry._id)}
          className="px-3 py-1 rounded text-sm font-medium transition-colors cursor-pointer"
          style={{
            backgroundColor: ministry.active ? "#dcfce7" : "#f3f4f6",
            color: ministry.active ? "#15803d" : "#6b7280",
          }}
        >
          {ministry.active ? "Active" : "Inactive"}
        </button>
      ),
    },
    {
      key: "order",
      label: "Actions",
      render: (_value, ministry: MinistryData) => (
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleEditOpen(ministry)}
            className="flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </Button>
          {deleteConfirm === ministry._id ? (
            <div className="flex gap-2">
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(ministry._id)}
              >
                Confirm
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setDeleteConfirm(null)}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              variant="danger"
              size="sm"
              onClick={() => setDeleteConfirm(ministry._id)}
              className="flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          )}
        </div>
      ),
    },
  ];

  if (!ministries) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ministries</h1>
          <p className="text-gray-600 mt-1">
            Manage church ministries and departments
          </p>
        </div>
        <Button
          variant="primary"
          className="flex items-center gap-2"
          onClick={handleCreateOpen}
        >
          <Plus className="w-5 h-5" />
          Add Ministry
        </Button>
      </div>

      {error && <Alert type="error" message={error} />}

      <div className="bg-white rounded-lg shadow">
        {sortedMinistries.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500 mb-4">No ministries yet</p>
            <Button variant="secondary" onClick={handleCreateOpen}>
              Create First Ministry
            </Button>
          </div>
        ) : (
          <Table<MinistryData> columns={columns} data={sortedMinistries} />
        )}
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={handleFormClose}
        title={editingMinistry ? "Edit Ministry" : "Add Ministry"}
        size="lg"
      >
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input
            label="Ministry Name"
            placeholder="e.g., Youth Ministry, Worship Team"
            value={formData.name}
            onChange={(e) => handleNameChange(e.target.value)}
            required
          />

          <Input
            label="Slug"
            placeholder="Auto-generated from name"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            helperText="URL-friendly identifier"
            required
          />

          <Textarea
            label="Description"
            placeholder="Describe what this ministry does..."
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows={4}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Ministry Leader"
              placeholder="Leader name"
              value={formData.leader}
              onChange={(e) =>
                setFormData({ ...formData, leader: e.target.value })
              }
            />

            <Input
              label="Schedule"
              placeholder="e.g., Every Sunday"
              value={formData.schedule}
              onChange={(e) =>
                setFormData({ ...formData, schedule: e.target.value })
              }
            />
          </div>

          <Input
            label="Icon (Optional)"
            placeholder="Icon name or emoji"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            helperText="For display on website"
          />

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <div className="flex gap-2">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`w-8 h-8 rounded-full border-2 ${
                      formData.color === color
                        ? "border-gray-900"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setFormData({ ...formData, color })}
                  />
                ))}
              </div>
            </div>

            <Checkbox
              label="Active"
              checked={formData.active}
              onChange={(e) => {
                if (e.target instanceof HTMLInputElement) {
                  setFormData({ ...formData, active: e.target.checked });
                }
              }}
            />
          </div>

          {error && <Alert type="error" message={error} />}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="secondary" type="button" onClick={handleFormClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {editingMinistry ? "Update" : "Create"} Ministry
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
