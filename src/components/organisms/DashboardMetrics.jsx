import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardCard from "@/components/molecules/DashboardCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { dashboardService } from "@/services/api/dashboardService";

const DashboardMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMetrics = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await dashboardService.getMetrics();
      setMetrics(data);
    } catch (err) {
      setError(err.message || "Failed to load dashboard metrics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMetrics();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadMetrics} />;

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {metrics.map((metric, index) => (
        <DashboardCard key={metric.Id} metric={metric} index={index} />
      ))}
    </motion.div>
  );
};

export default DashboardMetrics;