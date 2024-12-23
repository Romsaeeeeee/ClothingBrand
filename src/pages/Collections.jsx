import Tshirt from "../components/Tshirt";
import tshirt1 from "../assets/pngcopy.png"
import tshirt2 from "../assets/Oversized_Tee_MockUpFront.png"
import tshirt3 from "../assets/Oversized_Tee_MockUpblackFront.png"
import { useState } from "react";
import ArcadeCard from "../card/ArcadeCard";
import ReverseWhiteCard from "../card/ReverseWhiteCard";
import ReverseBlackCard from "../card/ReverseBlackCard";

function Collections() {
    const [arcade, setArcade] = useState(false)
    const [white, setWhite] = useState(false)
    const [black, setBlack] = useState(false)
    return (
        <div className="w-full h-full flex flex-col bg-[#137B64] text-white p-10">
            <p className="w-full text-center text-6xl font-bold">COLLECTIONS</p>
            <div className="w-full h-full flex justify-center items-center gap-20">
                <ArcadeCard
                    arcade={arcade}
                    setArcade={setArcade}
                />
                <ReverseWhiteCard
                    white={white}
                    setWhite={setWhite}
                />
                <ReverseBlackCard
                    black={black}
                    setBlack={setBlack}
                />
                <Tshirt
                    name="ARCADE"
                    image={tshirt1}
                    price="₱549"
                    open={() => setArcade(true)}
                />
                <Tshirt
                    name="REVERSE TEE WHITE"
                    image={tshirt2}
                    price="₱549"
                    open={() => setWhite(true)}
                />
                <Tshirt
                    name="REVERSE TEE BLACK"
                    image={tshirt3}
                    price="₱549"
                    open={() => setBlack(true)}
                />

            </div>
        </div>
    );
}

export default Collections;
