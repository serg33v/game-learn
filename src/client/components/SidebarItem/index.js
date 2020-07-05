import React from 'react';
import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    Link,
} from 'react-router-dom';
import styles from './styles';

const SidebarItem = (props) => {
    const {
        link, label, classes, icon
    } = props;
    return (
        <Box className={classes.root} display="flex" flexDirection="row">
            <Box className={classes.icon}>
                {icon}
            </Box>
            <Link className={classes.link} to={link}>
                {label}
            </Link>
        </Box>
    );
};

SidebarItem.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};
export default (withStyles(styles)(SidebarItem));
