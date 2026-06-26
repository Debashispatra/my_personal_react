import { motion } from "framer-motion";
import { useMemo } from "react";
import "../extraAnimations.css"; // 👈 yahan CSS keyframes hongi

const ExtraSurpriseComponent = () => {
  const rainHearts = useMemo(
    () => Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 3,
      size: 20 + Math.random() * 15
    })), []
  );

  const baloons = useMemo(
    () => Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 10 + (i % 4) * 25,
      delay: i * 0.5,
    })), []
  );
  return <>
    <div className="flex flex-col item-center justify-center min-h-screen text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {
          rainHearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute text-2xl text-romantic-pink animate-heartFail"
              style={{
                left: `${heart.left}%`,
                fontSize: `${heart.size}px`,
                animationDelay: `${heart.delay}s`,
                animatinDuration: `${heart.duration}s`,
              }}
            >
              ❤️
            </div>
          ))
        }
        {
          baloons.map((baloon) => (
            <div
              key={baloon.id}
              className="absolute text-5xl animate-baloonFloat"
              style={{
                left: `${baloon.left}%`,
                bottom: "0%",
                animationDelay: `${baloon.delay}s`,
              }}
            >
              🎈
            </div>
          ))
        }
      </div>
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="relative p-12 md:p-16 rounded-3xl bg-gradient-romantic shadow-glow backdrop-blur-sm border border-white/30"
          animate={{
            boxShadow: [
              "0 0 30px hsl(var(--primary-glow)/0.4)",
              "0 0 60px hsl(var(--primary-glow)/0.8)",
              "0 0 30px hsl(var(--primary-glow)/0.4)"

            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {
            [...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{
                  top: `${-5 + (i % 4) * 35}%`,
                  left: `${-5 + (i % 3) * 55}%`
                }}
                animate={{
                  y: [-15, -35, -15],
                  x: [-8, 8, -8],
                  rotate: [0, 15, -15, 0],
                  scale: [0.8, 1.3, 0.8]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                {
                  i % 4 === 0 ? "💖" : i % 4 === 1 ? "💕" : i % 4 === 2 ? "💝" : "💗"
                }
              </motion.div>
            ))
          }
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              You're my
            </motion.span>
            <br />
            <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              everything
            </motion.span>
            <br />
            <motion.span className="text-6xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              💕
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white/90 font-light mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Thank you for being the most amazing person in my life
          </motion.p>
          <motion.div className="flex justify-center space-x-4 text-4xl">
            {
              ["✨", "🌟", "💫", "⭐"].map((sparkle, index) => (
                <motion.span
                  key={index}
                  animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {sparkle}
                </motion.span>
              ))
            }
          </motion.div>
        </motion.div>

        {/* Final message*/}
        <motion.div className="mt-12 p-8 rounded-2xl bg-white/10 backdrop-blur-sm-border border-white/20"
        initial={{opacity: 0, y: 50}}
        animate={{opacity:1, y:0}}
        transition={{delay:2, duration:0.8}}
        >
            <motion.p
            className="text-xl md:text-2xl text-romantic-deep font-light"
            animate={{
              color:[
                "hsl(var(--romantic-deep))",
                "hsl(var(--romantic-pink))",
                "hsl(var(--romantic-purple))",
                "hsl(var(--romantic-deep))",

              ]
            }}
            transition={{
              duration:4, repeat: Infinity, ease: "easeInOut"
            }}
            >
              Happy Birtday, my love! Here's to many more beautiful moments together! 🎂🎉❤️
            </motion.p>
        </motion.div>
      </motion.div>
    </div>
  </>;
};

export default ExtraSurpriseComponent;
