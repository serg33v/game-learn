export default (theme) => ({
    root: {
    },
    tableContainer: {
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    }
});
