import { motion, useAnimation } from "framer-motion";
import { useState , useEffect } from "react";
import GameBoardContent from "./GameBoardContent";
import Gameplay from "./Gameplay";
import GamePiece from "./GamePiece";
import GameResult from "./GameResult";
import { use } from "react";

const GameBoard = ({score,setScore}) => {
    const [clickedButton , setClickedButton] = useState(null);
    const [isClicked,setIsClicked] = useState(false)
    const [imgSrc,setImgSrc] = useState({
        src:"",
        compSrc:""
    })
    const [checkAlt,setAlt] = useState({
        alt:"",
        compAlt:""
    })
    const [result,setResult] = useState(null)
    const [final,setFinal] = useState(false)
    const animations = Gameplay.map(() => useAnimation())
    const handleClick = async (i,e) => {
        document.querySelectorAll(".piece").forEach(item => item.disabled = true)
        setClickedButton(i);
        await animations[i].start({
            scale:1.1,
            transition: {type:"spring",stiffness:200,damping:10,bounce: 0.25,}
        });

        for (let j = 0; j < Gameplay.length; j++) {
            if (j !== i) {
                await animations[j].start({
                    scale:1.1,
                    transition: {delay: 0 ,type:"spring",stiffness:200,damping:10,bounce: 0.25,}
                });
        
            }
        }
        setImgSrc({
            src:e.target.src
        })
        setAlt({
         alt:e.target.alt,
         compAlt:""
        })
        
        setIsClicked(true)
       
    }
    const randomNumber = Math.floor(Math.random() * Gameplay.length)
   
    useEffect(() => {
     const buttons = document.querySelectorAll(".piece")
      if (isClicked) {
        buttons[randomNumber].click()
        setImgSrc(prev => {
            return{
                src:prev.src,
                compSrc: buttons[randomNumber].childNodes[0].src
            }
         })
         setAlt(prev => {
            return{
                alt:prev.alt,
                compAlt:buttons[randomNumber].childNodes[0].alt
            }
         })
         setFinal(true) 
      }
     
    },[isClicked])

    useEffect(() => {
        if (checkAlt.alt !== "" && checkAlt.compAlt !== "") {
            if (checkAlt.alt === checkAlt.compAlt) {
                setResult("tie");
              } else if (
                (checkAlt.alt === "rock" && checkAlt.compAlt === "scissors") ||
                (checkAlt.alt === "scissors" && checkAlt.compAlt === "paper") ||
                (checkAlt.alt === "paper" && checkAlt.compAlt === "rock")
              ) {
                setResult("you win");
              } else {
                setResult("computer wins");
              }
        }
       
    },[checkAlt])
 
    
    
       return(
        <div className="grid place-items-center w-full">
            {!final ? (
            <GameBoardContent
             Gameplay={Gameplay}
             GamePiece={GamePiece}
             animations={animations}
             handleClick={handleClick}
            />) :  (
            <GameResult
             src={imgSrc.src}
             compSrc={imgSrc.compSrc}
             result={result}
             setResult={setResult}
             setFinal={setFinal}
             setIsClicked={setIsClicked}
             setAlt={setAlt}
             score={score}
             setScore={setScore}
            />
             )}
        </div>
       )
        
}

export default GameBoard