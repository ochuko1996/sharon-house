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
import Select from "../components/ui/Select";
import Checkbox from "../components/ui/Checkbox";
import { useToast } from "../components/ui/useToast";
import { Trash2, Edit2, Plus, GripVertical } from "lucide-react";

interface ServiceTimeData {
  _id: Id<"serviceTimes">;
  day: string;
  time: string;
  name: string;
  location: string;
  description: string;
  color: string;
  order: number;
  active: boolean;
}

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const COLORS = [
  "#6FAF2E",
  "#3E6F1E",
  "#e3781a",
  "#2563eb",
  "#7c3aed",
  "#ec4899",
];

export default function ServiceTimes() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingServiceTime, setEditingServiceTime] =
    useState<ServiceTimeData | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    day: "Sunday",
    time: "",
    name: "",
    location: "",
    description: "",
    color: "#6FAF2E",
    active: true,
  });

  const toast = useToast();
  const serviceTimes = useQuery(api.serviceTimes.getServiceTimes) || [];
  const createServiceTime = useMutation(api.serviceTimes.createServiceTime);
  const updateServiceTime = useMutation(api.serviceTimes.updateServiceTime);
  const deleteServiceTimeMutation = useMutation(
    api.serviceTimes.deleteServiceTime,
  );
  const toggleActive = useMutation(api.serviceTimes.toggleServiceTimeActive);

  const handleCreateOpen = () => {
    setEditingServiceTime(null);
    setFormData({
      day: "Sunday",
      time: "",
      name: "",
      location: "",
      description: "",
      color: "#6FAF2E",
      active: true,
    });
    setIsFormOpen(true);
  };

  const handleEditOpen = (serviceTime: ServiceTimeData) => {
    setEditingServiceTime(serviceTime);
    setFormData({
      day: serviceTime.day,
      time: serviceTime.time,
      name: serviceTime.name,
      location: serviceTime.location,
      description: serviceTime.description,
      color: serviceTime.color,
      active: serviceTime.active,
    });
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingServiceTime(null);
    setError(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(null);

      if (!formData.time.trim()) {
        setError("Time is required");
        return;
      }

      if (!formData.name.trim()) {
        setError("Service name is required");
        return;
      }

      if (!formData.location.trim()) {
        setError("Location is required");
        return;
      }

      const order = editingServiceTime
        ? editingServiceTime.order
        : Math.max(0, ...serviceTimes.map((s) => s.order || 0)) + 1;

      if (editingServiceTime) {
        await updateServiceTime({
          id: editingServiceTime._id,
          day: formData.day,
          time: formData.time,
          name: formData.name,
          location: formData.location,
          description: formData.description,
          color: formData.color,
          order,
          active: formData.active,
        });
        toast.success("Service time updated successfully!");
      } else {
        await createServiceTime({
          day: formData.day,
          time: formData.time,
          name: formData.name,
          location: formData.location,
          description: formData.description,
          color: formData.color,
          order,
          active: formData.active,
        });
        toast.success("Service time created successfully!");
      }

      handleFormClose();
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      toast.error(message);
    }
  };

  const handleDelete = async (id: Id<"serviceTimes">) => {
    try {
      await deleteServiceTimeMutation({ id });
      toast.success("Service time deleted successfully!");
      setDeleteConfirm(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete";
      toast.error(message);
    }
  };

  const handleToggleActive = async (id: Id<"serviceTimes">) => {
    try {
      await toggleActive({ id });
      toast.success("Status updated!");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to update";
      toast.error(message);
    }
  };

  // Sort by order
  const sortedServiceTimes = [...serviceTimes].sort(
    (a, b) => (a.order || 0) - (b.order || 0),
  );

  const columns: TableColumn<ServiceTimeData>[] = [
    {
      key: "_id",
      label: "Day",
      render: (_value, serviceTime: ServiceTimeData) => (
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
          <span className="font-medium">{serviceTime.day}</span>
        </div>
      ),
    },
    {
      key: "time",
      label: "Time",
    },
    {
      key: "name",
      label: "Service Name",
      render: (_value, serviceTime: ServiceTimeData) => (
        <div>
          <div className="font-medium">{serviceTime.name}</div>
          <div className="text-sm text-gray-500">{serviceTime.location}</div>
        </div>
      ),
    },
    {
      key: "description",
      label: "Description",
      render: (_value, serviceTime: ServiceTimeData) => (
        <div className="text-sm text-gray-600 max-w-md truncate">
          {serviceTime.description || "—"}
        </div>
      ),
    },
    {
      key: "active",
      label: "Status",
      render: (_value, serviceTime: ServiceTimeData) => (
        <button
          onClick={() => handleToggleActive(serviceTime._id)}
          className="px-3 py-1 rounded text-sm font-medium transition-colors"
          style={{
            backgroundColor: serviceTime.active ? "#dcfce7" : "#f3f4f6",
            color: serviceTime.active ? "#15803d" : "#6b7280",
          }}
        >
          {serviceTime.active ? "Active" : "Inactive"}
        </button>
      ),
    },
    {
      key: "order" as keyof ServiceTimeData,
      label: "Actions",
      render: (_value, serviceTime: ServiceTimeData) => (
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleEditOpen(serviceTime)}
            className="flex items-center gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </Button>
          {deleteConfirm === serviceTime._id ? (
            <div className="flex gap-2">
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(serviceTime._id)}
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
              onClick={() => setDeleteConfirm(serviceTime._id)}
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

  if (!serviceTimes) {
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
          <h1 className="text-3xl font-bold text-gray-900">Service Times</h1>
          <p className="text-gray-600 mt-1">
            Manage church service schedules and times
          </p>
        </div>
        <Button
          variant="primary"
          className="flex items-center gap-2"
          onClick={handleCreateOpen}
        >
          <Plus className="w-5 h-5" />
          Add Service Time
        </Button>
      </div>

      {error && <Alert type="error" message={error} />}

      <div className="bg-white rounded-lg shadow">
        {sortedServiceTimes.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500 mb-4">No service times yet</p>
            <Button variant="secondary" onClick={handleCreateOpen}>
              Create First Service Time
            </Button>
          </div>
        ) : (
          <Table<ServiceTimeData> columns={columns} data={sortedServiceTimes} />
        )}
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={handleFormClose}
        title={editingServiceTime ? "Edit Service Time" : "Add Service Time"}
        size="lg"
      >
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Select
              label="Day of Week"
              value={formData.day}
              onChange={(e) => {
                if (e.target instanceof HTMLSelectElement) {
                  setFormData({ ...formData, day: e.target.value });
                }
              }}
              options={DAYS.map((day) => ({
                value: day,
                label: day,
              }))}
            />

            <Input
              label="Time"
              type="time"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              required
            />
          </div>

          <Input
            label="Service Name"
            placeholder="e.g., Main Service, Youth Service"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <Input
            label="Location"
            placeholder="e.g., Main Sanctuary, Fellowship Hall"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            required
          />

          <Textarea
            label="Description"
            placeholder="Additional details about this service..."
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows={3}
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
              {editingServiceTime ? "Update" : "Create"} Service Time
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
