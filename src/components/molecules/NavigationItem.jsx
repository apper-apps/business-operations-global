import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const NavigationItem = ({ item, isCollapsed }) => {
  const location = useLocation();

  if (item.children && item.children.length > 0) {
    const isParentActive = item.children.some(child => location.pathname === child.path);

    return (
      <div className="space-y-1">
        <div
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
            isParentActive 
              ? "bg-primary-100 text-primary-900" 
              : "text-slate-700 hover:bg-slate-100"
          }`}
        >
          <ApperIcon name={item.icon} className="w-5 h-5 shrink-0" />
          {!isCollapsed && (
            <>
              <span className="ml-3 truncate">{item.label}</span>
            </>
          )}
        </div>
        {!isCollapsed && (
<div className="ml-8 space-y-1">
            {item.children.map((child, index) => (
              <NavLink
                key={child.id || `child-${index}`}
                to={child.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary-600 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <span className="truncate">{child.label}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
          isActive
            ? "bg-primary-600 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }`
      }
    >
      <ApperIcon name={item.icon} className="w-5 h-5 shrink-0" />
      {!isCollapsed && (
        <span className="ml-3 truncate">{item.label}</span>
      )}
    </NavLink>
  );
};

export default NavigationItem;