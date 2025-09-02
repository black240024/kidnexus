import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Heart } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  ageGroup: string;
  impact: string;
  icon: ReactNode;
  color: string;
}

const ProgramCard = ({ title, description, ageGroup, impact, icon, color }: ProgramCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-xl overflow-hidden relative group cursor-pointer"
      whileHover={{ 
        scale: 1.03, 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }}
      viewport={{ once: true }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color.split(' ')[1]}, ${color.split(' ')[3]})`
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="h-5 w-5 text-yellow-500" />
        </motion.div>
      </div>

      <div className="absolute top-6 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Star className="h-4 w-4 text-pink-500" />
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -15, 15, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        >
          <Heart className="h-4 w-4 text-red-500" />
        </motion.div>
      </div>

      {/* Header section */}
      <div className={`${color} p-8 text-white relative overflow-hidden`}>
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10">
          <motion.div 
            className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm border-2 border-white border-opacity-30"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
            }}
            animate={{
              y: [0, -3, 0]
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              hover: { duration: 0.3 }
            }}
          >
            {icon}
          </motion.div>

          <motion.h3 
            className="text-3xl font-bold mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white border-opacity-30"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-1"
              >
                👶
              </motion.span>
              {ageGroup}
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-8 relative">
        <motion.p 
          className="text-gray-600 mb-6 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="bg-gradient-to-r from-orange-50 via-yellow-50 to-pink-50 rounded-2xl p-6 border-l-4 border-gradient-to-b from-orange-400 to-pink-400 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-pink-100/50"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <motion.h4 
              className="font-bold text-gray-800 mb-3 flex items-center text-lg"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2 text-2xl"
              >
                🌟
              </motion.span>
              Impact & Results:
            </motion.h4>
            <p className="text-gray-700 leading-relaxed">{impact}</p>
          </div>
        </motion.div>

        {/* Interactive elements */}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex space-x-2"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {['🎨', '📚', '🚀'].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-2xl"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.3 
                }}
                whileHover={{ scale: 1.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProgramCard;