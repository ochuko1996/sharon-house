import { useState, useRef } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import { useToast } from "../components/ui/useToast";
import {
  Trash2,
  Upload,
  Copy,
  CheckCircle2,
  FileImage,
  Eye,
} from "lucide-react";

interface ImageData {
  _id: Id<"images">;
  name: string;
  size: number;
  hash: string;
  storageId: Id<"_storage">;
  url: string;
  uploadedAt: number;
}

export default function Images() {
  const [isUploading, setIsUploading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<ImageData | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toast = useToast();
  const images = useQuery(api.images.getImages) || [];
  const generateUploadUrl = useMutation(api.images.generateUploadUrl);
  const createImage = useMutation(api.images.createImage);
  const deleteImageMutation = useMutation(api.images.deleteImage);

  // Simple hash function for deduplication (client-side preview)
  const calculateHash = async (file: File): Promise<string> => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setError(null);
      setIsUploading(true);

      // Validate file type
      if (!file.type.startsWith("image/")) {
        throw new Error("Please select an image file");
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("Image must be smaller than 5MB");
      }

      // Generate hash for deduplication
      const hash = await calculateHash(file);

      // Get upload URL
      const uploadUrl = await generateUploadUrl();

      // Upload file
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const { storageId } = await response.json();

      // Get image URL
      const imageUrl = await fetch(`/api/image?storageId=${storageId}`).then(
        (r) => r.text(),
      );

      // Create image record (will deduplicate by hash)
      await createImage({
        name: file.name,
        size: file.size,
        hash,
        storageId,
        url: imageUrl || "",
      });

      toast.success("Image uploaded successfully!");

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed";
      setError(message);
      toast.error(message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: Id<"images">) => {
    try {
      await deleteImageMutation({ id });
      toast.success("Image deleted successfully!");
      setDeleteConfirm(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete";
      toast.error(message);
    }
  };

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success("URL copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  // Filter images based on search
  const filteredImages = images.filter((img) =>
    img.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (!images) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Images & Media</h1>
        <p className="text-gray-600 mt-1">
          Upload and manage images for your website
        </p>
      </div>

      {error && <Alert type="error" message={error} />}

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow p-8 border-2 border-dashed border-gray-300 hover:border-gray-400 transition">
        <div className="flex flex-col items-center justify-center">
          <FileImage className="w-12 h-12 text-gray-400 mb-4" />

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Upload Images
          </h3>
          <p className="text-gray-600 text-center mb-4">
            Drag and drop your images here, or click to select files
            <br />
            <span className="text-sm text-gray-500">
              Max size: 5MB • Formats: JPG, PNG, GIF, WebP
            </span>
          </p>

          <Button
            variant="primary"
            className="flex items-center gap-2"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            <Upload className="w-5 h-5" />
            {isUploading ? "Uploading..." : "Choose Image"}
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={isUploading}
            className="hidden"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm">Total Images</p>
          <p className="text-3xl font-bold">{images.length}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm">Storage Used</p>
          <p className="text-3xl font-bold">
            {formatFileSize(images.reduce((sum, img) => sum + img.size, 0))}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm">Average Size</p>
          <p className="text-3xl font-bold">
            {images.length > 0
              ? formatFileSize(
                  images.reduce((sum, img) => sum + img.size, 0) /
                    images.length,
                )
              : "—"}
          </p>
        </div>
      </div>

      {/* Search */}
      <Input
        placeholder="Search images by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full"
      />

      {/* Images Grid */}
      <div className="bg-white rounded-lg shadow">
        {filteredImages.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500">
              {images.length === 0
                ? "No images yet"
                : "No images match your search"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {filteredImages.map((image) => (
              <div
                key={image._id}
                className="group rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition"
              >
                {/* Image Preview */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center gap-2">
                    <button
                      onClick={() => setPreviewImage(image)}
                      className="opacity-0 group-hover:opacity-100 transition p-2 bg-white rounded-full hover:bg-gray-100"
                      title="Preview"
                    >
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 truncate">
                      {image.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(image.size)}
                    </p>
                  </div>

                  {/* Copy URL */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={image.url}
                      readOnly
                      className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1 truncate"
                    />
                    <button
                      onClick={() => handleCopyUrl(image.url, image._id)}
                      className="p-2 hover:bg-gray-100 rounded transition"
                      title="Copy URL"
                    >
                      {copiedId === image._id ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Actions */}
                  {deleteConfirm === image._id ? (
                    <div className="flex gap-2">
                      <Button
                        variant="danger"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleDelete(image._id)}
                      >
                        Confirm Delete
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                        onClick={() => setDeleteConfirm(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="danger"
                      size="sm"
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => setDeleteConfirm(image._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preview Modal */}
      <Modal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        title={previewImage?.name || "Preview"}
        size="lg"
      >
        {previewImage && (
          <div className="space-y-4">
            <img
              src={previewImage.url}
              alt={previewImage.name}
              className="w-full h-auto rounded-lg"
            />

            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Filename</p>
                <p className="font-medium text-gray-900">{previewImage.name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">File Size</p>
                <p className="font-medium text-gray-900">
                  {formatFileSize(previewImage.size)}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Image URL</p>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value={previewImage.url}
                    readOnly
                    className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded px-3 py-2"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      handleCopyUrl(previewImage.url, previewImage._id)
                    }
                    className="flex items-center gap-2"
                  >
                    {copiedId === previewImage._id ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="secondary" onClick={() => setPreviewImage(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
