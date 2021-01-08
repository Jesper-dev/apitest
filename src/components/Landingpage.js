import React from 'react'
import { Link } from 'react-scroll';

import '../style/Landingpage.css'

const Landingpage = () => {
    return (
        <>
            <div className="links-con">
                <div className="love-tab-con">
                    <h1>The Matchmaker</h1>
                    {/* <p>Find the love of your life! The dedicated team at gutenberg has developed a matchmaking love-app... Push the button and find YOUR perfect lovematch</p> */}
                    <Link to="love" spy={true} smooth={true}>
                        <div className="love-btn-con">
                            <i class="far fa-grin-hearts"></i>
                        </div>
                    </Link>
                </div>
                <div className="dice-tab-con">
                    <h1>Roll The Dice</h1>
                    {/* <p>Find the love of your life! The dedicated team at gutenberg has developed a matchmaking love-app... Push the button and find YOUR perfect lovematch</p> */}
                    <Link to="generate-fun-fact" spy={true} smooth={true}>
                        <div className="love-btn-con">
                            <i class="fas fa-dice"></i>
                        </div>
                    </Link>
                </div>
                <div className="dice-tab-con">
                    <h1>Random Flumming API</h1>
                    {/* <p>Find the love of your life! The dedicated team at gutenberg has developed a matchmaking love-app... Push the button and find YOUR perfect lovematch</p> */}
                    <Link to="random-num-form" spy={true} smooth={true}>
                        <div className="love-btn-con">
                            <i class="fas fa-radiation-alt"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Landingpage;
