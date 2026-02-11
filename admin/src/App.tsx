import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useConvexAuth } from "convex/react";
import { ToastProvider } from "./components/ui/Toast";
import LoginPage from "./components/auth/LoginPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Sermons from "./pages/Sermons";
import ServiceTimes from "./pages/ServiceTimes";
import Ministries from "./pages/Ministries";
import Testimonials from "./pages/Testimonials";
import PageContent from "./pages/PageContent";
import Images from "./pages/Images";
import Settings from "./pages/Settings";

function App() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="events" element={<Events />} />
            <Route path="sermons" element={<Sermons />} />
            <Route path="service-times" element={<ServiceTimes />} />
            <Route path="ministries" element={<Ministries />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="page-content" element={<PageContent />} />
            <Route path="images" element={<Images />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
