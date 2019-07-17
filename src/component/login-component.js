import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import SubmitButton from './button/submit-button';
import InputBasic from './input/input-basic';

function LoginComponent({
    logo
}){
    const gambar = require(`../assets/images/${logo}.png`);
    return(
        <React.Fragment>
            <div className="main-container">
                <div className="container-component">
                    <Row 
                        type="flex" 
                        justify="space-around" 
                        align="middle" 
                        className="component-center pd-20"
                    >
                        <Col span={24} className="pd-25">
                            <img 
                                src={gambar} 
                                alt="logo telkom"
                                style={{
                                    width:"400px",
                                }}
                            /><p/>
                        </Col>
                        <Col span={24} className="pd-5">
                            <p/>
                            <InputBasic
                                text="No ID"
                                width="360px"
                                height="40px"
                            />
                        </Col>
                        <Col span={24} className="pd-5">
                            <InputBasic
                                text="Password"
                                width="360px"
                                height="40px"
                            /><p/>
                        </Col>
                        <Col span={24} className="pd-15">
                            <Link to="/ticket">
                                <SubmitButton
                                    text="Login"
                                    width="360px"
                                    height="38px"
                                    color="#479094"
                                    backgroundColor="#e3e3e3"
                                />
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment> 
    );
}

export default LoginComponent;