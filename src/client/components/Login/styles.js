import backround from '../../assets/background.jpg';
import logo150x26 from '../../assets/logo-150x26.png';

export default (theme) => ({
    root: {
        height: '100vh',
        background: `url(${backround}) center center no-repeat`,
        backgroundSize: 'cover'
    },
    container: {
        height: '100vh'
    },
    authContainer: {
        paddingTop: theme.spacing(20)
    },
    logo: {
        height: 26,
        marginBottom: theme.spacing(4),
        background: `url(${logo150x26}) center center no-repeat`,
    },
    loginBox: {
        paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(12),
        paddingTop: theme.spacing(4),
    },
    input: {
        width: '100%'
    },
    button: {
        margin: '0 auto',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3),
        width: '50%'
    },
    forgot: {
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
    }
});
