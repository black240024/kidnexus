import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Star, Sparkles, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CardWithModalProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ageGroup?: string;
  impact?: string;
  color: string;
  modalContent: {
    fullDescription: string;
    activities: string[];
    outcomes: string[];
    image?: string;
    actionButtons?: {
      label: string;
      href: string;
      variant?: 'default' | 'outline';
    }[];
  };
  className?: string;
}

const CardWithModal = ({
  title,
  description,
  icon,
  ageGroup,
  impact,
  color,
  modalContent,
  className = ""
}: CardWithModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card Component */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        whileHover={{ 
          scale: 1.03, 
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        viewport={{ once: true }}
        className={`cursor-pointer ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <Card className="bg-white rounded-3xl shadow-xl overflow-hidden relative group h-full">
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
          <CardHeader className={`${color} text-white relative overflow-hidden p-8`}>
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

              <CardTitle className="text-3xl font-bold mb-3">{title}</CardTitle>
              
              {ageGroup && (
                <motion.div
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Badge className="bg-white bg-opacity-20 text-white border-white border-opacity-30 backdrop-blur-sm">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block mr-1"
                    >
                      👶
                    </motion.span>
                    {ageGroup}
                  </Badge>
                </motion.div>
              )}
            </div>
          </CardHeader>

          {/* Content section */}
          <CardContent className="p-8 relative">
            <CardDescription className="text-gray-600 mb-6 leading-relaxed text-lg">
              {description}
            </CardDescription>

            {impact && (
              <motion.div 
                className="bg-gradient-to-r from-orange-50 via-yellow-50 to-pink-50 rounded-2xl p-6 border-l-4 border-gradient-to-b from-orange-400 to-pink-400 relative overflow-hidden"
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
            )}

            {/* Click indicator */}
            <motion.div
              className="mt-6 flex justify-center"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <span>Click to learn more</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </CardContent>

          {/* Hover effect overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Card>
      </motion.div>

      {/* Modal Component */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gray-800 flex items-center">
              <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mr-4 text-white`}>
                {icon}
              </div>
              {title}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600 mt-4">
              {modalContent.fullDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
            {/* Activities */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Program Activities
              </h4>
              <div className="space-y-3">
                {modalContent.activities.map((activity, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <p className="text-gray-700">{activity}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                Learning Outcomes
              </h4>
              <div className="space-y-3">
                {modalContent.outcomes.map((outcome, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {modalContent.actionButtons && (
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              {modalContent.actionButtons.map((button, idx) => (
                <Button
                  key={idx}
                  asChild
                  variant={button.variant || 'default'}
                  className={`${button.variant === 'outline' ? 'border-2' : color.replace('bg-gradient-to-r', 'bg-gradient-to-r')} font-semibold px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  <a href={button.href} target="_blank" rel="noopener noreferrer">
                    {button.label}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardWithModal;