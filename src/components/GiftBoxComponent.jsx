import { useState } from "react";
import { motion } from "framer-motion";
import giftBoxImage from "../assets/gift-box.png";

const GiftBoxComponent = ({ onNext }) => {
  const [isOpened, setIsOpened] = useState(false)
  const handleBoxClick = () => {
    setIsOpened(true)
  }
  return (<>
  <div className = "flex flex-col item-center justify-center min-h-screen text-center px-6">
    <motion.div 
      className = "relative"
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale:1}}
      transition={{ duration: 0.8, type: "spring", stiffness: 100}}
    >
      {
        !isOpened ?(
          /* CLosed Gift Box */
          <motion.div
            className="cursor-pointer"
            onClick= {handleBoxClick}
            whileHover={{
              scale: 1.1,
              rotateY: 5,
              rotateX: 3
            }}
            whileTap={{scale:0.95}}
          >
            <motion.div
              className="ralative"
              animate={{
                y:[-10, 10, -10],
                rotateZ:[-2, 2, -2]
              }}
              transition={{
                duration:2, 
                repeat: Infinity,
                ease:"easeInOut"
              }}
            >
              <img src={giftBoxImage} alt="Gift Box" className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-romantic"  />
            
              {[...Array(12)].map((__,i)=>(
                <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  top: `${10 + (i%4) *25}%`,
                  left: `${5 + (i%3) *35}%`
                }}
                animate={{
                  scale:[0,1,0],
                  rotate:[0,180,360],
                  opacity:[0,1,0]
                }}
                transition={{
                  duration: 2,
                  repeat:Infinity,
                  delay: i*0.3,
                  ease: "easeInOut"
                }}
                >
                  ✨
                </motion.div>
              ))}
            
            </motion.div>

              <motion.p
              transition={{
                duration: 2,
                repeat: Infinity,
                ease:"easeInOut"
              }}
              animate={{ opacity : [0.7, 1, 0.7]}}
              className="mt-6 text-2xl md:text-3xl text-romantic-deep font-light"
              >
                Click to open your surprise! 🎁
              </motion.p>
          </motion.div>
        ) :(
          /* Opened gift box with animation*/
          <motion.div
          className="relative"
          initial={{scale:0.8, opacity: 0}}
          animate={{scale:1, opacity: 1}}
          transition={{duration: 0.5}}
          >
            {/* Opened Box*/}
            <motion.img src={giftBoxImage} alt="opened gift box"
            className="w-60 h-60 md:w-72 object-cover rounded-3xl shadow-romantic opacity-50"
             initial={{scale:1}}
          animate={{scale:0.8, y:20}}
          transition={{duration: 0.5}}
           />
            {/* Opened Box*/}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{scale:0, opacity: 0, y:-50}}
          animate={{scale:1, opacity: 1, y:0}}
          transition={{duration: 0.5, delay:0.3, type:"spring", stiffness:100}}
            >
              <div className="text-center p-8 rounded-3xl bg-white/20 backdrop-blur-md border-collapse border-white/30">
                 <motion.h1 
                  className="text-4xl md:text-6xl font-bold text-romantic-deep mb-4 flex flex-col gap-4"
                  animate={{
                    scale:[1,1.1,1],
                    color:[
                      "hsl(var(--romantic-deep))",
                      "hsl(var(--romantic-pink))",
                      "hsl(var(--romantic-deep))",
                    ]
                  }}
                  transition={{
                    duration:2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                 <span> Happy Birthday PUCHKII ! </span>
                 <span> 🎂❤️🎉 </span>
                 </motion.h1>
              </div>
            </motion.div>
                  {/* Next Button*/}
                  <motion.button 
                  onClick={onNext}
                  className="z-50 relative mt-20 px-10 py-4 text-xl hover:cursor-pointer font-semibold text-white bg-gradient-romantic rounded-full shadow-romantic hover:shadow-glow transform transition-all duration-300"
                  initial={{y:50, opacity: 0}}
          animate={{opacity: 1, y:0}}
                    transition={{duration: 0.3, delay: 1}}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px hsl(var(--primry-glow)/0.6)"
                  }}
                  >
                    Next Surprise 💕
                  </motion.button>
          </motion.div>
        )
      }
    </motion.div>

  </div>
  </>
  )
};

export default GiftBoxComponent;
