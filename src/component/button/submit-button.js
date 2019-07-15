import React from 'react';
import { Button } from 'antd';
import './button.css'

function SutmitButton({
    text, width, height, color, backgroundColor, borderRadius
}){
    return(
        <React.Fragment>
            <Button 
                type="primary"
                className="submit-button"
                style={{
                    width: width,
                    height: height,
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: borderRadius,
                }}
            >
                {text}
            </Button>
        </React.Fragment> 
    );
}

export default SutmitButton;