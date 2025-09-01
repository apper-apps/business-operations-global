import { motion } from "framer-motion";
import DashboardMetrics from "@/components/organisms/DashboardMetrics";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 space-y-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">
          Overview of your business operations and key metrics.
        </p>
      </div>

      <DashboardMetrics />
    </motion.div>
  );
};

export default Dashboard;