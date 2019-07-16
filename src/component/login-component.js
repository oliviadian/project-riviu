import React from 'react';
import { Button } from 'antd';
import IconButton from './button/icon-button'
import InputBasic from './input/input-basic';

function LoginComponent({
    logo,
}){
    const gambar = require(`../assets/images/${logo}.png`);
        return(

            <div>
            <IconButton 
                        icon="export"
                        marginLeft="1300"
                        marginTop="10"
                        fontSize="25px"
                        color="#212121"
                    />

                <div className="Input" style={{width:200, marginLeft:525}}>

                <img 
                                src={gambar} 
                                alt="logo telkom"
                                style={{
                                    width:"400px",
                                }}
                            />
                    <InputBasic placeholder="id teknisi" /> <br></br> <p></p>
                    <InputBasic placeholder="password" /> 
                    <br></br> <p></p> <p></p>                 
                    <Button type="primary" style={{marginLeft:68}} href="TicketComponent"> Login </Button>
                
                </div>
                
            </div>
        );
    }


export default LoginComponent;