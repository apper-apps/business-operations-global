import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const DashboardCard = ({ metric, index }) => {
  const getChangeColor = (change) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-slate-500";
  };

  const getChangeIcon = (change) => {
    if (change > 0) return "TrendingUp";
    if (change < 0) return "TrendingDown";
    return "Minus";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -4,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <Card className="p-6 border-l-4" style={{ borderLeftColor: metric.color }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 mb-1">{metric.title}</p>
            <p className="text-3xl font-bold text-slate-900">{metric.value}</p>
            {metric.change !== undefined && (
              <div className={`flex items-center mt-2 text-sm ${getChangeColor(metric.change)}`}>
                <ApperIcon name={getChangeIcon(metric.change)} className="w-4 h-4 mr-1" />
                <span>{Math.abs(metric.change)}% from last month</span>
              </div>
            )}
          </div>
          <div 
            className="p-3 rounded-full"
            style={{ backgroundColor: `${metric.color}20` }}
          >
            <ApperIcon 
              name={metric.icon} 
              className="w-6 h-6" 
              style={{ color: metric.color }}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default DashboardCard;