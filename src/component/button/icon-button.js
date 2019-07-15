import React from 'react';
import { Button, Icon } from 'antd';
import './button.css'

function IconButton({
    icon, fontSize, color, className
}){
    return(
        <React.Fragment>
            <Button 
                type="link"
                style={{
                    padding: "0 10px",
                    margin: 0,
                }}
                className={className}
            >
                <Icon 
                    type={icon}
                    style={{
                        fontSize: fontSize,
                        color: color,
                    }}
                />
            </Button>
        </React.Fragment> 
    );
}

export default IconButton;