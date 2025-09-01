import { motion, AnimatePresence } from "framer-motion";
import NavigationItem from "@/components/molecules/NavigationItem";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Sidebar = ({ isOpen, onClose, isCollapsed, onToggleCollapse, navigationItems }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden lg:flex flex-col bg-white border-r border-slate-200"
        animate={{ width: isCollapsed ? 80 : 240 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 border-b border-slate-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleCollapse}
            className="w-full justify-center"
          >
            <ApperIcon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} className="w-4 h-4" />
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            
            <motion.aside
              className="lg:hidden fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Building2" className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="font-semibold text-slate-900">Operations Hub</h2>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <ApperIcon name="X" className="w-4 h-4" />
                </Button>
              </div>

              <nav className="p-4 space-y-2 overflow-y-auto">
                {navigationItems.map((item) => (
                  <NavigationItem
                    key={item.id}
                    item={item}
                    isCollapsed={false}
                  />
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;