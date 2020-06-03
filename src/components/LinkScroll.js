import React from 'react';
import {Link as ScrollLink} from 'react-scroll';

const LinkScroll = ({to, text}) => {
    return (
        <li className="navigation__item">
            <ScrollLink className="navigation__link" to={to} spy={true} smooth={true} duration={500} >
                {text}
            </ScrollLink>
        </li>
    );
};

export default LinkScroll;