import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";
import Section from "./Section";
import { useEffect, useState } from "react";
const HomePage = () => {
    const [score,setScore] = useState(0);
    return(
        <Section>
            <div className=" h-auto min-h-[90vh] flex flex-col gap-32 md:gap-40 lg:gap-10">
                <ScoreBoard
                score={score}
                setScore={setScore}
                />
                <GameBoard
                score={score}
                setScore={setScore}
            />
            </div>
           
        </Section>
    )
}

export default HomePage