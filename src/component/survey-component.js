import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import IconButton from "./button/icon-button";
import SubmitButton from "./button/submit-button";
import InputBasic from "./input/input-basic";

function SurveyComponent({ kode, teks }) {
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
                />
              </Link>
              <span className="big-text ml-10">Tiket #{kode}</span>
            </Col>
          </Row>
          <Row className="pd-10 pl-20">
            <Col span={24} className="big-text text-bold pd-10 mt-40" align="middle">
              {teks} <p/>
            </Col>
            <Col span={24}>
              <p />
              <Col span={12} className="pd-5">
                <label for="name" className="surpei">
                  Nama Pelanggan
                </label>
                <p />
              </Col>
              <Col span={12}>
                <InputBasic
                  id="name"
                  name="name"
                  width="220px"
                  padding="0px 2px"
                  color="grey"
                  size="1px"
                  className="surpei"
                />
                <p />
              </Col>
            </Col>
            <Col span={24} className="pd-5">
              <Col span={12}>
                <label for="email" className="surpei">
                  No HP
                </label>{" "}
                <p />
              </Col>
              <Col span={12}>
                <InputBasic
                  id="email"
                  name="email"
                  width="220px"
                  padding="0px 2px"
                  color="grey"
                  size="1px"
                  className="surpei"
                />
                <p />
              </Col>
            </Col>
            <Col span={24} className="pd-5">
              <Col span={12}>
                <label for="email" className="surpei">
                  Anggota 1
                </label>{" "}
                <p />
              </Col>
              <Col span={12}>
                <InputBasic
                  id="email"
                  name="email"
                  width="220px"
                  padding="0px 2px"
                  color="grey"
                  size="1px"
                  className="surpei"
                />
                <p />
              </Col>
            </Col>
            <Col span={24} className="pd-5">
              <Col span={12}>
                <label for="email" className="surpei">
                  Anggota 2
                </label>{" "}
                <p />
              </Col>
              <Col span={12}>
                <InputBasic
                  id="email"
                  name="email"
                  width="220px"
                  padding="0px 2px"
                  color="grey"
                  size="1px"
                  className="surpei"
                />
                <p />
              </Col>
            </Col>
            <Col span={24} className="surpei">
              <p/>
              <Link to="/pelanggan">
                <SubmitButton
                  text="Next"
                  width="180px"
                  height="38px"
                  color="#479094"
                  backgroundColor="#e3e3e3"
                />
                <p />
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SurveyComponent;
