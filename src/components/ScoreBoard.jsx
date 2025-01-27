const ScoreBoard = ({score}) => {
    return(
        <div className="border border-[#ccc] lg:w-[60%] w-[90%] mx-auto flex justify-between items-center rounded-xl h-32 p-4">
          <ul className="uppercase  lg:text-2xl text-xl h-auto text-left  justify-center text-white  font-bold tracking-wide">
            <li className="h-7">Rock</li>
            <li className="h-7">Paper</li>
            <li className="h-7">Scissors</li>
          </ul>

          <div className="bg-white lg:w-[140px] w-[100px] flex flex-col justify-center h-[95%] text-[#565468] items-center rounded-md" style={{background: "linear-gradient(0deg, rgb(243, 243, 243) 0%, rgb(255, 255, 255) 100%);"}}>
            <p className="uppercase text-md tracking-wide">Score</p>
            <h1 className="lg:text-6xl text-5xl font-bold">{score}</h1>
          </div>
        </div>
    )
}

export default ScoreBoard