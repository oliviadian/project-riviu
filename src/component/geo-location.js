import React from "react";
import { Row, Col } from "antd";
import { geolocated } from "react-geolocated";
 
class GeoLocation extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <Row>
            <Col span={24} className="mt-20 component-center">
              <Col span={12}>
              <Col span={24}>
                <label for="Lokasi" className="lokasi">
                  Alamat
                </label>{" "}
                </Col>
                <Col span={24}>
                  <label for="deskrip" className="deskripp text-grey">
                    (Titik latitude dan longitude alamat pelanggan)
                  </label>{" "}
                </Col>
              </Col>
              <Col span={12} align="left">
              {this.props.coords.latitude}, {this.props.coords.longitude}
                <p />
              </Col>
            </Col>
            </Row>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(GeoLocation);