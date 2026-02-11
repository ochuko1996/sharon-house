import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Alert from "../components/ui/Alert";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { useToast } from "../components/ui/useToast";
import { Edit2, Save, X } from "lucide-react";

interface PageContentData {
  _id: Id<"pageContent">;
  pageId: string;
  title: string;
  content: string;
  seoMeta?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
  updatedAt: number;
}

const AVAILABLE_PAGES = [
  { id: "about", name: "About Us" },
  { id: "visit", name: "Visit" },
  { id: "contact", name: "Contact" },
  { id: "give", name: "Give/Donations" },
  { id: "media", name: "Media & Resources" },
];

export default function PageContent() {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState<PageContentData | null>(
    null,
  );
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [seoExpanded, setSeoExpanded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    seoMeta: {
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      ogImage: "",
    },
  });

  const toast = useToast();
  const allContent = useQuery(api.pageContent.getPageContent) || [];

  const updatePageContent = useMutation(api.pageContent.updatePageContent);
  const createPageContent = useMutation(api.pageContent.createPageContent);

  const handlePageSelect = (pageId: string) => {
    setSelectedPage(pageId);
    const content = allContent.find((c) => c.pageId === pageId);

    if (content) {
      setEditingContent(content);
      setFormData({
        title: content.title,
        content: content.content,
        seoMeta: {
          metaTitle: content.seoMeta?.metaTitle || "",
          metaDescription: content.seoMeta?.metaDescription || "",
          keywords: content.seoMeta?.keywords?.join(", ") || "",
          ogImage: content.seoMeta?.ogImage || "",
        },
      });
    } else {
      setEditingContent(null);
      setFormData({
        title: "",
        content: "",
        seoMeta: {
          metaTitle: "",
          metaDescription: "",
          keywords: "",
          ogImage: "",
        },
      });
    }
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setEditingContent(null);
    setError(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError(null);

      if (!selectedPage) {
        setError("Please select a page");
        return;
      }

      if (!formData.title.trim()) {
        setError("Title is required");
        return;
      }

      if (!formData.content.trim()) {
        setError("Content is required");
        return;
      }

      const seoMeta = {
        metaTitle: formData.seoMeta.metaTitle || undefined,
        metaDescription: formData.seoMeta.metaDescription || undefined,
        keywords: formData.seoMeta.keywords
          ? formData.seoMeta.keywords.split(",").map((k) => k.trim())
          : undefined,
        ogImage: formData.seoMeta.ogImage || undefined,
      };

      if (editingContent) {
        await updatePageContent({
          id: editingContent._id,
          title: formData.title,
          content: formData.content,
          seoMeta,
        });
        toast.success("Page content updated successfully!");
      } else {
        await createPageContent({
          pageId: selectedPage,
          title: formData.title,
          content: formData.content,
          seoMeta,
        });
        toast.success("Page content created successfully!");
      }

      handleFormClose();
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      toast.error(message);
    }
  };

  if (!allContent) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Page Content</h1>
        <p className="text-gray-600 mt-1">
          Edit content and SEO metadata for website pages
        </p>
      </div>

      {error && <Alert type="error" message={error} />}

      {/* Page Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AVAILABLE_PAGES.map((page) => {
          const hasContent = allContent.some((c) => c.pageId === page.id);
          return (
            <Card
              key={page.id}
              padding="md"
              className="hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{page.name}</h3>
                  <p className="text-sm text-gray-500">/{page.id}</p>
                </div>
                {hasContent && (
                  <Badge type="success" size="sm">
                    ✓
                  </Badge>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {allContent.find((c) => c.pageId === page.id)?.title ||
                  "No content yet"}
              </p>

              <Button
                variant="secondary"
                size="sm"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => handlePageSelect(page.id)}
              >
                <Edit2 className="w-4 h-4" />
                {hasContent ? "Edit" : "Create"}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Content Editor Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={handleFormClose}
        title={
          editingContent
            ? `Edit ${AVAILABLE_PAGES.find((p) => p.id === selectedPage)?.name}`
            : `Create ${AVAILABLE_PAGES.find((p) => p.id === selectedPage)?.name}`
        }
        size="xl"
      >
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input
            label="Page Title"
            placeholder="e.g., About Sharon House"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />

          <Textarea
            label="Main Content"
            placeholder="Enter the main content for this page. You can use markdown formatting."
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            rows={10}
            required
            helperText={`${formData.content.length} characters`}
          />

          {/* SEO Section */}
          <div className="border rounded-lg p-4 space-y-4">
            <button
              type="button"
              onClick={() => setSeoExpanded(!seoExpanded)}
              className="flex items-center justify-between w-full font-medium text-gray-900 hover:text-gray-600"
            >
              <span>📄 SEO Metadata</span>
              <span>{seoExpanded ? "▼" : "▶"}</span>
            </button>

            {seoExpanded && (
              <div className="space-y-4 pt-4 border-t">
                <Input
                  label="Meta Title"
                  placeholder="Page title for search engines (50-60 chars)"
                  value={formData.seoMeta.metaTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seoMeta: {
                        ...formData.seoMeta,
                        metaTitle: e.target.value,
                      },
                    })
                  }
                  helperText={`${formData.seoMeta.metaTitle.length} characters`}
                />

                <Textarea
                  label="Meta Description"
                  placeholder="Page description for search engines (150-160 chars)"
                  value={formData.seoMeta.metaDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seoMeta: {
                        ...formData.seoMeta,
                        metaDescription: e.target.value,
                      },
                    })
                  }
                  rows={2}
                  helperText={`${formData.seoMeta.metaDescription.length} characters`}
                />

                <Input
                  label="Keywords"
                  placeholder="Comma-separated keywords"
                  value={formData.seoMeta.keywords}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seoMeta: {
                        ...formData.seoMeta,
                        keywords: e.target.value,
                      },
                    })
                  }
                  helperText="e.g., church, community, faith, worship"
                />

                <Input
                  label="OG Image URL"
                  placeholder="https://example.com/image.jpg"
                  value={formData.seoMeta.ogImage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seoMeta: {
                        ...formData.seoMeta,
                        ogImage: e.target.value,
                      },
                    })
                  }
                  helperText="Image for social media sharing (1200x630px recommended)"
                />
              </div>
            )}
          </div>

          {error && <Alert type="error" message={error} />}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              variant="secondary"
              type="button"
              onClick={handleFormClose}
              className="flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {editingContent ? "Update" : "Create"} Page
            </Button>
          </div>
        </form>
      </Modal>

      {/* Content Summary */}
      <Card padding="lg" className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="font-semibold text-gray-900 mb-2">
          📝 Content Management Tips
        </h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>✓ Update SEO metadata to improve search engine rankings</li>
          <li>✓ Use clear, descriptive titles for each page</li>
          <li>✓ Include relevant keywords in meta descriptions</li>
          <li>✓ OG Image appears when pages are shared on social media</li>
          <li>✓ All changes are saved and published immediately</li>
        </ul>
      </Card>
    </div>
  );
}
