import logo150x26 from '../../assets/logo-white-150x26.png';

export default (theme) => ({
    root: {
    },
    sidebar: {
        width: theme.spacing(25),
        backgroundColor: theme.palette.primary.main,
        height: '100%',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        // position: 'relative'
    },
    content: {
        marginLeft: theme.spacing(25),
    },
    logoContainer: {
        paddingTop: theme.spacing(6),
        marginBottom: theme.spacing(10),
    },
    logo: {
        height: 26,
        background: `url(${logo150x26}) center 0 no-repeat`,
    },
    largeAvatar: {
        margin: '0 auto',
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(),
    },
    footer: {
        width: theme.spacing(25),
        position: 'absolute',
        bottom: 0,
        left: 0,
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        paddingBottom: theme.spacing(3),
    },
    signout: {
        paddingTop: theme.spacing(2),
        color: theme.palette.primary.contrastText,
    }
});
