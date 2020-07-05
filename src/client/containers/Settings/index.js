import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { withSnackbar } from 'notistack';
import {
    TextField,
    Button,
    Grid,
    Typography,
    Divider
} from '@material-ui/core';
import styles from './styles';


@observer
class Settings extends Component {
    state = {
        accountName: ''
    }

    componentDidMount() {
        const { appStore } = this.props;
        this.setState({
            accountName: appStore.accountStore.account.name
        });
    }

    updateAccount = async () => {
        const { appStore, enqueueSnackbar } = this.props;
        const { accountName } = this.state;
        await appStore.accountStore.updateAccount({ name: accountName });
        enqueueSnackbar('Youre offline.', {
            variant: 'success',
        });
    }

    changeAccountName = (e) => {
        this.setState({
            accountName: e.target.value
        });
    }

    render() {
        const { appStore, classes } = this.props;
        return (
            <>
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.title}>Profile</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            disabled
                            label="Email"
                            defaultValue={appStore.accountStore.account.email}
                            variant="outlined"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            onChange={(e) => this.changeAccountName(e)}
                            defaultValue={appStore.accountStore.account.name}
                            variant="outlined"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={this.updateAccount}>
                            Save
                        </Button>
                        <Divider orientation="horizontal" flexItem />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.title}>Change password</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Current Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="New password"
                            type="password"
                            autoComplete="new-password"
                            variant="outlined"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Verify password"
                            type="password"
                            autoComplete="verify-password"
                            variant="outlined"
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </>
        );
    }
}

Settings.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        textField: PropTypes.string.isRequired,
    }).isRequired,
    enqueueSnackbar: PropTypes.func.isRequired,
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

let component = withStyles(styles)(Settings);
component = withSnackbar(component);
export default inject('appStore')(component);
