import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <AppRouter />
    </div>
  );
}

// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from '@/pages/Dashboard';
// import TestCasesPage from '@/pages/TestCasesPage';
// import TestRunsPage from '@/pages/TestRunsPage';
// import ProjectsPage from '@/pages/ProjectsPage';
// import { Layout } from 'antd';
// import { Header, Content, Footer } from 'antd/lib/layout/layout';
// import { Menu } from 'antd';
// import { Link } from 'react-router-dom'; 