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
        email: '',
        password: ''
    }

    switchToPasswordReset = () => {
        const { appStore } = this.props;
        appStore.authStore.authMessage = '';
        appStore.authStore.isPasswordReset = true;
    }


    login = async () => {
        const { appStore } = this.props;
        const { email, password } = this.state;
        await appStore.authStore.authenticate(email, password);
    };

    render() {
        const { classes, appStore } = this.props;
        // const { from } = this.location.state || { from: { pathname: '/' } };
        return (
            <Box className={classes.authContainer}>
                <Box className={classes.logo}>&nbsp;</Box>
                <Paper elevation={3} className={classes.loginBox}>
                    <Typography variant="body1">
                        {appStore.authStore.authMessage}
                    </Typography>
                    <TextField
                        label="Email"
                        className={classes.input}
                        onChange={(event) => this.setState({ email: event.target.value })}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        className={classes.input}
                        onChange={(event) => this.setState({ password: event.target.value })}
                    />
                    <Box textAlign="center">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.login}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Paper>
                <Box className={classes.forgot} textAlign="right">
                    <Button onClick={this.switchToPasswordReset}>Forgot password?</Button>
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

const component = withStyles(styles)(Login);
export default inject('appStore')(component);
