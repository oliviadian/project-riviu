import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import IconButton from "./button/icon-button";
import SubmitButton from "./button/submit-button";
import InputBottom from "./input/input-bottom";
import InputRate from "./input/input-rate";
import GeoLocation from "./geo-location";

function SurveyComponent({ kode, judul }) {
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
            <Col span={24} className="big-text text-bold pd-10 mt-10" align="middle">
              {judul}
            </Col>
            <Col span={24}>
              <label for="deskrip" className="penj text-grey big-text text-bold">
                (Pemberian bintang dimulai dari 1 bintang untuk buruk, hingga 5 untuk sangat baik)
              </label>
            </Col>
             <Col span={24} className="pt-5">
              <Col span={24} className="mt-20 component-center lokasii">
                <GeoLocation/>
              </Col>
              <Col span={12}>
                <Col span={24}>
                <label for="kerapihan" className="lokasii">
                  Kerapihan
                </label>{" "}
                </Col>
                <Col span={24}>
                  <label for="deskrip" className="deskrip text-grey">
                    (Keapihan instalasi yang dikerjakan teknisi)
                  </label>{" "}
                </Col>
                <p />
              </Col>
              <Col span={12}>
                <InputRate iconSize={27} />
                <p />
              </Col>
            </Col>
            <Col span={24}>
              <Col span={12}>
              <Col span={24}>
                <label for="keramahan" className="lokasii">
                  Keramahan
                </label>{" "}
                </Col>
                <Col span={24}>
                  <label for="deskrip" className="deskrip text-grey">
                    (Keramahan teknisi dalam melayani pelanggan)
                  </label>{" "}
                </Col>
                <p />
              </Col>
              <Col span={12}>
                <InputRate iconSize={27}/>
                <p />
              </Col>
            </Col>
           
            <Col span={24}>
              <Col span={12}>
              <Col span={24}>
                <label for="Efisiensi" className="lokasii">
                  Efisiensi
                </label>{" "}
                </Col>
                <Col span={24}>
                  <label for="deskrip" className="deskrip text-grey">
                    (Efisiensi waktu teknisi dalam pengerjaan)
                  </label>{" "}
                </Col>
                <p />
              </Col>
              <Col span={12}>
                <InputRate iconSize={27} />
                <p />
              </Col>
            </Col>
            <Col span={24}>
              <Col span={12}>
              <Col span={24}>
                <label for="kepuasan" className="lokasii">
                  Kepuasan
                </label>{" "}
                </Col>
                <Col span={24}>
                  <label for="deskrip" className="deskrip text-grey">
                    (Kepuasan pelanggan terhadap hasil kerja teknisi)
                  </label>{" "}
                </Col>
                <p />
              </Col>
              <Col span={12}>
                <InputRate iconSize={27} />
                <p />
              </Col>
            </Col>
            <Col span={24} className="pd-5">
              <Col span={12}>
                <label for="email" className="lokasii">
                  Kritik & Saran
                </label>{" "}
                <p />
              </Col>
              <Col span={12}>
                <InputBottom
                  id="kritik"
                  name="kritik"
                  width="300px"
                  padding="0px 2px"
                  color="grey"
                  size="1px"
                />
                <p />
                <p />
              </Col>
            </Col>
            <Col span={24} className="lokasii">
              <Link to="/feedback">
                <SubmitButton
                  text="Submit"
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
