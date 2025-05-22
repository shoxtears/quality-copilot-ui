import TestCaseEditor from "@/features/test-cases/TestCaseEditor";

export default function TestCasesPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Test Cases</h1>
      <TestCaseEditor />
    </div>
  );
}
