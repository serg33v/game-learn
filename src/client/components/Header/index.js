
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                TEST
            </div>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
    }).isRequired,
};
export default (withStyles(styles)(Header));
