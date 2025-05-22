import {
  Button,
  Card,
  CardContent,
  Input,
  Select,
  SelectContent,
  SelectItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Textarea
} from "@/components/ui-shadcn";

const defaultState: Partial<TestCase> = {
  title: "",
  status: "Not Tested",
  severity: "Low",
  estimate: "",
  tags: [],
};

interface TestCaseEditorProps {
  onCreated?: () => void;
}

export default function TestCaseEditor({ onCreated }: TestCaseEditorProps) {
  const [form, setForm] = useState<Partial<TestCase>>(defaultState);
  const [saving, setSaving] = useState(false);

  const handleChange = (field: keyof TestCase, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (form.status === "N/A" && !form.naReasonNote?.trim()) {
      alert("Please provide a reason for selecting N/A status.");
      return;
    }
    if (!form.title?.trim()) {
      alert("Title is required.");
      return;
    }
    setSaving(true);
    try {
      await createTestCase(form);
      alert("Test case created!");
      setForm(defaultState);
      if (onCreated) onCreated();
    } catch (err) {
      alert("Failed to save test case.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Test Case Editor</h1>
      <Tabs defaultValue="basic">
        <TabsList>
          <TabsTrigger value="basic">Details</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <Card>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Input
                placeholder="Title *"
                value={form.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
              />
              <Select onValueChange={(val) => handleChange("status", val)} defaultValue={form.status}>
                <SelectContent>
                  <SelectItem value="Not Tested">Not Tested</SelectItem>
                  <SelectItem value="Passed">Passed</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                  <SelectItem value="Blocked">Blocked</SelectItem>
                  <SelectItem value="N/A">N/A</SelectItem>
                </SelectContent>
              </Select>
              {form.status === "N/A" && (
                <Textarea
                  placeholder="Please provide reason for N/A"
                  value={form.naReasonNote || ""}
                  onChange={(e) => handleChange("naReasonNote", e.target.value)}
                />
              )}
              <Select onValueChange={(val) => handleChange("severity", val)} defaultValue={form.severity}>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Critical">Critical</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Estimate (e.g. 5m, 1h)"
                value={form.estimate || ""}
                onChange={(e) => handleChange("estimate", e.target.value)}
              />
              <Input
                placeholder="Tags (comma-separated)"
                value={form.tags?.join(", ") || ""}
                onChange={(e) => handleChange("tags", e.target.value.split(",").map(tag => tag.trim()))}
              />
              <Textarea
                placeholder="Steps (optional)"
                value={form.steps || ""}
                onChange={(e) => handleChange("steps", e.target.value)}
              />
              <Textarea
                placeholder="Expected Result (optional)"
                value={form.expectedResult || ""}
                onChange={(e) => handleChange("expectedResult", e.target.value)}
              />
              <Textarea
                placeholder="Execution Notes (optional)"
                value={form.notes || ""}
                onChange={(e) => handleChange("notes", e.target.value)}
              />
              <Input
                placeholder="Caused Bug ID (TargetProcess)"
                value={form.causedBugId || ""}
                onChange={(e) => handleChange("causedBugId", e.target.value)}
              />
              <Input
                placeholder="Production Bug ID (TargetProcess)"
                value={form.productionBugId || ""}
                onChange={(e) => handleChange("productionBugId", e.target.value)}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <p style={{ fontWeight: 500 }}>Created By: John Doe</p>
              <p style={{ fontSize: "0.875rem", color: "gray" }}>Edited History:</p>
              <ul style={{ fontSize: "0.875rem" }}>
                <li>Jane Smith — Title updated — 2025-05-15</li>
                <li>John Doe — Initial creation — 2025-05-12</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Test Case"}
        </Button>
      </div>
    </div>
  );
}
