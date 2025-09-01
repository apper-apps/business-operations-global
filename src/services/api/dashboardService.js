import dashboardData from "@/services/mockData/dashboardMetrics.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const dashboardService = {
  async getMetrics() {
    await delay(300);
    return [...dashboardData];
  },

  async getMetricById(id) {
    await delay(200);
    const metric = dashboardData.find(metric => metric.Id === parseInt(id));
    if (!metric) {
      throw new Error("Metric not found");
    }
    return { ...metric };
  }
};