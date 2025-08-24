import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      className="text-center py-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold"></h1>
      <p className="text-gray-600 mt-2">
        Software Developer | React | Java | Spring Boot
      </p>
    </motion.div>
  );
}
