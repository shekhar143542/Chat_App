import { motion } from "framer-motion";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center w-1/2 h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 overflow-hidden fixed right-0 top-0">
      {/* Floating Orb Effects */}
      <motion.div
        className="absolute -top-16 -left-16 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-28 h-28 bg-secondary/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Glassmorphism Card */}
      <motion.div
        className="max-w-md text-center bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Moving Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square rounded-xl bg-primary/20 shadow-md"
              animate={{ y: [0, -8, 8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        {/* Glowing Title */}
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text drop-shadow-lg">
          {title}
        </h2>

        {/* Subtitle */}
        <motion.p
          className="text-base-content/70 text-lg tracking-wide leading-relaxed drop-shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AuthImagePattern;