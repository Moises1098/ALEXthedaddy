import React from "react";
import Videobg from "./assets/Sounds-from-inside.mp4"
import dot from "./assets/dot.png"
import './Body.css'

const Main = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={Videobg} autobuffer autoPlay loop muted />
            <div >
                <img className="content" src={dot} alt="dot icon" />

            </div>

        </div>
    )
}

export default Main;