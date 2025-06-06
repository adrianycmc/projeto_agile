import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideosPage from './pages/VideosPage';
import MaterialsPage from './pages/MaterialsPage';
import ToolsPage from './pages/ToolsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import ForumPage from './pages/ForumPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/materiais" element={<MaterialsPage />} />
        <Route path="/ferramentas" element={<ToolsPage />} />
        <Route path="/agenda" element={<WorkshopsPage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
