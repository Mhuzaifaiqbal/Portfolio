import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  hidden: { opacity: 0, y: "-50%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-4 max-w-4xl w-full h-[80vh] shadow-xl overflow-hidden relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-gray-700 hover:text-black text-xl"
            >
              ✖
            </button>
            <iframe
              src="/huzaifa-resume.pdf"
              title="My Resume"
              className="w-full h-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
