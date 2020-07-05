import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import {
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    Avatar,
    Button,
    Grid,
    Typography,
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';

function generate(element) {
    return [0, 1, 2].map((value) => React.cloneElement(element, {
        key: value,
    }),);
}

@observer
class Team extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12}>
                        <Typography variant="h6" className={classes.title}>Team</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <List>
                                {generate(
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary="Secondary text"
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>,
                                )}
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={12} display="flex">
                        <TextField
                            label="Email"
                            variant="outlined"
                            className={classes.textField}
                        />
                        <Button variant="contained" color="primary">
                            Invite
                        </Button>
                    </Grid>
                </Grid>
            </>
        );
    }
}

Team.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        textField: PropTypes.string.isRequired,
    }).isRequired,
    appStore: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default inject('appStore')(withStyles(styles)(Team));
