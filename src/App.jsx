import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import Dashboard from "@/components/pages/Dashboard";
import TasksReact from "@/components/pages/TasksReact";
import TasksMaintain from "@/components/pages/TasksMaintain";
import TasksImprove from "@/components/pages/TasksImprove";
import Toolbox from "@/components/pages/Toolbox";
import Reports from "@/components/pages/Reports";
import { navigationService } from "@/services/api/navigationService";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    const loadNavigation = async () => {
      try {
        const items = await navigationService.getAll();
        setNavigationItems(items);
      } catch (error) {
        console.error("Failed to load navigation:", error);
      }
    };
    
    loadNavigation();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Header 
          onToggleSidebar={toggleSidebar} 
          isSidebarCollapsed={isSidebarCollapsed}
        />
        
        <div className="flex">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={toggleSidebarCollapse}
            navigationItems={navigationItems}
          />
          
          <main className="flex-1 min-h-[calc(100vh-73px)]">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tasks/react" element={<TasksReact />} />
                <Route path="/tasks/maintain" element={<TasksMaintain />} />
                <Route path="/tasks/improve" element={<TasksImprove />} />
                <Route path="/toolbox" element={<Toolbox />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;