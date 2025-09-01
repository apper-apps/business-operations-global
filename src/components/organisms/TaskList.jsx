import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TaskCard from "@/components/molecules/TaskCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { taskService } from "@/services/api/taskService";

const TaskList = ({ category }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await taskService.getByCategory(category);
      setTasks(data);
    } catch (err) {
      setError(err.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (category) {
      loadTasks();
    }
  }, [category]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadTasks} />;
  if (tasks.length === 0) {
    return (
      <Empty
        icon="CheckSquare"
        title="No tasks found"
        description={`No ${category} tasks available at the moment.`}
        actionText="Add New Task"
      />
    );
  }

  return (
    <div className="space-y-4">
      <motion.div 
        className="grid gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {tasks.map((task, index) => (
          <TaskCard key={task.Id} task={task} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default TaskList;