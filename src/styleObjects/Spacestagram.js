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
    description: {
        textAlign: 'center',
        fontFamily: ['Prompt'],
        fontSize: '1rem',
        fontWeight: '500',
    },
    marsContentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
    },
    '@media (max-width: 900px)': {
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    '@media (max-width: 550px)': {
        title: {
            fontSize: '2.5rem',
        },
        subtitle: {
            fontSize: '1rem',
        },
        buttonText: {
            fontSize: '0.75rem',
            width: '20rem'
        }
    }
};