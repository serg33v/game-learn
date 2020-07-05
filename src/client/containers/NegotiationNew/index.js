import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import styles from './styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

@observer
class NegotiationNew extends Component {

    render() {
        let { appStore } = this.props;
        return (
            <>
                <div>NegotiationNew</div>
            </>
        );
    }
}
NegotiationNew.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
    }).isRequired,
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default inject('appStore')(withStyles(styles)(NegotiationNew));
