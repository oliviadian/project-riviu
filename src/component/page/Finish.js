import React, {Component} from 'react';
import { Button } from 'antd';
import './Login.css'
import Thumbs from './images/thumbs.jpg';
import Exit from './images/exit.png';

class Finish extends Component{

    render() {
        return(

            <div>

            <img alt="exit" src={Exit} style={{marginLeft:1300, marginTop:10}} />

                <div className="Input" style={{width:200, marginLeft:525, marginTop:100}}>

                    <h2 style={{marginLeft:22, marginRight:-9}}> Survey Submitted, Thank You! </h2>
                    <img alt="thumbs" src={Thumbs} style={{width:200}}/>
                    <br></br> <p></p> <p></p>                 
                    <Button type="primary" style={{marginLeft:46}}> back to first page </Button>
                
                </div>
                
            </div>
        );
    }
}
export default Finish;