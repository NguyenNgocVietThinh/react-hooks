import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss'

ColorBox.propTypes = {
    
};

// khong lien quan nen cho ra ngoai
function getRanDomColor() {
    const COLOR_LIST = ['deeppink','green','yellow','black','blue']
    const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length)
    return COLOR_LIST[randomIndex]
}

function ColorBox(props) {
 
    // thiet lap cho initValue cho useState thi nen dung CallBack Function
    const[color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color_box') || 'deeppink'
        return initColor
    }) 
    const handleBoxClick = () => {
        const newColor = getRanDomColor()
        setColor(newColor)
        localStorage.setItem('box_color', newColor)
    }

    return (
        <div 
            className="color-box" 
            style={{backgroundColor:color}} 
            onClick={handleBoxClick}
        >
            xxx
        </div>
    );
}

export default ColorBox;