import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'mobx-react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import {
    Button,
} from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import * as Sentry from '@sentry/react';
import theme from './theme/theme';
import App from './containers/App';
import AppStore from './stores/AppStore';
import AccountStore from './stores/AccountStore';
import TeamStore from './stores/TeamStore';
import ContractStore from './stores/ContractStore';
import AuthStore from './stores/AuthStore';


Sentry.init({ dsn: 'https://b4e7673a83b24b528bd3991fdd824eae@o414472.ingest.sentry.io/5304889' });

class MainApp extends React.Component {
    appStore;

    constructor(props) {
        super(props);
        this.appStore = new AppStore();
        this.appStore.accountStore = new AccountStore(this.appStore);
        this.appStore.authStore = new AuthStore(this.appStore);
        this.appStore.contractStore = new ContractStore(this.appStore);
        this.appStore.teamStore = new TeamStore(this.appStore);
    }


    render() {
        const notistackRef = React.createRef();
        const onClickDismiss = (key) => () => {
            notistackRef.current.closeSnackbar(key);
        };

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <SnackbarProvider
                        hideIconVariant
                        ref={notistackRef}
                        action={(key) => (
                            <Button onClick={onClickDismiss(key)}>
                                Dismiss
                            </Button>
                        )}
                        dense={false}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        maxSnack={3}
                    >
                        <Provider
                            appStore={this.appStore}
                        >
                            <Router>
                                <App />
                            </Router>
                        </Provider>
                    </SnackbarProvider>
                </CssBaseline>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
