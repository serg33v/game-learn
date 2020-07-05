import backround from '../../assets/background.jpg';

export default () => ({
    root: {
        height: '100vh',
        background: `url(${backround}) center center no-repeat`,
        backgroundSize: 'cover'
    },
    container: {
        height: '100vh'
    },
});
