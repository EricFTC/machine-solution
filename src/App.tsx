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

// Service pages
import DeburringPage from "./pages/services/DeburringPage";
import PolishingPage from "./pages/services/PolishingPage";
import BrushingGrindingPage from "./pages/services/BrushingGrindingPage";

// Industry pages
import AutomotivePage from "./pages/industries/AutomotivePage";
import AerospacePage from "./pages/industries/AerospacePage";
import ConstructionPage from "./pages/industries/ConstructionPage";

// Knowledge articles
import DeburringMethodsGuide from "./pages/knowledge/DeburringMethodsGuide";
import SurfaceRoughnessGuide from "./pages/knowledge/SurfaceRoughnessGuide";
import BrushedVsMirrorFinish from "./pages/knowledge/BrushedVsMirrorFinish";
import AutomateFinishingProcess from "./pages/knowledge/AutomateFinishingProcess";
import StainlessSteelFinishing from "./pages/knowledge/StainlessSteelFinishing";

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
          <Route path="services/deburring" element={<DeburringPage />} />
          <Route path="services/polishing" element={<PolishingPage />} />
          <Route path="services/brushing-grinding" element={<BrushingGrindingPage />} />
          <Route path="industries/automotive" element={<AutomotivePage />} />
          <Route path="industries/aerospace" element={<AerospacePage />} />
          <Route path="industries/construction" element={<ConstructionPage />} />
          <Route path="cases" element={<CaseStudies />} />
          <Route path="knowledge" element={<KnowledgeCenterPage />} />
          <Route path="knowledge/deburring-methods-guide" element={<DeburringMethodsGuide />} />
          <Route path="knowledge/surface-roughness-guide" element={<SurfaceRoughnessGuide />} />
          <Route path="knowledge/brushed-vs-mirror-finish" element={<BrushedVsMirrorFinish />} />
          <Route path="knowledge/automate-finishing-process" element={<AutomateFinishingProcess />} />
          <Route path="knowledge/stainless-steel-finishing" element={<StainlessSteelFinishing />} />
          <Route path="advanced-surface-technologies" element={<AdvancedSurfaceTechnologies />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="solution" element={<Navigate to="/solutions" replace />} />
          <Route path="deburring" element={<Navigate to="/services/deburring" replace />} />
          <Route path="polishing" element={<Navigate to="/services/polishing" replace />} />
          <Route path="processes" element={<Navigate to="/" replace />} />
          <Route path="capabilities" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
