import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📈 Projected Impact by 2027
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <strong>Scaling Child-Centered Innovation Across Kenya</strong>
        </motion.p>

        <div className="space-y-6 text-left text-gray-800 text-lg leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            🎒 Reach <strong>20,000 children</strong> through our KUWA learning and innovation program in informal settlements and rural areas
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            🏫 Transform <strong>100 ECDE centers</strong> into safe, green, and tech-enabled learning spaces through EcoToto and Health & Safety interventions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            💧 Provide clean water access to over <strong>8,000 households</strong>, reducing waterborne disease in children under 12
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            🚲 Equip <strong>2,000 Paraboda riders</strong> and <strong>500 CHVs</strong> with digital tools for real-time health and transport support in high-need communities
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            🌿 Offset <strong>1,000+ tons</strong> of carbon emissions through biogas adoption in ECDE kitchens
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            📊 Track child health, learning, and behavior data across all sites using a real-time digital dashboard for transparency and impact measurement
          </motion.p>
        </div>

        <motion.div
          className="mt-12 text-xl text-purple-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          Our model is bold, community-rooted, and designed for scale—<br />
          with systems ready to expand regionally through multi-sector partnerships. <Sparkles className="inline w-5 h-5 text-pink-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;
