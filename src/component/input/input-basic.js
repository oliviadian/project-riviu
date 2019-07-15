import React from 'react';
import './input.css'

function InputBasic({
    text, type, width, height
}){
    return(
        <React.Fragment>
            <input 
                type={type}
                placeholder={text}
                className="input_basic"
                style={{
                    width: width,
                    height: height,
                }}
            />
        </React.Fragment> 
    );
}

export default InputBasic;