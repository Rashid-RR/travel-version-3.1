import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import travelAndTour from './components/Travel_tours/Travel_tours';
import { travelMalaysia } from './components/Travel_tours/Travel_Malaysia';
import { travelDubai } from './components/Travel_tours/Travel_Dubai';
import { travelThailand } from './components/Travel_tours/Travel_Thailand';
import { travelSingapore } from './components/Travel_tours/Travel_Singapore';
import { travelSrilanka } from './components/Travel_tours/Travel_Srilanka';
import { travelMaldives } from './components/Travel_tours/Travel_Maldives';
import About from './components/About/about';
import contact from './components/contact/contact';
import VisaCon from './components/Visa_Consultancy/VisaCosultancy';
import VisaUK from './components/Visa_Consultancy/VisaUk';
import VisaUSA from './components/Visa_Consultancy/VisaUSA';
import VisaEurope from './components/Visa_Consultancy/VisaEurope';
import VisaCanada from './components/Visa_Consultancy/VisaCanada';
import VisaAustralia from './components/Visa_Consultancy/VisaAustralia';
import VisaNZ from './components/Visa_Consultancy/VisaNewZealand';
import VisaIL from './components/Visa_Consultancy/VisaIreland';
import VisaTurkey from './components/Visa_Consultancy/VisaTurkey';
import VisaMaxico from './components/Visa_Consultancy/VisaMaxico';
import VisaSA from './components/Visa_Consultancy/VisaSA';
import Login from './components/Login/login';
import Business_Invitation from './components/BusinessInvitation/Business_Invitation';
import unitedKingdom from './components/Immigration_consultancy/UnitedKingdom';
import ImmigrationConsultancy from './components/Immigration_consultancy/Immigration_consultancy';
import canada from './components/Immigration_consultancy/Canada';
import America from './components/Immigration_consultancy/America';
import Schengen from './components/Immigration_consultancy/Schengen';
import Ireland from './components/Immigration_consultancy/Ireland';
import register from './components/Login/register';
import AirTicket from './components/Air_Ticketing/Air_Ticketing';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route path="/" exact component={Home} />
                <Route path="/travelAndTour" component={travelAndTour} />
                <Route path="/travelMalaysia" component={travelMalaysia} />
                <Route path="/travelDubai" component={travelDubai} />
                <Route path="/travelThailand" component={travelThailand} />
                <Route path="/travelSingapore" component={travelSingapore} />
                <Route path="/travelSrilanka" component={travelSrilanka} />
                <Route path="/travelMaldives" component={travelMaldives} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={contact} />
                <Route path="/VisaConsultancy" component={VisaCon} />
                <Route path="/VisaUK" component={VisaUK} />
                <Route path="/VisaUSA" component={VisaUSA} />
                <Route path="/VisaEurope" component={VisaEurope} />
                <Route path="/VisaCanada" component={VisaCanada} />
                <Route path="/VisaAustralia" component={VisaAustralia} />
                <Route path="/VisaNewZealand" component={VisaNZ} />
                <Route path="/VisaIreland" component={VisaIL} />
                <Route path="/VisaTurkey" component={VisaTurkey} />
                <Route path="/VisaMaxico" component={VisaMaxico} />
                <Route path="/VisaSA" component={VisaSA} />
                <Route path="/businessInvitation" component={Business_Invitation} />
                <Route path="/ImmConsultancy" component={ImmigrationConsultancy} />
                <Route path="/Login" component={Login} />
                <Route path="/unitedKingdom" component={unitedKingdom} />
                <Route path="/canada" component={canada} />
                <Route path="/Schengen" component={Schengen} />
                <Route path="/Ireland" component={Ireland} />
                <Route path="/America" component={America} />
                <Route path='/signup' component={register} />
                <Route path='/AirTicket' component={AirTicket} />
            </Layout>
        );
    }
}
