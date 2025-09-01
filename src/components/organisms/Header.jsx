import { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Header = ({ onToggleSidebar, isSidebarCollapsed }) => {
  return (
    <motion.header 
      className="bg-white border-b border-slate-200 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleSidebar}
            className="lg:hidden"
          >
            <ApperIcon name="Menu" className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <ApperIcon name="Building2" className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">Business Operations Hub</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ApperIcon name="Search" className="w-4 h-4 mr-2" />
            Search
          </Button>
          
          <Button variant="ghost" size="sm">
            <ApperIcon name="Bell" className="w-4 h-4" />
          </Button>
          
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <ApperIcon name="User" className="w-4 h-4 text-slate-600" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;