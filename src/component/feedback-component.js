import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import IconButton from './button/icon-button'
import SubmitButton from './button/submit-button'

function FeedbackComponent({
    logo, text
}) {
    const gambar = require(`../assets/images/${logo}.jpg`);
    return (
        <React.Fragment>
            <div className="main-container">
                <div className="container-component">
                    <Row className="pd-20">
                        <Col span={12} offset={12} className="component-right">
                        <Link to="/login">
                            <IconButton
                                icon="export"
                                fontSize="25px"
                                color="#212121"
                            /></Link>
                        </Col>
                        <Col span={24}>
                            <Row type="flex" justify="space-around" align="middle" className="component-center">
                                <Col span={24} className="big-text text-bold pd-10 mt-40">
                                    {text}
                                </Col>
                                <Col span={24} className="pd-25">
                                    <img 
                                        src={gambar} 
                                        alt="logo telkom"
                                        style={{
                                            width:"400px",
                                        }}
                                    />
                                </Col>
                                <Col span={24} className="pd-20">
                                <Link to="/ticket">
                                    <SubmitButton
                                        text="Back to first page"
                                        width="360px"
                                        height="38px"
                                        color="#479094"
                                        backgroundColor="#e3e3e3"
                                    /></Link>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                </div>
            </div>
        </React.Fragment>
  );
}

export default FeedbackComponent;