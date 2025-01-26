import { motion } from "motion/react"

const GamePiece = ({src,animate,onClick,alt}) => {
    return(
       <motion.button 
        initial={{scale:0}}
        animate={animate}
        whileInView={{opacity:1,scale:1, transition:{type:"spring",duration:0.2,bounce: 0.25}}}
        onClick={onClick}
        className="piece relative  z-40  lg:w-[185px] md:w-[185px] xs:w-[110px] w-[120px]  h-40">
         <img src={src} alt={alt} />
       </motion.button>
        
    )
}

export default GamePiece