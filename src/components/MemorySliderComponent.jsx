import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import memory1 from "../assets/memory1.jpg";
import memory2 from "../assets/memory2.png";
import memory3 from "../assets/memory3.jpg";

const MemorySliderComponent = ({ onNext }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const memories = [
    {
      image: memory1,
      quote: "Every journey with you becomes a beautiful memory. Like this waterfall, our love keeps flowing—calm, endless, and full of life. 💙🌊"
    },
    {
      image: memory2,
      quote: "Some memories fade with time, but the ones we create together stay etched in my heart forever. 🖍️❤️"
    },
    {
      image: memory3,
      quote: "Your smile is the reason my heart chooses happiness every single day. Thank you for being my greatest blessing. 🌹❤️"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % memories.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [memories.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % memories.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + memories.length) % memories.length)
  }
  return <>
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-romantic-deep mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our Lovely memories 💞
        </motion.h1>
        {/* Slidebar */}
        <motion.div
          className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-romantic border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Image container */}
          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-soft">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={memories[currentSlide].image}
                alt={`Memory ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ ease: "easeInOut", duration: 0.6 }}
              >
              </motion.img>
            </AnimatePresence>
            {/*  Navigation Arrow*/}
            <button
              onClick={prevSlide} className="absolute left-4 top-1/2 transform-translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={nextSlide} className="absolute right-4 top-1/2 transform-translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              →
            </button>
            {/* Decorative hearts */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl text-white/60"
                style={{
                  top: `${10 + (i % 3) * 30}%`,
                  left: `${10 + (i % 2) * 80}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 10, -10, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              >
                💕
              </motion.div>
            ))}
          </div>
          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.p
              className="mt-8 text-2xl md:text-3xl text-romantic-deep font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {memories[currentSlide].quote}
            </motion.p>
          </AnimatePresence>
          <div className="flex justify-center mt-6 space-x-3">
            {
              memories.map((_, index)=>(
                <button key = {index} onClick={()=> setCurrentSlide(index)} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-romantic-pink shadow-glow": "bg-gray-600/30  hover:bg-gray-400/50"}`}/>
              ))
            }
          </div>
          <motion.button
          onClick={onNext}
          className="mt-10 px-10 py-4 text-xl font-semibold text-white bg-gradient-romantic rounded-full shadow-romantic hover:shadow-glow transform transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale:1 }}
              transition={{ duration: 0.3, delay: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0  30px hsl(var(--primary-glow)/0.6)"
              }}
              whileTap={{scale: 0.95}}
          >
            One More Surprise ✨
          </motion.button>
        </motion.div>
      </motion.div>
    </div>

  </>;
};

export default MemorySliderComponent;
