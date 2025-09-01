import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";
import { format } from "date-fns";

const TaskCard = ({ task, index }) => {
  const getCategoryVariant = (category) => {
    switch (category.toLowerCase()) {
      case "react": return "react";
      case "maintain": return "maintain";
      case "improve": return "improve";
      default: return "default";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-green-600";
      default: return "text-slate-600";
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "completed": return "CheckCircle2";
      case "in-progress": return "Clock";
      case "pending": return "Circle";
      default: return "Circle";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <ApperIcon 
                name={getStatusIcon(task.status)} 
                className={`w-5 h-5 ${
                  task.status === "completed" ? "text-green-600" : "text-slate-400"
                }`} 
              />
              <h4 className="font-semibold text-slate-900">{task.title}</h4>
            </div>
            <Badge variant={getCategoryVariant(task.category)}>
              {task.category}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
            <span className="flex items-center">
              <ApperIcon name="User" className="w-4 h-4 mr-1" />
              {task.assignee}
            </span>
            <span className={`font-medium ${getPriorityColor(task.priority)}`}>
              {task.priority} Priority
            </span>
          </div>

          {task.dueDate && (
            <div className="flex items-center text-sm text-slate-500">
              <ApperIcon name="Calendar" className="w-4 h-4 mr-1" />
              Due: {format(new Date(task.dueDate), "MMM dd, yyyy")}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TaskCard;