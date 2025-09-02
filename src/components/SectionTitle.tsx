import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = true, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className} relative`}>
      {/* Decorative elements */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles className="h-6 w-6 text-yellow-400 opacity-60" />
        </motion.div>
      </div>

      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 relative"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-gray-800 via-orange-600 to-pink-600 bg-clip-text text-transparent relative">
          {title}
          
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '60%' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          {/* Floating sparkles */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <Star className="h-4 w-4 text-yellow-500" />
          </motion.div>
          
          <motion.div
            className="absolute -top-1 left-0"
            animate={{ 
              y: [0, -3, 0],
              x: [0, 2, 0],
              rotate: [0, -180, -360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          >
            <Sparkles className="h-3 w-3 text-pink-500" />
          </motion.div>
        </span>
      </motion.h2>

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative">
            {subtitle}
            
            {/* Decorative elements around subtitle */}
            <motion.span
              className="absolute -left-8 top-1/2 transform -translate-y-1/2"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✨
            </motion.span>
            
            <motion.span
              className="absolute -right-8 top-1/2 transform -translate-y-1/2"
              animate={{ 
                rotate: [0, -360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              🌟
            </motion.span>
          </p>
          
          {/* Animated dots */}
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionTitle;