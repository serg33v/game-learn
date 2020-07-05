import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import {
    Box,
    Container,
} from '@material-ui/core';
import styles from './styles';
import Login from '../../components/Login';
import PasswordReset from '../../components/PasswordReset';

@observer
class AuthContainer extends Component {
    render() {
        const { classes, appStore } = this.props;
        // const { from } = this.location.state || { from: { pathname: '/' } };
        return (
            <div className={classes.root}>
                <Container className={classes.container}>
                    <Box display="flex" justifyContent="center" className={classes.container}>
                        { !appStore.authStore.isPasswordReset && <Login /> }
                        { appStore.authStore.isPasswordReset && <PasswordReset /> }
                    </Box>
                </Container>
            </div>
        );
    }
}
AuthContainer.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        container: PropTypes.string.isRequired,
    }).isRequired,
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const component = withStyles(styles)(AuthContainer);
export default inject('appStore')(component);
