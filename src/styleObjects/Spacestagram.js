export const styles = {
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        minHeight: '100vh',
        maxWidth: '100rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: ['Prompt'],
        fontSize: '4rem',
        fontWeight: '600',
    },
    subtitle: {
        fontFamily: ['Prompt'],
        fontSize: '1.5rem',
    },
    buttonContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
    },
    buttonText: {
        backgroundColor: '#008060',
        color: 'white',
        width: '25rem',
        fontWeight: '600',
        padding: '1rem',
        margin: '1rem',
        '&:hover': {
            backgroundColor: '#004C3F',
            boxShadow: '0rem 0.5rem 2.5rem 0 rgb(0 0 0 / 25%)',
        }
    },
    marsContentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
};