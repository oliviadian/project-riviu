import React from 'react';
import './assets/style/app.css';
import TicketComponent from './component/ticket-component'
import LoginComponent from './component/login-component'
import FeedbackComponent from './component/feedback-component';
import SurveyComponent from './component/survey-component';

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="container-component">
          {/*<TicketComponent
            name="Teknisi"
            logo="logo-telkom"
            description="Memasukkan nomor tiket pesanan di bawah ini"
          />*/}
          <LoginComponent
            logo="logo-telkom"
          /> 
          {/*<FeedbackComponent
            gambarout="thumbs"
            text="Survey submitted, Thank You!"
          />*/}
          {/* <SurveyComponent
            kode="KB149JJ"
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
