import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownComponent from "../components/CountdownComponent";
import LoveQuoteComponent from "../components/LoveQuoteComponent";
import GiftBoxComponent from "../components/GiftBoxComponent";
import MemorySliderComponent from "../components/MemorySliderComponent";
import ExtraSurpriseComponent from "../components/ExtraSurpriseComponent";
import AnimatedBackground from "../components/AnimatedBackground";
import loveBgm from "../assets/love-bgm.mp3";
import countdown from "../assets/countdown.mp3";

const Index = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  const nextComponent = () => {
    setCurrentComponent((prev) => prev + 1);
  };

  // Handle audio switching
  useEffect(() => {
    if (currentComponent === 1 && audio2Ref.current) {
      audio2Ref.current?.pause();
      audio2Ref.current.currentTime = 0;

      audio1Ref.current.play().catch((error) => {
        console.log("Autoplay block (countdown):", error);
      })
    } else if (currentComponent > 1 && audio2Ref.current) {
      audio1Ref.current?.pause();
      audio1Ref.current.currentTime = 0;

      audio2Ref.current.play().catch((error) => {
        console.log("Autoplay block (background):", error);
      })
    } [currentComponent];
  })

  //Render current component based on step
  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case 1:
        return <CountdownComponent onComplete={nextComponent} />;
      case 2:
        return <LoveQuoteComponent onNext={nextComponent} />;
      case 3:
        return <GiftBoxComponent onNext={nextComponent} />;
      case 4:
        return <MemorySliderComponent onNext={nextComponent} />;
      case 5:
        return <ExtraSurpriseComponent onNext={nextComponent} />;
      default:
        return null; // Start Screen
    }
  };
  return (
    <>
      <div className="mid-h-screen relative overflow-hidden bg-gradient-background">

        {/* Audio Tags */}
        <audio ref={audio1Ref} src={countdown} type="audio/mpeg" loop />
        <audio ref={audio2Ref} src={loveBgm} type="audio/mpeg" loop />

        {/* Animated background */}
        <AnimatedBackground />

        {/* start screen */}
        {
          currentComponent === 0 ? (
            <div className="relative z-10 min-h-screen flex items-center justify-center">
              <motion.button
                onClick={() => setCurrentComponent(1) }
              className="px-12 py-4 text-xl font-semibold text-white bg-gradient-romantic rounded-full shadow-romantic hover:shodow-glow tranform transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px hsl(var(--primary-glow)/0.6)" }}
              >
                Here is your Surprise Twinkle !! 🎁
              </motion.button>
            </div>
          ) : (
            //main content
            <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentComponent}
                  initial={{ opacity: 1, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ duration: 0.8, ease: [0.4, 0.2, 1], type: "spring", stiffness: 100 }}
                  className="w-full max-w-4xl"
                >
                  {renderCurrentComponent()}
                </motion.div>
              </AnimatePresence>
            </div>
          )
        }
      </div>
    </>

  );
};
export default Index;