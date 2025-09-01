import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const Toolbox = () => {
  const tools = [
    {
      id: 1,
      name: "Budget Calculator",
      description: "Calculate project budgets and expenses",
      icon: "Calculator",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "Time Tracker",
      description: "Track time spent on various tasks",
      icon: "Clock",
      color: "#10b981"
    },
    {
      id: 3,
      name: "Resource Planner",
      description: "Plan and allocate team resources",
      icon: "Users",
      color: "#f59e0b"
    },
    {
      id: 4,
      name: "Performance Analyzer",
      description: "Analyze team and project performance",
      icon: "TrendingUp",
      color: "#8b5cf6"
    },
    {
      id: 5,
      name: "Document Manager",
      description: "Organize and manage business documents",
      icon: "FileText",
      color: "#ef4444"
    },
    {
      id: 6,
      name: "Communication Hub",
      description: "Centralized team communication",
      icon: "MessageSquare",
      color: "#06b6d4"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Toolbox</h1>
        <p className="text-slate-600">
          Essential tools and utilities to enhance your business operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -4,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Card className="h-full cursor-pointer hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${tool.color}20` }}
                  >
                    <ApperIcon 
                      name={tool.icon} 
                      className="w-6 h-6" 
                      style={{ color: tool.color }}
                    />
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{tool.description}</p>
                <div className="mt-4">
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                    Launch Tool
                    <ApperIcon name="ArrowRight" className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Toolbox;