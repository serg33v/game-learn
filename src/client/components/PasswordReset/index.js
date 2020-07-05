import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import {
    TextField,
    Box,
    Paper,
    Button,
    Typography
} from '@material-ui/core';
import styles from './styles';


@observer
class Login extends Component {
    state = {
        email: ''
    }

    switchToLogin = () => {
        const { appStore } = this.props;
        appStore.authStore.authMessage = '';
        appStore.authStore.isPasswordReset = false;
    }

    resetPassword = async () => {
        const { appStore } = this.props;
        const { email } = this.state;
        await appStore.authStore.resetPassword(email);
    };

    render() {
        const { classes, appStore } = this.props;
        // const { from } = this.location.state || { from: { pathname: '/' } };
        return (
            <Box className={classes.authContainer}>
                <Box className={classes.logo}>&nbsp;</Box>
                <Paper elevation={3} className={classes.loginBox}>
                    {
                        appStore.authStore.authMessage
                        && (
                            <Typography variant="body1">
                                {appStore.authStore.authMessage}
                            </Typography>
                        )
                    }
                    {
                        !appStore.authStore.authMessage
                        && (
                            <>
                                <TextField
                                    label="Email"
                                    className={classes.input}
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                />
                                <Box textAlign="center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={this.resetPassword}
                                    >
                                        Reset password
                                    </Button>
                                </Box>
                            </>
                        )
                    }
                </Paper>
                <Box className={classes.forgot} textAlign="right">
                    <Button onClick={this.switchToLogin}>Thanks, i just remembered my password. Show me login.</Button>
                </Box>
            </Box>
        );
    }
}
Login.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        container: PropTypes.string.isRequired,
        authContainer: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        loginBox: PropTypes.string.isRequired,
        input: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        forgot: PropTypes.string.isRequired,
    }).isRequired,
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default inject('appStore')(withStyles(styles)(Login));
