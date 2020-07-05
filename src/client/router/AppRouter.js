import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import Negotiation from '../containers/Negotiation';
import NegotiationNew from '../containers/NegotiationNew';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/negotiation/new">
                <NegotiationNew />
            </Route>
            <Route exact path="/negotiation/:id">
                <Negotiation />
            </Route>
            <Route path="/">
                <Dashboard />
            </Route>
        </Switch>
    );
}
export default AppRouter;
