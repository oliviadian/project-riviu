import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import FeedbackComponent from './feedback-component';
import LoginComponent from './login-component';
import SurveyComponent from './survey-component';
import TicketComponent from './ticket-component';
import Lokasi from './lokasii';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginComponent}/>
                <Route path="/survey-component" component={SurveyComponent}/>
                <Route path="/login-component" component={LoginComponent}/>
                <Route path="/feedback-component" component={FeedbackComponent}/>
                <Route path="/ticket-component" component={TicketComponent}/>
                <Route path="/form-pelanggan" component={PelangganComponent}/>
            </Switch>
        );
    }
}

export default Main;