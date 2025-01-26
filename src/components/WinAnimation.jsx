import { motion } from "motion/react";
const WinAnimation = () => {
    return(
        <>
          <motion.div 
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1.2, transition:{repeat:Infinity,reverse:true,duration:2,delay:3}}}
            //transition={{type:"spring",duration:2,bounce: 0.25,delay:3}}
            className="bg-[#1E3353]  lg:h-[300px] h-[200px] w-[200px] md:bg-yellow-200 md:w-[350px] md:top-[30px] md:left-[-5px] md:h-[350px]  lg:w-[300px] left-[-16px] rounded-full z-20 absolute">

          </motion.div>

            <motion.div 
             initial={{opacity:0,scale:0}}
             whileInView={{opacity:1,scale:1.3, transition:{repeat:Infinity,reverse:true,duration:2,delay:3}}}
             className="bg-[#1B2A4B] lg:h-[345px] lg:w-[345px] h-[245px] w-[245px] left-[-38px] top-[-25px]  z-10  rounded-full absolute">

            </motion.div>
            <motion.div 
             initial={{opacity:0,scale:0}}
             whileInView={{opacity:1,scale:1.3, transition:{repeat:Infinity,reverse:true,duration:2,delay:3}}}
             className="bg-[#172043] lg:h-[380px] lg:w-[380px] h-[300px] w-[300px] left-[-53px] top-[-40px]  rounded-full absolute">

            </motion.div>
        </>
    )
}

export default WinAnimation