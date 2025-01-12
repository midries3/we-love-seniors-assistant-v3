import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import AirFryers from "./pages/products/AirFryers";
import MobilityScooters from "./pages/products/MobilityScooters";
import SmartPillDispensers from "./pages/products/SmartPillDispensers";
import SmartCanes from "./pages/products/SmartCanes";
import SecurityCameras from "./pages/products/SecurityCameras";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/air-fryers" element={<AirFryers />} />
          <Route path="/products/mobility-scooters" element={<MobilityScooters />} />
          <Route path="/products/smart-pill-dispensers" element={<SmartPillDispensers />} />
          <Route path="/products/smart-canes" element={<SmartCanes />} />
          <Route path="/products/security-cameras" element={<SecurityCameras />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;