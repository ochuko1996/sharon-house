import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Alert from "../components/ui/Alert";
import Badge from "../components/ui/Badge";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useToast } from "../components/ui/useToast";
import { Save, RotateCcw, Trash2 } from "lucide-react";

// Default settings structure
const DEFAULT_SETTINGS = {
  "site.name": {
    label: "Church Name",
    description: "Official name of your church",
    type: "text",
  },
  "site.email": {
    label: "Contact Email",
    description: "Primary contact email address",
    type: "email",
  },
  "site.phone": {
    label: "Contact Phone",
    description: "Primary phone number",
    type: "tel",
  },
  "site.address": {
    label: "Physical Address",
    description: "Church building address",
    type: "text",
  },
  "site.description": {
    label: "Site Description",
    description: "Short description of your church",
    type: "textarea",
  },
  "social.facebook": {
    label: "Facebook URL",
    description: "Link to Facebook page",
    type: "url",
  },
  "social.instagram": {
    label: "Instagram URL",
    description: "Link to Instagram profile",
    type: "url",
  },
  "social.youtube": {
    label: "YouTube Channel",
    description: "Link to YouTube channel",
    type: "url",
  },
  "service.defaultLocation": {
    label: "Default Service Location",
    description: "Default location for services",
    type: "text",
  },
  "service.timezone": {
    label: "Timezone",
    description: "Your church timezone (e.g., America/New_York)",
    type: "text",
  },
  "email.from": {
    label: "From Email Address",
    description: "Email address for sending notifications",
    type: "email",
  },
  "email.supportEmail": {
    label: "Support Email",
    description: "Email for support requests",
    type: "email",
  },
};

export default function Settings() {
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [showNewSetting, setShowNewSetting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toast = useToast();
  const settings = useQuery(api.settings.getSettings) || [];
  const setSetting = useMutation(api.settings.setSetting);
  const deleteSetting = useMutation(api.settings.deleteSetting);

  const handleEditStart = (key: string, value: string) => {
    setEditingKey(key);
    setEditingValue(value);
    setError(null);
  };

  const handleEditCancel = () => {
    setEditingKey(null);
    setEditingValue("");
  };

  const handleEditSave = async (key: string) => {
    try {
      setError(null);

      if (!editingValue.trim()) {
        setError("Value cannot be empty");
        return;
      }

      await setSetting({
        key,
        value: editingValue,
      });

      toast.success(`Setting saved: ${key}`);
      setEditingKey(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save";
      setError(message);
      toast.error(message);
    }
  };

  const handleAddNewSetting = async () => {
    try {
      setError(null);

      if (!newKey.trim()) {
        setError("Key is required");
        return;
      }

      if (!newValue.trim()) {
        setError("Value is required");
        return;
      }

      if (settings.some((s) => s.key === newKey)) {
        setError("This key already exists");
        return;
      }

      await setSetting({
        key: newKey,
        value: newValue,
      });

      toast.success(`New setting added: ${newKey}`);
      setNewKey("");
      setNewValue("");
      setShowNewSetting(false);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to add setting";
      setError(message);
      toast.error(message);
    }
  };

  const handleDelete = async (key: string) => {
    try {
      await deleteSetting({ key });
      toast.success(`Setting deleted: ${key}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete";
      toast.error(message);
    }
  };

  if (!settings) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingSpinner />
      </div>
    );
  }

  // Group settings by category
  const groupedSettings = {
    "Site Settings": Object.entries(DEFAULT_SETTINGS)
      .filter(([key]) => key.startsWith("site."))
      .map(([key, config]) => ({
        key,
        ...config,
      })),
    "Social Media": Object.entries(DEFAULT_SETTINGS)
      .filter(([key]) => key.startsWith("social."))
      .map(([key, config]) => ({
        key,
        ...config,
      })),
    "Service Settings": Object.entries(DEFAULT_SETTINGS)
      .filter(([key]) => key.startsWith("service."))
      .map(([key, config]) => ({
        key,
        ...config,
      })),
    "Email Configuration": Object.entries(DEFAULT_SETTINGS)
      .filter(([key]) => key.startsWith("email."))
      .map(([key, config]) => ({
        key,
        ...config,
      })),
  };

  const customSettings = settings.filter(
    (s) => !Object.keys(DEFAULT_SETTINGS).includes(s.key),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage site-wide configuration and preferences
        </p>
      </div>

      {error && <Alert type="error" message={error} />}

      {/* Default Settings Sections */}
      {Object.entries(groupedSettings).map(([category, categorySettings]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{category}</h2>

          <div className="space-y-3">
            {categorySettings.map((setting) => {
              const currentSetting = settings.find(
                (s) => s.key === setting.key,
              );
              const isEditing = editingKey === setting.key;

              return (
                <Card key={setting.key} padding="md">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-medium text-gray-900">
                        {setting.label}
                      </p>
                      <p className="text-sm text-gray-500">
                        {setting.description}
                      </p>
                    </div>

                    {isEditing ? (
                      <div className="space-y-2">
                        {setting.type === "textarea" ? (
                          <Textarea
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            rows={3}
                            autoFocus
                          />
                        ) : (
                          <Input
                            type={setting.type}
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            autoFocus
                          />
                        )}

                        <div className="flex gap-2">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleEditSave(setting.key)}
                            className="flex items-center gap-2"
                          >
                            <Save className="w-4 h-4" />
                            Save
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={handleEditCancel}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {currentSetting ? (
                          <div className="flex items-start justify-between gap-4">
                            <p className="text-sm bg-gray-50 rounded p-3 flex-1 break-all font-mono">
                              {currentSetting.value}
                            </p>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() =>
                                handleEditStart(
                                  setting.key,
                                  currentSetting.value,
                                )
                              }
                            >
                              Edit
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <Badge type="gray">Not Set</Badge>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => handleEditStart(setting.key, "")}
                            >
                              Set Value
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      ))}

      {/* Custom Settings */}
      {customSettings.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Custom Settings
          </h2>

          <div className="space-y-3">
            {customSettings.map((setting) => {
              const isEditing = editingKey === setting.key;

              return (
                <Card key={setting.key} padding="md">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="font-mono font-medium text-gray-900">
                        {setting.key}
                      </p>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(setting.key)}
                        className="flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </Button>
                    </div>

                    {isEditing ? (
                      <div className="space-y-2">
                        <Textarea
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          rows={3}
                          autoFocus
                        />

                        <div className="flex gap-2">
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleEditSave(setting.key)}
                            className="flex items-center gap-2"
                          >
                            <Save className="w-4 h-4" />
                            Save
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={handleEditCancel}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm bg-gray-50 rounded p-3 flex-1 break-all font-mono">
                          {setting.value}
                        </p>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() =>
                            handleEditStart(setting.key, setting.value)
                          }
                        >
                          Edit
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Add New Setting */}
      <Card padding="md" className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Add Custom Setting</h3>

          {showNewSetting ? (
            <div className="space-y-3">
              <Input
                label="Setting Key"
                placeholder="e.g., feature.analytics"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
                helperText="Use dot notation for organization"
              />

              <Textarea
                label="Setting Value"
                placeholder="Enter the value for this setting"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                rows={3}
              />

              <div className="flex gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleAddNewSetting}
                  className="flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Add Setting
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setShowNewSetting(false);
                    setNewKey("");
                    setNewValue("");
                    setError(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <Button
              variant="secondary"
              onClick={() => setShowNewSetting(true)}
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Add New Setting
            </Button>
          )}
        </div>
      </Card>

      {/* Info Box */}
      <Card padding="lg" className="bg-blue-50 border-l-4 border-blue-500">
        <h3 className="font-semibold text-gray-900 mb-2">💡 About Settings</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>
            ✓ All settings are stored in the database and available to your
            website
          </li>
          <li>
            ✓ Use dot notation (e.g., feature.enabled) to organize custom
            settings
          </li>
          <li>✓ Changes take effect immediately</li>
          <li>✓ Settings can be queried via the API on your public website</li>
          <li>✓ Delete custom settings by clicking the Remove button</li>
        </ul>
      </Card>
    </div>
  );
}
