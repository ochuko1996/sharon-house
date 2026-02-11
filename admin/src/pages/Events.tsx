import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import Button from "../components/ui/Button";
import Table, { type TableColumn } from "../components/ui/Table";
import Badge from "../components/ui/Badge";
import Alert from "../components/ui/Alert";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import EventForm from "../components/forms/EventForm";
import { useToast } from "../components/ui/useToast";
import { Trash2, Edit2, Plus } from "lucide-react";

interface EventData {
  _id: Id<"events">;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category:
    | "Weekly Service"
    | "Youth"
    | "Ministry"
    | "Special Event"
    | "Annual Event";
  color: string;
  recurring: boolean;
  published: boolean;
  createdAt: number;
  updatedAt: number;
}

export default function Events() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toast = useToast();
  const events = useQuery(api.events.getEvents) || [];
  const createEvent = useMutation(api.events.createEvent);
  const updateEvent = useMutation(api.events.updateEvent);
  const deleteEventMutation = useMutation(api.events.deleteEvent);
  const togglePublished = useMutation(api.events.toggleEventPublished);

  const handleCreateOpen = () => {
    setEditingEvent(null);
    setIsFormOpen(true);
  };

  const handleEditOpen = (event: EventData) => {
    setEditingEvent(event);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingEvent(null);
  };

  const handleFormSubmit = async (data: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    category:
      | "Weekly Service"
      | "Youth"
      | "Ministry"
      | "Special Event"
      | "Annual Event";
    color: string;
    recurring: boolean;
    published: boolean;
  }) => {
    try {
      setError(null);

      if (editingEvent) {
        await updateEvent({
          id: editingEvent._id,
          title: data.title,
          date: data.date,
          time: data.time,
          location: data.location,
          description: data.description,
          category: data.category,
          color: data.color,
          recurring: data.recurring,
          published: data.published,
        });
        toast.success("Event updated successfully!");
      } else {
        await createEvent(data);
        toast.success("Event created successfully!");
      }

      handleFormClose();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleDelete = async (id: Id<"events">) => {
    try {
      setError(null);
      await deleteEventMutation({ id });
      toast.success("Event deleted successfully!");
      setDeleteConfirm(null);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to delete event";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleTogglePublished = async (id: Id<"events">) => {
    try {
      setError(null);
      await togglePublished({ id });
      toast.success("Event status updated!");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update event";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const columns: TableColumn<EventData>[] = [
    {
      key: "title",
      label: "Title",
      sortable: true,
      width: "w-40",
    },
    {
      key: "date",
      label: "Date",
      sortable: true,
      render: (value) => new Date(value as string).toLocaleDateString(),
    },
    {
      key: "time",
      label: "Time",
      render: (value) => String(value),
    },
    {
      key: "location",
      label: "Location",
      render: (value) => String(value),
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      render: (value) => <Badge type="primary">{String(value)}</Badge>,
    },
    {
      key: "recurring",
      label: "Recurring",
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
            Events Management
          </h1>
          <p className="text-gray-600 mt-1">Create and manage church events</p>
        </div>
        <Button variant="primary" size="lg" onClick={handleCreateOpen}>
          <Plus className="w-5 h-5" />
          Create Event
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

      {/* Events Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {events === undefined ? (
          <div className="p-12 flex justify-center">
            <LoadingSpinner size="md" />
          </div>
        ) : (
          <Table
            columns={columns}
            data={events as EventData[]}
            emptyMessage="No events yet. Create one to get started!"
            actionColumn={{
              label: "Actions",
              render: (event) => (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditOpen(event as EventData)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    title="Edit event"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  {deleteConfirm === event._id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDelete(event._id)}
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
                      onClick={() => setDeleteConfirm(event._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete event"
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

      {/* Event Form Modal */}
      <EventForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        initialData={editingEvent || undefined}
      />
    </div>
  );
}
