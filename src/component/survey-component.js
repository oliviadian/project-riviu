import React from 'react';
import { Row, Col } from 'antd';
import IconButton from './button/icon-button'
import SubmitButton from './button/submit-button'
import InputBottom from './input/input-bottom';
import InputRate from './input/input-rate';

function SurveyComponent({
    kode
}) {
  return (
    <React.Fragment>
        <Row className="pd-10 background-blue">
          <Col span={24}>
            <IconButton
                icon="arrow-left"
                fontSize="25px"
                color="#2f6366"
                className="mt-15"
            />
            <span className="big-text ml-10">
              Tiket #{kode}
            </span>
          </Col>
        </Row>          
        <Row className="surpei">          
          <Col span={24} className="pd-5">
            <label for="name" className="desc-text" style={{display: "block"}}>
              Nama Pelanggan
            </label> 
            <InputBottom
                id="name"
                name="name"
                width="220px"
                padding="0px 2px"
                color="grey"
                size="1px"
            />
          </Col>  
          <Col span={24} className="pd-5">
            <label for="email" className="desc-text" style={{display: "block"}}>
              Email
            </label> 
            <InputBottom
                id="email"
                name="email"
                width="220px"
                padding="0px 2px"
                color="grey"
                size="1px"
            />
          </Col>  
          <Col span={24} className="pt-5">
            <label for="kerapihan" className="desc-text text-bold" style={{display: "block"}}>
              Kerapihan
            </label> 
            <InputRate
              iconSize={25}
            />
          </Col>
          <Col span={24} >
            <label for="Keramahan" className="desc-text text-bold" style={{display: "block"}}>
              Keramahan
            </label> 
            <InputRate
              iconSize={25}
            />
          </Col>
          <Col span={24} >
            <label for="Efisiensi" className="desc-text text-bold" style={{display: "block"}}>
              Efisiensi
            </label> 
            <InputRate
              iconSize={25}
            />
          </Col>
          <Col span={24} >
            <label for="" className="desc-text text-bold" style={{display: "block"}}>
              Kepuasan
            </label> 
            <InputRate
              iconSize={25}
            />
          </Col>
          <Col span={24} className="pd-5">
            <label for="email" className="desc-text" style={{display: "block"}}>
              Kritik & Saran
            </label> 
            <InputBottom
                id="kritik"
                name="kritik"
                width="220px"
                padding="0px 2px"
                color="grey"
                size="1px"
            />
          </Col> 
          <Col span={24} className="pt-20 component-center">
            <SubmitButton
                text="Submit"
                width="180px"
                height="38px"
                color="#479094"
                backgroundColor="#e3e3e3"
            />
          </Col>
      </Row>
    </React.Fragment>
  );
}

export default SurveyComponent;
