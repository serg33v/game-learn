import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';


function Loading(props) {
    const { classes } = props;
    return (
        <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

Loading.propTypes = {
    classes: PropTypes.shape({
        backdrop: PropTypes.string.isRequired,
    }).isRequired,
};

export default (withStyles(styles)(Loading));
