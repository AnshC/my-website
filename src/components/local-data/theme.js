const theme = {
    initialColorModeName: 'light',
    colors: {
        text: '#646363',
        background: '#fef9ef',
        primary: '#ff470a',
        box: '#ede8e5',
        iconInverseColor: '#161616',
        secondaryInverse: '#161616',
        modes:  {
            dark: {
                text: '#ede8e5',
                background: '#161616',
                primary: '#ff470a',
                box: '#1a1918',
                iconInverseColor: '#fef9ef',
                secondaryInverse: '#68b6ff'
            }
        }
    },
    transitions : {
        backgroundColor: 'background 0.3s ease'
    }
}

export default theme;