import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import styles from './styles';

@observer
class Analytics extends Component {
    render() {
        return (
            <>
                <div>Analytics</div>
            </>
        );
    }
}
Analytics.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
    }).isRequired,
};
export default inject('appStore')(withStyles(styles)(Analytics));
