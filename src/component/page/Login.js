import React, {Component} from 'react';
import { Input, Button } from 'antd';
import './Login.css'
import Logo from './images/telkom.png';
import Exit from './images/exit.png';

class Login extends Component{

    render() {
        return(

            <div>

            <img alt="exit" src={Exit} style={{marginLeft:1300, marginTop:10}} />

                <div className="Input" style={{width:200, marginLeft:525}}>

                    <img alt="logo" src={Logo} style={{width:200}}/>
                    <Input placeholder="id teknisi" /> <br></br> <p></p>
                    <Input placeholder="password" /> 
                    <br></br> <p></p> <p></p>                 
                    <Button type="primary" style={{marginLeft:68}}> Login </Button>
                
                </div>
                
            </div>
        );
    }
}
export default Login;