import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";
import Checkbox from "../ui/Checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const sermonSchema = z.object({
  title: z.string().min(1, "Title is required"),
  youtubeId: z.string().min(1, "YouTube ID is required"),
  youtubeUrl: z.string().url("Invalid YouTube URL"),
  date: z.string().min(1, "Date is required"),
  category: z.enum([
    "Sunday Service",
    "Midweek Service",
    "Youth Service",
    "Special",
  ]),
  speaker: z.string().min(1, "Speaker name is required"),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  published: z.boolean(),
  featured: z.boolean(),
});

type SermonFormData = z.infer<typeof sermonSchema>;

interface SermonFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SermonFormData) => Promise<void>;
  initialData?: Partial<SermonFormData>;
  isLoading?: boolean;
}

export default function SermonForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  isLoading = false,
}: SermonFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SermonFormData>({
    resolver: zodResolver(sermonSchema),
    defaultValues: initialData,
  });

  const onFormSubmit = async (data: SermonFormData) => {
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
      title={initialData ? "Edit Sermon" : "Create Sermon"}
      size="lg"
      onSubmit={() => handleSubmit(onFormSubmit)()}
      submitLabel={initialData ? "Update" : "Create"}
      isLoading={isLoading}
    >
      <form className="space-y-4">
        <Input
          label="Title"
          placeholder="Sermon title"
          {...register("title")}
          error={errors.title?.message}
          required
        />

        <Input
          label="YouTube URL"
          placeholder="https://www.youtube.com/watch?v=..."
          {...register("youtubeUrl")}
          error={errors.youtubeUrl?.message}
          required
        />

        <Input
          label="YouTube Video ID"
          placeholder="e.g., dQw4w9WgXcQ"
          {...register("youtubeId")}
          error={errors.youtubeId?.message}
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

          <Select
            label="Category"
            options={[
              { value: "Sunday Service", label: "Sunday Service" },
              { value: "Midweek Service", label: "Midweek Service" },
              { value: "Youth Service", label: "Youth Service" },
              { value: "Special", label: "Special" },
            ]}
            {...register("category")}
            error={errors.category?.message}
            required
          />
        </div>

        <Input
          label="Speaker Name"
          placeholder="Name of the speaker"
          {...register("speaker")}
          error={errors.speaker?.message}
          required
        />

        <Textarea
          label="Description"
          placeholder="Sermon description (optional)"
          rows={3}
          {...register("description")}
          error={errors.description?.message}
        />

        <Input
          label="Thumbnail URL"
          placeholder="Custom thumbnail URL (optional)"
          {...register("thumbnail")}
          error={errors.thumbnail?.message}
        />

        <div className="space-y-2">
          <Checkbox
            label="Published"
            {...register("published")}
            id="published"
          />
          <Checkbox
            label="Featured (Show on homepage)"
            {...register("featured")}
            id="featured"
          />
        </div>
      </form>
    </Modal>
  );
}
