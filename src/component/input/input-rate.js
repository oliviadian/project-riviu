import React from 'react'
import { Rate } from 'antd'

function  InputRate({
    iconSize
}) {
    return(
        <React.Fragment>
            <Rate
                style={{
                    fontSize: iconSize,
                }}
            />
        </React.Fragment>
    );
}

export default InputRate;