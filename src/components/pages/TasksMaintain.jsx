import { motion } from "framer-motion";
import TaskList from "@/components/organisms/TaskList";

const TasksMaintain = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Maintain Tasks</h1>
        <p className="text-slate-600">
          Ongoing maintenance activities to keep operations running smoothly.
        </p>
      </div>

      <TaskList category="Maintain" />
    </motion.div>
  );
};

export default TasksMaintain;