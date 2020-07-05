import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import styles from './styles';

@observer
class Negotiation extends Component {
    render() {
        // const { appStore } = this.props;
        // const { id } = useParams();
        return (
            <>
                <div>
                    Negotiation
                    {/* {id} */}
                </div>
            </>
        );
    }
}
Negotiation.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
    }).isRequired,
    // appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default inject('appStore')(withStyles(styles)(Negotiation));
