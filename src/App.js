import React from 'react';
import './assets/style/app.css';
import TicketComponent from './component/ticket-component';
import SurveyComponent from './component/survey-component';

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="container-component">
          <TicketComponent
            name="Teknisi"
            logo="logo-telkom"
            description="Memasukkan nomor tiket pesanan di bawah ini"
          />
          {/*<SurveyComponent
            kode="KB149JJ"
          />*/}
          </div>
      </div>
    </React.Fragment>
  );
}

export default App;
