// // React and Redux Const
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Provider, connect } from 'react-redux';
// import { applyMiddleware, createStore, combineReducers, bindActionCreators } from 'redux';

// // Redux Action Types

// const GET_LOCATION = 'GET_LOCATION';

// const getLocation = () => {
//   const geolocation = navigator.geolocation;
  
//   const location = new Promise((resolve, reject) => {
//     if (!geolocation) {
//       reject(new Error('Not Supported'));
//     }
    
//     geolocation.getCurrentPosition((position) => {
//       resolve(position);
//     }, () => {
//       reject (new Error('Permission denied'));
//     });
//   });
  
//   return {
//     type: GET_LOCATION,
//     payload: location
//   }
// };

// const Header = (props) => {
//   return (
//     <header><h1>{props.title}</h1></header>
//   );
// };

// class Location extends Component {
//   componentWillMount() {
//     this.props.getLocation();
//   }

//   render () {
//     const {coords: {latitude, longitude}} = this.props.location;
    
//     return (
//       <div>
//         <div>Latitude: <span>{latitude}</span></div>
//         <div>Longitude: <span>{longitude}</span></div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {location: state.location};
// };

// Location = connect(mapStateToProps, {getLocation})(Location);

// const App = () => {
//   return (
//     <div>
//       <Header title="Your Location" />
//       <Location />
//     </div>
//   );
// };

// const INIT_STATE = {
//   coords: {
//     latitude: 0,
//     longitude: 0
//   }
// }

// const LocationReducer = (state = INIT_STATE, action) => {
//   switch(action.type) {
//   case GET_LOCATION:
//     return action.payload;
//   default:
//     return state
//   }
// }

// const rootReducer = combineReducers ({
//   location: LocationReducer
// });

// /* simplified React Promise Middleware */
// function promiseMiddleware({dispatch}) {
//   function isPromise(val) {
//     return val && typeof val.then === 'function';
//   }

//   return next => action => {
//     return isPromise(action.payload)
//       ? action.payload.then(
//           result => dispatch({...action, payload: result}),
//           error => dispatch({...action, payload: error, error: true })
//         )
//       : next(action);
//   };
// }

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

// render(
//   <Provider store={createStoreWithMiddleware(rootReducer)}>
//     <App />
//   </Provider>
//   , document.querySelector('#app')
// );

import React, { Component } from 'react'

class Lokasiy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: '',
      longitude: '',
    }
    this.getMyLocation = this.getMyLocation.bind(this)
  }

  componentDidMount() {
    this.getMyLocation()
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
  }

  // position = async () => {
  //   await navigator.geolocation.getCurrentPosition(
  //     position => this.setState({ 
  //       latitude: position.coords.latitude, 
  //       longitude: position.coords.longitude
  //     }, newState => console.log(this.state.latitude)), 
  //     err => console.log(err)
  //   );
  //   console.log(this.state.latitude)
  // }

  render() {
    const { latitude, longitude } = this.state

    return (
      <div>
    
        <input type="text" value={latitude} />
        <input type="text" value={longitude} />
      </div>
    )
  }
}

export default Lokasiy;