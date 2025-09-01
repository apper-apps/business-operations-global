import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="inline-block w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-slate-600 font-medium">Loading data...</p>
      </div>
    </div>
  );
};

export default Loading;