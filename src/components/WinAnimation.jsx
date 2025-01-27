import { motion } from "motion/react";
const WinAnimation = () => {
    return(
        <>
          <motion.div 
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1.2, transition:{repeat:Infinity,reverse:true,duration:2,delay:3}}}
            className="bg-[#1E3353]  h-[100%] md:h-[110%]  w-[120%] top-4 md:top-[3%]  left-[-10%]  lg:w-[130%] lg:left-[-13%]    rounded-full z-20 absolute">
          </motion.div>

            <motion.div 
             initial={{opacity:0,scale:0}}
             whileInView={{opacity:1,scale:1.3, transition:{repeat:Infinity,reverse:true,duration:2,delay:3}}}
             className="bg-[#1B2A4B]  h-[110%] w-[135%] md:h-[120%]   left-[-18%] top-[2%] md:top-[-2%] lg:left-[-18%] lg:w-[145%] z-10  rounded-full absolute">

            </motion.div>
           
        </>
    )
}

export default WinAnimation