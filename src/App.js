import React from 'react';
import './assets/style/app.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import TicketComponent from './component/ticket-component'
import LoginComponent from './component/login-component'
import FeedbackComponent from './component/feedback-component';
import SurveyComponent from './component/survey-component';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* Route awal dibuat exact agar tidak keluar di tiap page*/}
        <Route exact path="/" render={(props) => 
            <LoginComponent {...props} //...props passing all props to their child/parent
              logo="logo-telkom"
            />
        }/>
        <Route path="/login" render={(props) => 
            <LoginComponent {...props}
              logo="logo-telkom"
            />
        }/>
        <Route path="/ticket" render={(props) => 
            <TicketComponent {...props}
              name="Teknisi"
              logo="logo-telkom"
              description="Memasukkan nomor tiket pesanan di bawah ini"
            />
        }/>
        <Route path="/survey" render={(props) => 
            <SurveyComponent {...props}
              kode="KB149JJ"
            />
        }/>
        <Route path="/feedback" render={(props) => 
            <FeedbackComponent {...props}
              logo="thumbs"
              text="Survey submitted, Thank You!"
            />
        }/>
        {/* Route 404 */}
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;