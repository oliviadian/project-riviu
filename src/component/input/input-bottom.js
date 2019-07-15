import React from 'react';
import './input.css'

function InputBottom({
    text, width, color, size, id, name, type, padding
}){
    return(
        <React.Fragment>
            <input 
                id={id}
                name={name}
                type={type}
                placeholder={text}
                className="input_bottom"
                style={{
                    width: width,
                    padding: padding,
                    borderBottom: `${size} solid ${color}`,
                }}
            />
        </React.Fragment> 
    );
}

export default InputBottom;