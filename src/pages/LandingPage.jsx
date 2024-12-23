import TopBar from "../components/TopBar";
import model1 from "../assets/model.jpg"
import model2 from "../assets/model2.jpg"
import model3 from "../assets/model3.jpg"
import model4 from "../assets/model4.jpg"
import logo from "../assets/logo.jpg"
import { useState } from "react";

const LandingPage = () => {
    const [timer, setTimer] = useState(1)

    setTimeout(() => {
        setTimer(timer + 1)
        if (timer == 4) {
            setTimer(1)
        }
    }, "5000")

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex">
                <div className="w-[59%] h-full flex flex-col gap-5">
                    <div className="w-full">
                        <TopBar />
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center py-10">
                        <span className="w-full">
                            <img src={logo} alt="logo" />
                        </span>
                        <div className="w-full h-1/2 flex flex-col items-center gap-3 text-[30px] font-extrabold text-[#137B64]">
                            <p>BRINGING BACK THE CLASSICS,</p>
                            <p>BECAUSE THE PAST NEVER</p>
                            <p>GOES OUT OF STYLE</p>
                        </div>
                    </div>
                </div>
                <div className={`${timer == 1 ? "flex-1 h-full" : "hidden"} transition-all`}>
                    <span className={`flex-1 h-full  ${timer == 1 ? 'animate-fadeIn' : timer == 2 ? 'animate-fadeOut' : ""}`} >
                        <img src={model1} alt="model" className="w-full h-full" />
                    </span>
                </div>
                <div className={`${timer == 2 ? "flex-1 h-full" : "hidden"} transition-all`}>
                    <span className={`flex-1 h-full ${timer == 2 ? 'animate-fadeIn' : timer == 3 ? 'animate-fadeOut' : ""}`} >
                        <img src={model2} alt="model" className="w-full h-full" />
                    </span>
                </div>
                <div className={`${timer == 3 ? "flex-1 h-full" : "hidden"} transition-all`}>
                    <span className={`flex-1 h-full ${timer == 3 ? 'animate-fadeIn' : timer == 4 ? 'animate-fadeOut' : ""}`} >
                        <img src={model3} alt="model" className="w-full h-full" />
                    </span>
                </div>
                <div className={`${timer == 4 ? "flex-1 h-full" : "hidden"} transition-all`}>
                    <span className={`flex-1 h-full ${timer == 4 ? 'animate-fadeIn' : timer == 1 ? 'animate-fadeOut' : ""}`} >
                        <img src={model4} alt="model" className="w-full h-full" />
                    </span>
                </div>
            </div>
        </div >
    );
};

export default LandingPage;
