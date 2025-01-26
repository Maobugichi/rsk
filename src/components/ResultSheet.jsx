import { motion } from "motion/react";
import { useEffect } from "react";

const ResultSheet = ({setFinal,setIsClicked,result,setAlt,setResult}) => {
    function handleClick() {
        setIsClicked(false)
        setFinal(false)
        setAlt({
            alt:"",
            compAlt:""
        })
        setResult("")
    }
    return(
        <div className="lg:w-[30%] w-[70%] order-3 lg:order-2 h-auto  lg:min-h-[100px]  relative z-50 grid place-items-center gap-2 mx-auto">
            <motion.p 
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:"spring",duration:0.2,bounce: 0.25,delay:1.8}}
            className="uppercase lg:text-3xl text-xl text-white font-bold">{result}</motion.p>
            <motion.button 
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:"spring",duration:0.2,bounce: 0.25,delay:2.5}}
            className="uppercase bg-white w-[91%] h-[55px] rounded-md mx-auto" onClick={handleClick}>Play again</motion.button>
        </div>
    )
}

export default ResultSheet