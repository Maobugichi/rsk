import { motion } from "motion/react"


const PlayPiece = ({src,delay,pick}) => {
    return(
        <div className="w-full relative h-auto  min-h-[20vh] lg:min-h-[40vh]">
            <p className="uppercase lg:text-lg text-sm relative z-50 text-center lg:tracking-wider mb-3 text-white font-semibold mr-3">{pick}</p>
             <div className="w-[95%] left-2  absolute lg:h-[258px]  rounded-full bg-[#182345]" >
             
             </div>
             <motion.img 
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
              transition={{type:"spring",duration:0.2,bounce: 0.25,delay:delay}}
              className="w-full relative h-[70%] z-30" src={src} alt="" />
        </div>
       
    )
}

export default PlayPiece