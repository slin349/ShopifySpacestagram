export const styles = {
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        height: ({ buttonClicked }) => buttonClicked ? '100%' : '100vh',
        maxWidth: '100rem',
        backgroundColor: '#EDEDED',
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
    apodContainer: {
        width: '30rem',
        height: '50rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '5rem',
        margin: '3rem 0rem',
    },
    imageStyle: {
        borderTopLeftRadius: '5rem',
        borderTopRightRadius: '5rem',
        objectFit: 'fill',
        width: '100%',
        height: '20rem',
    }
};