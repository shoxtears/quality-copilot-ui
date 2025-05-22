import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutShell from '@/components/layout/LayoutShell';
import Dashboard from '@/pages/Dashboard';
import TestCasesPage from '@/pages/TestCasesPage';
import TestRunsPage from '@/pages/TestRunsPage';
import ProjectsPage from '@/pages/ProjectsPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutShell />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test-cases" element={<TestCasesPage />} />
          <Route path="/test-runs" element={<TestRunsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
