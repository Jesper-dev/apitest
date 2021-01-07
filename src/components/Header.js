import React from 'react';
import {Link} from "react-scroll";

const Header = ({title}) => {
    return (
        <div className="header">
            <Link to="love" spy={true} smooth={true}>
                <button>LOVE</button>
            </Link>
            <h1>{title}</h1>
        </div>
    )
}

export default Header;
