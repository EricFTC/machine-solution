import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SolutionWizard from "./pages/SolutionWizard";
import CaseStudies from "./pages/CaseStudies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="solution" element={<SolutionWizard />} />
          <Route path="cases" element={<CaseStudies />} />
          <Route path="deburring" element={<Navigate to="/" replace />} />
          <Route path="polishing" element={<Navigate to="/" replace />} />
          <Route path="processes" element={<Navigate to="/" replace />} />
          <Route path="capabilities" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

