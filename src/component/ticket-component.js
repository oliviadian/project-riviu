import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import IconButton from './button/icon-button';
import SubmitButton from './button/submit-button';
import InputBottom from './input/input-bottom';

function TicketComponent({
    name, logo, description, 
}){
    const gambar = require(`../assets/images/${logo}.png`);
    return(
        <React.Fragment>
            <div className="main-container">
                <div className="container-component">
                    <Row className="pd-20">
                        <Col span={16} className="hello-user">
                            Hello {name} !
                        </Col>
                        <Col span={8} className="component-right">                            
                            <Link to="/login">
                                <IconButton
                                    icon="export"
                                    fontSize="25px"
                                    color="#212121"
                                />
                            </Link>
                        </Col>
                        <Col span={24}>
                            <Row type="flex" justify="space-around" align="middle" className="component-center">
                                <Col span={24} className="pd-25">
                                    <img 
                                        src={gambar} 
                                        alt="logo telkom"
                                        style={{
                                            width:"400px",
                                        }}
                                    />
                                </Col>
                                <Col span={24} className="ticket-description">
                                    {description}
                                </Col>
                                <Col span={24} className="pd-20 ">
                                    <InputBottom
                                        id="code"
                                        name="code"
                                        text="Ticket Code"
                                        width="400px"
                                    />
                                </Col>
                                <Col span={24} className="pd-20">
                                    <Link to="/survey">
                                        <SubmitButton
                                            text="Submit"
                                            width="180px"
                                            height="38px"
                                            color="#479094"
                                            backgroundColor="#e3e3e3"
                                        />
                                    </Link>
                                </Col>
                            </Row>
                        </Col>                
                    </Row>
                </div>
            </div>
        </React.Fragment> 
    );
}

export default TicketComponent;