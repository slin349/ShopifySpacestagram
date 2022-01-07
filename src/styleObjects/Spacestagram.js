export const styles = {
    contentContainer: {
        width: '100%',
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
        margin: '2rem 1rem 0rem 1rem',
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
        padding: '1rem',
    },
    marsContentContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '100rem',
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
    },
    '@media (max-width: 400px)': {
        buttonText: {
            fontSize: '0.55rem',
            width: '15rem',
        },
    },
};