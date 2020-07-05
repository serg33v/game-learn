import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import NegotiationsList from '../containers/NegotiationsList';
import Settings from '../containers/Settings';
import Analytics from '../containers/Analytics';
import Team from '../containers/Team';

function DashboardRouter() {
    return (
        <Switch>
            <Route exact path="/">
                <NegotiationsList />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
            <Route exact path="/team">
                <Team />
            </Route>
            <Route exact path="/analytics">
                <Analytics />
            </Route>
        </Switch>
    );
}
export default DashboardRouter;
