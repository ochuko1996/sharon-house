import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";
import Checkbox from "../ui/Checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  category: z.enum([
    "Weekly Service",
    "Youth",
    "Ministry",
    "Special Event",
    "Annual Event",
  ]),
  color: z.string(),
  recurring: z.boolean(),
  published: z.boolean(),
});

type EventFormData = z.infer<typeof eventSchema>;

interface EventFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EventFormData) => Promise<void>;
  initialData?: Partial<EventFormData>;
  isLoading?: boolean;
}

export default function EventForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading = false,
}: EventFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: initialData,
  });

  const onFormSubmit = async (data: EventFormData) => {
    await onSubmit(data);
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={initialData ? "Edit Event" : "Create Event"}
      size="lg"
      onSubmit={() => handleSubmit(onFormSubmit)()}
      submitLabel={initialData ? "Update" : "Create"}
      isLoading={isLoading}
    >
      <form className="space-y-4">
        <Input
          label="Title"
          placeholder="Event title"
          {...register("title")}
          error={errors.title?.message}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Date"
            type="date"
            {...register("date")}
            error={errors.date?.message}
            required
          />
          <Input
            label="Time"
            type="time"
            {...register("time")}
            error={errors.time?.message}
            required
          />
        </div>

        <Input
          label="Location"
          placeholder="Event location"
          {...register("location")}
          error={errors.location?.message}
          required
        />

        <Textarea
          label="Description"
          placeholder="Event description"
          rows={4}
          {...register("description")}
          error={errors.description?.message}
          required
        />

        <Select
          label="Category"
          options={[
            { value: "Weekly Service", label: "Weekly Service" },
            { value: "Youth", label: "Youth" },
            { value: "Ministry", label: "Ministry" },
            { value: "Special Event", label: "Special Event" },
            { value: "Annual Event", label: "Annual Event" },
          ]}
          {...register("category")}
          error={errors.category?.message}
          required
        />

        <Input
          label="Color (Tailwind class)"
          placeholder="e.g., bg-blue-500"
          {...register("color")}
          error={errors.color?.message}
        />

        <div className="space-y-2">
          <Checkbox
            label="Recurring Event"
            {...register("recurring")}
            id="recurring"
          />
          <Checkbox
            label="Published"
            {...register("published")}
            id="published"
          />
        </div>
      </form>
    </Modal>
  );
}
