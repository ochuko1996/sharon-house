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
import { Trash2, Edit2, Plus, Star, MessageSquare } from "lucide-react";

interface TestimonialData {
  _id: Id<"testimonials">;
  name: string;
  content: string;
  date: string;
  published: boolean;
  featured: boolean;
  imageUrl?: string;
  createdAt: number;
}

export default function Testimonials() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] =
    useState<TestimonialData | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    published: true,
    featured: false,
  });

  const toast = useToast();
  const testimonials = useQuery(api.testimonials.getTestimonials) || [];
  const createTestimonial = useMutation(api.testimonials.createTestimonial);
  const updateTestimonial = useMutation(api.testimonials.updateTestimonial);
  const deleteTestimonialMutation = useMutation(
    api.testimonials.deleteTestimonial,
  );
  const togglePublished = useMutation(
    api.testimonials.toggleTestimonialPublished,
  );
  const toggleFeatured = useMutation(
    api.testimonials.toggleTestimonialFeatured,
  );

  const handleCreateOpen = () => {
    setEditingTestimonial(null);
    setFormData({
      name: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      published: true,
      featured: false,
    });
    setIsFormOpen(true);
  };

  const handleEditOpen = (testimonial: TestimonialData) => {
    setEditingTestimonial(testimonial);
    setFormData({
      name: testimonial.name,
      content: testimonial.content,
      date: testimonial.date,
      published: testimonial.published,
      featured: testimonial.featured,
    });
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingTestimonial(null);
    setError(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(null);

      if (!formData.name.trim()) {
        setError("Name is required");
        return;
      }

      if (!formData.content.trim()) {
        setError("Testimonial content is required");
        return;
      }

      if (formData.content.trim().length < 10) {
        setError("Testimonial must be at least 10 characters");
        return;
      }

      if (editingTestimonial) {
        await updateTestimonial({
          id: editingTestimonial._id,
          name: formData.name,
          content: formData.content,
          date: formData.date,
          published: formData.published,
          featured: formData.featured,
        });
        toast.success("Testimonial updated successfully!");
      } else {
        await createTestimonial({
          name: formData.name,
          content: formData.content,
          date: formData.date,
          published: formData.published,
          featured: formData.featured,
        });
        toast.success("Testimonial created successfully!");
      }

      handleFormClose();
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      toast.error(message);
    }
  };

  const handleDelete = async (id: Id<"testimonials">) => {
    try {
      await deleteTestimonialMutation({ id });
      toast.success("Testimonial deleted successfully!");
      setDeleteConfirm(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete";
      toast.error(message);
    }
  };

  const handleTogglePublished = async (id: Id<"testimonials">) => {
    try {
      await togglePublished({ id });
      toast.success("Status updated!");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to update";
      toast.error(message);
    }
  };

  const handleToggleFeatured = async (id: Id<"testimonials">) => {
    try {
      await toggleFeatured({ id });
      toast.success("Featured status updated!");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to update";
      toast.error(message);
    }
  };

  // Sort by newest first
  const sortedTestimonials = [...testimonials].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const columns: TableColumn<TestimonialData>[] = [
    {
      key: "name",
      label: "Author",
      render: (_value, testimonial: TestimonialData) => (
        <div>
          <div className="font-medium">{testimonial.name}</div>
          <div className="text-sm text-gray-500">
            {new Date(testimonial.date).toLocaleDateString()}
          </div>
        </div>
      ),
    },
    {
      key: "content",
      label: "Testimonial",
      render: (_value, testimonial: TestimonialData) => (
        <div className="text-sm text-gray-600 max-w-2xl line-clamp-3">
          &quot;{testimonial.content}&quot;
        </div>
      ),
    },
    {
      key: "featured",
      label: "Featured",
      render: (_value, testimonial: TestimonialData) => (
        <button
          onClick={() => handleToggleFeatured(testimonial._id)}
          className="p-2 hover:bg-gray-100 rounded transition"
          title="Toggle featured"
        >
          <Star
            className={`w-5 h-5 ${
              testimonial.featured
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ),
    },
    {
      key: "published",
      label: "Status",
      render: (_value, testimonial: TestimonialData) => (
        <button
          onClick={() => handleTogglePublished(testimonial._id)}
          className="px-3 py-1 rounded text-sm font-medium transition-colors cursor-pointer"
          style={{
            backgroundColor: testimonial.published ? "#dcfce7" : "#f3f4f6",
            color: testimonial.published ? "#15803d" : "#6b7280",
          }}
        >
          {testimonial.published ? "Published" : "Draft"}
        </button>
      ),
    },
    {
      key: "imageUrl",
      label: "Actions",
      render: (_value, testimonial: TestimonialData) => (
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleEditOpen(testimonial)}
            className="flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </Button>
          {deleteConfirm === testimonial._id ? (
            <div className="flex gap-2">
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(testimonial._id)}
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
              onClick={() => setDeleteConfirm(testimonial._id)}
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

  if (!testimonials) {
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
          <h1 className="text-3xl font-bold text-gray-900">Testimonials</h1>
          <p className="text-gray-600 mt-1">
            Manage member testimonies and success stories
          </p>
        </div>
        <Button
          variant="primary"
          className="flex items-center gap-2"
          onClick={handleCreateOpen}
        >
          <Plus className="w-5 h-5" />
          Add Testimonial
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Testimonials</p>
              <p className="text-3xl font-bold">{testimonials.length}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Published</p>
              <p className="text-3xl font-bold">
                {testimonials.filter((t) => t.published).length}
              </p>
            </div>
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded text-lg font-medium">
              ✓
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Featured</p>
              <p className="text-3xl font-bold">
                {testimonials.filter((t) => t.featured).length}
              </p>
            </div>
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      </div>

      {error && <Alert type="error" message={error} />}

      <div className="bg-white rounded-lg shadow">
        {sortedTestimonials.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500 mb-4">No testimonials yet</p>
            <Button variant="secondary" onClick={handleCreateOpen}>
              Create First Testimonial
            </Button>
          </div>
        ) : (
          <Table<TestimonialData> columns={columns} data={sortedTestimonials} />
        )}
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={handleFormClose}
        title={editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
        size="lg"
      >
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input
            label="Name"
            placeholder="e.g., John Smith"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />

          <Textarea
            label="Testimonial"
            placeholder="Share the story of how God has worked in this person's life..."
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            rows={6}
            required
            helperText={`${formData.content.length} characters`}
          />

          <div className="space-y-3">
            <Checkbox
              label="Published"
              checked={formData.published}
              onChange={(e) => {
                if (e.target instanceof HTMLInputElement) {
                  setFormData({ ...formData, published: e.target.checked });
                }
              }}
            />

            <Checkbox
              label="Featured"
              checked={formData.featured}
              onChange={(e) => {
                if (e.target instanceof HTMLInputElement) {
                  setFormData({ ...formData, featured: e.target.checked });
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
              {editingTestimonial ? "Update" : "Create"} Testimonial
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
