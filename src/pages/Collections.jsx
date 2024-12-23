import Tshirt from "../components/Tshirt";
import tshirt1 from "../assets/pngcopy.png"
import tshirt2 from "../assets/Oversized_Tee_MockUpFront.png"
import tshirt3 from "../assets/Oversized_Tee_MockUpblackFront.png"
import { useState } from "react";
import ArcadeCard from "../card/ArcadeCard";

function Collections() {
    const [arcade, setArcade] = useState(false)
    return (
        <div className="w-full h-full flex flex-col bg-[#137B64] text-white p-10">
            <p className="w-full text-center text-6xl font-bold">COLLECTIONS</p>
            <div className="w-full h-full flex justify-center items-center gap-20">
                <ArcadeCard
                    arcade={arcade}
                    setArcade={setArcade}
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
                />
                <Tshirt
                    name="REVERSE TEE BLACK"
                    image={tshirt3}
                    price="₱549"
                />

            </div>
        </div>
    );
}

export default Collections;
