import { Star, Sparkles, Linkedin, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  organization?: string;
  quote?: string;
  linkedin?: string;
}

const TeamCard = ({ name, role, bio, image, organization, quote, linkedin }: TeamCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-lg overflow-hidden relative group cursor-pointer"
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }}
      viewport={{ once: true }}
    >
      {/* Floating decorative elements */}
      <div className="absolute top-3 right-3 z-20">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Star className="h-5 w-5 text-yellow-400" />
        </motion.div>
      </div>

      <div className="absolute top-5 left-3 z-20">
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="opacity-40 group-hover:opacity-70 transition-opacity duration-300"
        >
          <Sparkles className="h-4 w-4 text-pink-400" />
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-3 z-20">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="opacity-30 group-hover:opacity-60 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4 text-red-400" />
        </motion.div>
      </div>

      {/* Image section with enhanced effects */}
      <div className="aspect-square overflow-hidden relative">
  {/* Background overlay */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
    animate={{
      background: [
        "linear-gradient(135deg, rgba(251,146,60,0.2), rgba(244,114,182,0.2), rgba(168,85,247,0.2))",
        "linear-gradient(135deg, rgba(244,114,182,0.2), rgba(168,85,247,0.2), rgba(251,146,60,0.2))",
        "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(251,146,60,0.2), rgba(244,114,182,0.2))"
      ]
    }}
    transition={{ duration: 3, repeat: Infinity }}
  />

  {/* Image with z-30 to stay above overlays */}
  <motion.img
    src={
      image.startsWith('http')
        ? image
        : `https://images.unsplash.com/${image}?q=80&w=400&h=400&fit=crop&crop=face`
    }
    alt={name}
    className="w-full h-full object-cover z-30 relative transition-transform duration-700 group-hover:scale-110"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.7 }}
  />

  {/* Sparkle overlay (z-20) */}
  <motion.div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
  >
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-yellow-300 rounded-full"
        style={{
          left: `${20 + i * 15}%`,
          top: `${15 + i * 12}%`,
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.3
        }}
      />
    ))}
  </motion.div>
</div>

      {/* Content section */}
      <div className="p-6 relative">
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #f97316 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, #ec4899 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {name}
          </motion.h3>
          
          <motion.p 
            className="text-orange-600 font-semibold mb-3 text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {role}
          </motion.p>

          {organization && (
            <motion.p 
              className="text-teal-600 text-sm font-medium mb-3 flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2"
              >
                🏢
              </motion.span>
              {organization}
            </motion.p>
          )}

          <motion.p 
            className="text-gray-600 text-sm leading-relaxed mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {bio}
          </motion.p>

          {quote && (
            <motion.blockquote 
              className="mt-4 italic text-gray-500 border-l-4 border-orange-400 pl-4 bg-gradient-to-r from-orange-50 to-pink-50 p-3 rounded-r-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute top-1 left-1"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💬
              </motion.div>
              <span className="relative z-10">"{quote}"</span>
            </motion.blockquote>
          )}

          {/* LinkedIn link with enhanced styling */}
          {linkedin && (
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-all duration-300 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full group/link"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="group-hover/link:animate-spin"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.div>
                <span>View LinkedIn</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap className="h-3 w-3 opacity-60" />
                </motion.div>
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>

      {/* Magical border effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #f97316, #ec4899, #8b5cf6) border-box',
        }}
        animate={{
          background: [
            'linear-gradient(white, white) padding-box, linear-gradient(45deg, #f97316, #ec4899, #8b5cf6) border-box',
            'linear-gradient(white, white) padding-box, linear-gradient(45deg, #ec4899, #8b5cf6, #f97316) border-box',
            'linear-gradient(white, white) padding-box, linear-gradient(45deg, #8b5cf6, #f97316, #ec4899) border-box'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default TeamCard;
