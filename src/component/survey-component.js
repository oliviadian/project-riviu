import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import lokasii from './lokasii';
import IconButton from './button/icon-button'
import SubmitButton from './button/submit-button'
import InputBottom from './input/input-bottom';
import InputRate from './input/input-rate';

function SurveyComponent({
    kode
}) {
  return (
    <React.Fragment>
      <div className="main-container">
          <div className="container-component">
            <Row className="pd-10 background-blue">
              <Col span={24}>
              <Link to="/login">
                <IconButton
                    icon="arrow-left"
                    fontSize="25px"
                    color="#2f6366"
                    className="mt-15"
                /></Link>
                <span className="big-text ml-10">
                  Tiket #{kode}
                </span>
              </Col>
            </Row>          
            <Row className="pd-10 pl-20">  
            <p/>
            <Col span={24}>   
              <Col span={12} className="pd-5">
                <label for="name" className="surpei">
                  Nama Pelanggan
                </label><p/></Col> 
                <Col span={12}>
                <InputBottom
                    id="name"
                    name="name"
                    width="220px"
                    padding="0px 2px"
                    color="grey"
                    size="1px"
                    className="surpei"
                /><p/></Col>
              </Col>  
              <Col span={24} className="pd-5">
                <Col span={12}>
                  <label for="email" className="surpei">
                  Email
                </label> <p/>
                </Col>
                <Col span={12}>
                  <InputBottom
                    id="email"
                    name="email"
                    width="220px"
                    padding="0px 2px"
                    color="grey"
                    size="1px"
                    className="surpei"
                /><p/>
                </Col>
              </Col>  
              <Col span={24} className="pt-5">
                <Col span={12}>
                  <label for="kerapihan" className="surpei">
                  Kerapihan
                </label> <p/>
                </Col>
                <Col span={12}>
                  <InputRate
                  iconSize={30}
                /><p/>
                </Col>
              </Col>
              <Col span={24} >
                <Col span={12}>
                  <label for="Keramahan" className="surpei" >
                    Keramahan
                  </label> <p/>
                </Col>
                <Col span={12}>
                  <InputRate
                    iconSize={30}
                  /><p/>
                </Col>
              </Col>
              <Col span={24} >
                <Col span={12}>
                  <label for="Efisiensi" className="surpei" >
                    Efisiensi
                  </label> <p/>
                </Col>
                <Col span={12}>
                  <InputRate
                    iconSize={30}
                  /><p/>
                </Col>
              </Col>
              <Col span={24} >
                <Col span={12}>
                  <label for="" className="surpei">
                    Kepuasan
                  </label><p/>
                </Col>
                <Col span={12}>
                  <InputRate
                    iconSize={30}
                  /><p/>
                </Col>
              </Col>
              <Col span={24} className="pd-5">
                <Col span={12}>
                  <label for="email" className="surpei">
                    Kritik & Saran
                  </label> <p/>
                </Col>
                <Col span={12}>
                  <InputBottom
                      id="kritik"
                      name="kritik"
                      width="220px"
                      padding="0px 2px"
                      color="grey"
                      size="1px"
                  /><p/><p/>
                </Col>
              </Col> 
              <Col span={24} className="surpei">
                  <Link to="/feedback">
                    <SubmitButton
                        text="Submit"
                       width="180px"
                        height="38px"
                        color="#479094"
                        backgroundColor="#e3e3e3"
                    /><p/>
                  </Link>
              </Col>
              <Col span={24} className="surpei"> 
                <lokasii/>
              </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SurveyComponent;