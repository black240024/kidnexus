import { useState, useEffect } from 'react';
import { MapPin, Compass, Star, Heart, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingMap = () => {
  const [progress, setProgress] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [showFinalAnimation, setShowFinalAnimation] = useState(false);

  const locations = [
    { name: "Starting Our Adventure", icon: "🚀", color: "from-blue-400 to-blue-600", emoji: "🌟" },
    { name: "Gathering Creative Ideas", icon: "💡", color: "from-yellow-400 to-orange-500", emoji: "🎨" },
    { name: "Building Magic Together", icon: "🏗️", color: "from-orange-400 to-pink-500", emoji: "✨" },
    { name: "Almost Ready to Play", icon: "🎪", color: "from-purple-400 to-pink-500", emoji: "🎭" },
    { name: "Welcome to KIDNEXUS!", icon: "🎯", color: "from-green-400 to-teal-500", emoji: "🎉" }
  ];

  const floatingElements = [
    { icon: "🎨", delay: 0, x: 10, y: 15 },
    { icon: "📚", delay: 0.5, x: 85, y: 20 },
    { icon: "🌟", delay: 1, x: 15, y: 75 },
    { icon: "🎪", delay: 1.5, x: 80, y: 70 },
    { icon: "💫", delay: 2, x: 50, y: 10 },
    { icon: "🎭", delay: 2.5, x: 20, y: 45 },
    { icon: "🚀", delay: 3, x: 75, y: 45 },
    { icon: "🌈", delay: 3.5, x: 45, y: 80 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setShowFinalAnimation(true);
          return 100;
        }
        const newProgress = prev + 1.5;
        setCurrentLocation(Math.floor((newProgress / 100) * (locations.length - 1)));
        return newProgress;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0],
            rotate: [0, 360],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg w-full mx-4 relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 opacity-50"
          animate={{
            background: [
              "linear-gradient(45deg, #fed7aa, #fecaca, #e9d5ff)",
              "linear-gradient(45deg, #fecaca, #e9d5ff, #fed7aa)",
              "linear-gradient(45deg, #e9d5ff, #fed7aa, #fecaca)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Decorative elements */}
        <div className="absolute top-4 left-4">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star className="h-6 w-6 text-yellow-500" />
          </motion.div>
        </div>
        <div className="absolute top-4 right-4">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="h-5 w-5 text-pink-500" />
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-4">
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkles className="h-4 w-4 text-purple-500" />
          </motion.div>
        </div>
        <div className="absolute bottom-4 right-4">
          <motion.div
            animate={{ x: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="h-5 w-5 text-blue-500" />
          </motion.div>
        </div>

        <div className="text-center relative z-10">
          {/* Main loading animation */}
          <motion.div
            className="w-32 h-32 mx-auto mb-6 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className={`w-full h-full bg-gradient-to-r ${locations[currentLocation]?.color || 'from-blue-400 to-purple-500'} rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden`}>
              {/* Spinning border */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-dashed border-white opacity-50"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center content */}
              <motion.div
                className="relative z-10 text-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="text-5xl mb-2">
                  {locations[currentLocation]?.icon || '🚀'}
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl"
                >
                  {locations[currentLocation]?.emoji || '✨'}
                </motion.div>
              </motion.div>

              {/* Pulsing effect */}
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🗺️ Adventure Map Loading!
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {locations[currentLocation]?.name || 'Preparing magical experiences...'}
          </motion.p>

          {/* Enhanced Progress Trail */}
          <div className="relative mb-8">
            <div className="flex justify-between items-center relative">
              {/* Progress line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
              <motion.div 
                className="absolute top-1/2 left-0 h-2 rounded-full transform -translate-y-1/2 overflow-hidden"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"
                  animate={{
                    background: [
                      "linear-gradient(90deg, #fb923c, #f472b6, #a855f7)",
                      "linear-gradient(90deg, #f472b6, #a855f7, #fb923c)",
                      "linear-gradient(90deg, #a855f7, #fb923c, #f472b6)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Location markers */}
              {locations.map((location, index) => (
                <motion.div 
                  key={index} 
                  className="relative z-10"
                  animate={index <= currentLocation ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.5, repeat: index <= currentLocation ? Infinity : 0 }}
                >
                  <div className={`w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-lg transition-all duration-500 ${
                    index <= currentLocation 
                      ? `bg-gradient-to-r ${location.color} scale-110` 
                      : 'bg-gray-200'
                  }`}>
                    {index <= currentLocation ? (
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {location.icon}
                      </motion.span>
                    ) : (
                      <MapPin className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress percentage with animation */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-medium">Adventure Progress</span>
              <motion.span 
                className="font-bold text-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                key={Math.round(progress)}
              >
                {Math.round(progress)}%
              </motion.span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div 
                className="h-3 rounded-full relative overflow-hidden"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"
                  animate={{
                    background: [
                      "linear-gradient(90deg, #fb923c, #f472b6, #a855f7)",
                      "linear-gradient(90deg, #f472b6, #a855f7, #fb923c)",
                      "linear-gradient(90deg, #a855f7, #fb923c, #f472b6)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-white opacity-30"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          {/* Fun loading messages */}
          <motion.div 
            className="text-center text-sm text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center justify-center space-x-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
              <span>Preparing magical learning experiences for you!</span>
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Final celebration animation */}
        <AnimatePresence>
          {showFinalAnimation && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <motion.div
                  className="text-8xl mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 1, repeat: 3 }}
                >
                  🎉
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold text-gray-800"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                >
                  Welcome to KIDNEXUS! ✨
                </motion.h3>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoadingMap;