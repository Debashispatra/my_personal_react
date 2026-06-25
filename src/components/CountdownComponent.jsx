import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownComponent = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000);

    return ()=> clearTimeout(timer)
  },[timeLeft, onComplete]);

  const formatTime = (seconds) => {
    return `00:00:${seconds.toString().padStart(2, "0")}`
  }  

  return <>
  <div className="flex flex-col items-center justify-center min-h-screen text-center relative">
    {/* Spinning flower in bottom right */}
    <motion.div className="fixed bottom-8 right-8 text-6xl" animate={{rotate: 360}} transition={{duration:20, repeat: "Infinity", ease: "linear"}}>
      🌸
    </motion.div>
  </div>
  </>;
};

export default CountdownComponent;
