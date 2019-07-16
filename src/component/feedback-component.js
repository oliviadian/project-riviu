import React from 'react';
import IconButton from './button/icon-button'
import SubmitButton from './button/submit-button';

function FeedbackComponent({
    gambarout, 
}){
    const gambar = require(`../assets/images/${gambarout}.jpg`);
    return(

            <div>

            <IconButton 
                        icon="export"
                        marginLeft="1300"
                        marginTop="10"
                        fontSize="25px"
                        color="#212121"
                    />

                <div className="Input" style={{width:200, marginLeft:525, marginTop:100}}>

                    <h2 style={{marginLeft:22, marginRight:-9}}> Survey Submitted, Thank You! </h2>
                    <img 
                                src={gambar} 
                                alt="logo telkom"
                                style={{
                                    width:"200px",
                                }}
                            />
                    <br></br> <p></p> <p></p>                 
                    <SubmitButton type="primary" style={{marginLeft:46}} href="./ticket-component"> back to first page </SubmitButton>
                
                </div>
                
            </div>
        );
    }


export default FeedbackComponent;
