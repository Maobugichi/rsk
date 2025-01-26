import ResultSheet from "./ResultSheet"
import PlayPiece from "./PlayPiece"
import WinAnimation from "./WinAnimation"
import { useEffect } from "react"

const GameResult = ({src,compSrc,result,setResult,setFinal,setIsClicked,score,setScore,setAlt}) => {
   useEffect(() => {
    if (result == "you win") {
        console.log(result)
        setScore(prev => prev + 1)
    } else if (result == "computer wins" && score !== 0) {
        setScore(prev => prev - 1)
    } else if (result == "tie") {
        setScore(prev => prev)
    }
   },[result])
    return(
        <div className="lg:w-[70%] w-[90%]  relative h-auto min-h-[40vh] lg:min-h-[70vh] mx-auto flex flex-wrap items-center justify-between">
            <div className="order-1 lg:w-[30%] w-[45%] relative">
               {result ? (result.toLowerCase() == "you win" && <WinAnimation/>) : null}
                <PlayPiece
                src={src}
                delay={0.5}
                pick="you picked"
                />
            </div>
           
             <ResultSheet setFinal={setFinal} setIsClicked={setIsClicked} result={result} setAlt={setAlt} setResult={setResult}/>
             <div className="order-2 relative lg:w-[30%] w-[45%]">
             {result ? (result.toLowerCase() == "computer wins" && <WinAnimation/>): null}
             <PlayPiece
                src={compSrc}
                delay={1.5}
                pick="the house picked"
             />
             </div>
        </div>
    )
}

export default GameResult