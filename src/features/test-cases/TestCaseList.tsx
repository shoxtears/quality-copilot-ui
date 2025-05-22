import { useEffect, useState } from 'react';
import { getTestCases } from './testCaseAPI';
import { TestCase } from './testCaseTypes';

interface TestCaseListProps {
  reloadToken?: number;
  onEdit?: (tc: TestCase) => void;
}

export default function TestCaseList({ reloadToken, onEdit }: TestCaseListProps) {
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getTestCases()
      .then(setTestCases)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [reloadToken]);

  if (loading) return <p>Loading test cases...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ marginTop: 16 }}>
      <h2 style={{ fontSize: 20, fontWeight: 'bold' }}>Test Cases</h2>
      <ul style={{ marginTop: 12 }}>
        {testCases.map((tc) => (
          <li key={tc.id} style={{ padding: 8, borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>
              <strong>{tc.title}</strong> — {tc.status} ({tc.severity})
            </span>
            <button onClick={() => onEdit?.(tc)} style={{ fontSize: 14 }}>✏️ Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
