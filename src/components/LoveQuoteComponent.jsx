import { motion } from "framer-motion";
import { useMemo } from "react";

const LoveQuoteComponent = ({ onNext }) => {
  //generate stable hearts data once
  const hearts = useMemo(
    () => Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2,
      scale: 0.6 + Math.random() * 0.5
    })), []
  );
  return <>
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="relative p-12 md:p-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-romantic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <motion.blockquote
            className="text-3xl md:text-4xl lg:text-5xl font-light text-romantic-deep leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}

          >
            "In your eyes, I found my home."
            <br />
            "In your heart, I found my love."
            <br />
            "In your soul, I found my mate."
          </motion.blockquote>

          <motion.div className="flx justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="w-24 h-1 bg-gradient-romantic rounded-full" />
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-romantic-purple/80 italic mb-12"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.6, delay: 1.2 }}
            >
            Forever yours 💕
          </motion.p>
          <motion.button 
            onClick = {onNext}
             initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px hsla(var(--primary-glow)/0.6</motion.div>)",
            }}
            whileTap={{scale: 0.95}}
            className="px-12 py-4 text-xl font-semibold text-white bg-gradient-romantic rounded-full shadow-romantic hover:shadow-glow transition-all duration-300"
          >
            continue ❤️
          </motion.button>
        </motion.div>
            
            {hearts.map((heart) => (
          <motion.div
            key={`heart-${heart.id}`}
            className="absolute text-3xl text-romantic-pink/60"
            style={{
              top:`${heart.top}%`,
              left:`${heart.left}%`
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-5, -5, -5],
              rotate: [0, 15, -15, 0],
              scale: [heart.scale, heart.scale + 0.2, heart.scale],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut",
            }}
          >💝</motion.div>
        ))}

      </motion.div>
    </div>
  </>;
};

export default LoveQuoteComponent;
