import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ActionProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export const Action = ({ icon, label, onClick }: ActionProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    if (onClick) onClick();
  };

  return (
    <div
      className="group relative flex items-center space-x-1 cursor-pointer transition duration-200 ease-in-out"
      onClick={handleClick}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isLiked ? 1.3 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`flex justify-center items-center mr-2 w-6 h-6 rounded-full transition duration-200 ${
          isLiked
            ? 'bg-pink-500 text-white'
            : 'hover:bg-gray-700 hover:text-pink-500'
        }`}
      >
        {icon}
      </motion.div>

      {label && (
        <span className="text-sm transition duration-200 group-hover:text-pink-500">
          {isLiked ? parseInt(label) + 1 : label}
        </span>
      )}

      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200">
        {isLiked ? 'Unlike' : 'Like'}
      </span>

      <AnimatePresence>
        {isLiked && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute mr-5 w-full h-full">
              🎉
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
