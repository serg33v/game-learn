import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Loading from '../../components/Loading';
import logger from '../../utils/logger';
import AppRouter from '../../router/AppRouter';
import AuthContainer from '../Auth';


class App extends Component {
    constructor() {
        super();
        // disable all log for production
        if (process.env.NODE_ENV === 'production') {
            logger.disable();
        }

        console.log('-----------------------------------------');
        console.log('------------- ', process.env.NODE_ENV, ' MODE ----------');
        console.log('-----------------------------------------');
    }

    async componentDidMount() {
        await this.initUser();
    }

    initUser = async () => {
        const { appStore } = this.props;
        await appStore.authStore.init();
        appStore.appReady = true;
    }

    render() {
        const { appStore } = this.props;
        if (!appStore.appReady) {
            return (<Loading />);
        }

        if (appStore.isAuthenticated) {
            return (
                <AppRouter />
            );
        }
        return (
            <AuthContainer />
        );
    }
}
App.propTypes = {
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default inject('appStore')(withStyles(styles)(observer(App)));
