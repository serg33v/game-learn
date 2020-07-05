export default (theme) => ({
    root: {
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(3),
        color: theme.palette.primary.contrastText,
    },
    icon: {

    },
    link: {
        paddingLeft: theme.spacing(),
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.light
        }
    }

});
