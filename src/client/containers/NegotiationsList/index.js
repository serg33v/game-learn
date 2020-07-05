import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import {
    AddCircle
} from '@material-ui/icons';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Box } from '@material-ui/core';
import styles from './styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {

    }
}))(TableCell);


@observer
class NegotiationsList extends Component {
    async componentDidMount() {
        const { appStore } = this.props;
        await appStore.contractStore.getContracts();
        console.log('receive ', appStore.contractStore.contractsList);
    }

    createContract = async () => {
        const { appStore } = this.props;
        await appStore.contractStore.createContract();
    }

    render() {
        const { classes, appStore } = this.props;
        const contractsList = toJS(appStore.contractStore.contractsList);
        return (
            <>
                <Box display="flex" flexDirection="row-reverse">
                    <Button startIcon={<AddCircle />} color="primary" variant="contained" onClick={this.createContract}>Create new negotiation</Button>
                </Box>
                <TableContainer className={classes.tableContainer}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Client</StyledTableCell>
                                <StyledTableCell align="right">Contract type</StyledTableCell>
                                <StyledTableCell align="right">Value</StyledTableCell>
                                <StyledTableCell align="right"># of issues</StyledTableCell>
                                <StyledTableCell align="right">Last update</StyledTableCell>
                                <StyledTableCell align="right">Owner</StyledTableCell>
                                <StyledTableCell align="right">Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                _.map(contractsList, (row) => (
                                    <TableRow key={row._id} className={classes.tableRow}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.clientName}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.contractType}</StyledTableCell>
                                        <StyledTableCell align="right">{row.contractValue}</StyledTableCell>
                                        <StyledTableCell align="right">{row.numberOfIssues}</StyledTableCell>
                                        <StyledTableCell align="right">{row.updatedAt}</StyledTableCell>
                                        <StyledTableCell align="right">{row._account}</StyledTableCell>
                                        <StyledTableCell align="right">{row.status}</StyledTableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        );
    }
}
NegotiationsList.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        tableContainer: PropTypes.string.isRequired,
        tableRow: PropTypes.string.isRequired,
    }).isRequired,
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default inject('appStore')(withStyles(styles)(NegotiationsList));
