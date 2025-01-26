
const GameBoardContent = ({Gameplay,GamePiece,animations,handleClick,score,setScore}) => {
    return(
        <div className="flex  relative flex-wrap lg:w-1/2 w-[90%] md:w-[70%] justify-around items-center gap-20 h-auto lg:min-h-[85vh] large-square md:min-h-[40vh]  min-h-[50vh]">
        <svg  className="absolute " width="313" height="278" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z"/></svg>
            {
                Gameplay.map((game,index) => {
                    return(            
                        <GamePiece 
                        key={index}
                        index={index}
                        animate={animations[index]}
                        onClick={(e) => handleClick(index,e)}
                        src={game.src}
                        alt={game.alt}
                        score={score}
                        setScore={setScore}
                        />
                    )
                })
            }
        </div>
    )
}

export default GameBoardContent