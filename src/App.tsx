import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SolutionWizard from "./pages/SolutionWizard";
import CaseStudies from "./pages/CaseStudies";
import AdvancedSurfaceTechnologies from "./pages/AdvancedSurfaceTechnologies";
import ContactPage from "./pages/ContactPage";
import SolutionsPage from "./pages/SolutionsPage";
import ServicesPage from "./pages/ServicesPage";
import ProcessConsultingPage from "./pages/ProcessConsultingPage";
import ManufacturingServicesPage from "./pages/ManufacturingServicesPage";
import EquipmentSolutionsPage from "./pages/EquipmentSolutionsPage";
import KnowledgeCenterPage from "./pages/KnowledgeCenterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/process-consulting" element={<ProcessConsultingPage />} />
          <Route path="services/manufacturing-validation" element={<ManufacturingServicesPage />} />
          <Route path="services/equipment-solutions" element={<EquipmentSolutionsPage />} />
          <Route path="cases" element={<CaseStudies />} />
          <Route path="knowledge" element={<KnowledgeCenterPage />} />
          <Route path="advanced-surface-technologies" element={<AdvancedSurfaceTechnologies />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="solution" element={<Navigate to="/solutions" replace />} />
          <Route path="deburring" element={<Navigate to="/" replace />} />
          <Route path="polishing" element={<Navigate to="/" replace />} />
          <Route path="processes" element={<Navigate to="/" replace />} />
          <Route path="capabilities" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

