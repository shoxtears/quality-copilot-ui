export interface TestCase {
  id: string;
  title: string;
  steps?: string;
  expectedResult?: string;
  severity?: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Not Tested' | 'Passed' | 'Failed' | 'Blocked' | 'N/A';
  naReasonNote?: string;
  causedBugId?: string;
  productionBugId?: string;
  tags?: string[];
  estimate?: string;
  notes?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}
