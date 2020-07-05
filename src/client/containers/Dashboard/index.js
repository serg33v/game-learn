import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';

import { Box, Button } from '@material-ui/core';
import {
    Assignment, AddCircle, BarChart, Settings, People
} from '@material-ui/icons';
import styles from './styles';
import DashboardRouter from '../../router/DashboardRouter';
import SidebarItem from '../../components/SidebarItem';

@observer
class Dashboard extends Component {
    logout = async () => {
        const { appStore } = this.props;
        await appStore.authStore.logout();
    }

    render() {
        const { classes, appStore } = this.props;
        return (
            <Box className={classes.root}>
                <Box className={classes.sidebar}>
                    <Box style={{ flexDirection: 'column', height: '100vh', paddingBottom: 200 }}>
                        <Box className={classes.logoContainer}>
                            <div className={classes.logo}>&nbsp;</div>
                        </Box>
                        <SidebarItem link="/negotiation/new" icon={<AddCircle />} label="Create negotiation" />
                        <SidebarItem link="/" icon={<Assignment />} label="Dashboard" />
                        <SidebarItem link="/analytics" icon={<BarChart />} label="Analytics" />
                        <SidebarItem link="/team" icon={<People />} label="Team" />
                        <SidebarItem link="/settings" icon={<Settings />} label="Settings" />

                        <Box className={classes.footer}>
                            <Box alignItems="center">
                                <div>{appStore.accountStore.account && appStore.accountStore.account.name}</div>
                                {/* <Avatar alt="Remy Sharp" className={classes.largeAvatar} /> */}
                                <Button size="small" className={classes.signout} onClick={this.logout}>Sign out</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.content}>
                    <DashboardRouter />
                </Box>
            </Box>
        );
    }
}
Dashboard.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        sidebar: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        logoContainer: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        footer: PropTypes.string.isRequired,
        largeAvatar: PropTypes.string.isRequired,
        signout: PropTypes.string.isRequired,

    }).isRequired,
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default inject('appStore')(withStyles(styles)(Dashboard));
