import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const Reports = () => {
  const reports = [
    {
      id: 1,
      name: "Task Completion Report",
      description: "Analysis of task completion rates by category",
      icon: "BarChart3",
      color: "#3b82f6",
      lastGenerated: "2024-01-15"
    },
    {
      id: 2,
      name: "Team Performance Report",
      description: "Individual and team performance metrics",
      icon: "Users",
      color: "#10b981",
      lastGenerated: "2024-01-14"
    },
    {
      id: 3,
      name: "Resource Utilization Report",
      description: "How resources are being allocated and used",
      icon: "PieChart",
      color: "#f59e0b",
      lastGenerated: "2024-01-13"
    },
    {
      id: 4,
      name: "Budget Analysis Report",
      description: "Financial overview and budget tracking",
      icon: "DollarSign",
      color: "#8b5cf6",
      lastGenerated: "2024-01-12"
    },
    {
      id: 5,
      name: "Operations Summary Report",
      description: "Comprehensive overview of all operations",
      icon: "FileText",
      color: "#ef4444",
      lastGenerated: "2024-01-11"
    },
    {
      id: 6,
      name: "Efficiency Metrics Report",
      description: "Key performance indicators and efficiency metrics",
      icon: "TrendingUp",
      color: "#06b6d4",
      lastGenerated: "2024-01-10"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Reports</h1>
        <p className="text-slate-600">
          Generate and view comprehensive reports on your business operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -2,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Card className="cursor-pointer hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${report.color}20` }}
                    >
                      <ApperIcon 
                        name={report.icon} 
                        className="w-5 h-5" 
                        style={{ color: report.color }}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{report.name}</CardTitle>
                      <p className="text-sm text-slate-500 mt-1">
                        Last generated: {report.lastGenerated}
                      </p>
                    </div>
                  </div>
                  <ApperIcon name="Download" className="w-5 h-5 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{report.description}</p>
                <div className="flex items-center justify-between">
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                    Generate Report
                    <ApperIcon name="Play" className="w-4 h-4 ml-1" />
                  </button>
                  <button className="text-slate-500 hover:text-slate-700 text-sm flex items-center">
                    <ApperIcon name="Eye" className="w-4 h-4 mr-1" />
                    View
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

export default Reports;