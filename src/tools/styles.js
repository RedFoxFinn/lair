
// Author:              Antti Aarnio || RedFoxFinn
// Project:             lair
// Description:         personal project
// File:                styles.js
// File description:    styles is a self-made tool to provide inline styling for React components

//   Function definitions for styling tool

const column = () => {
    return {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        alignContent: 'center'
    };
};

const sortings = () => {
    return {
        marginLeft: '1em', 
        marginRight: '1em', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        alignContent: 'center'
    };
};

const row = () => {
    return {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        alignContent: 'center'
    };
};

const infoRow = () => {
    return {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        alignContent: 'center', 
        height: '4em'
    };
};

const header_first = () => {
    return {
        fontSize: '3em', 
        color: 'black'
    };
};

const header_optional = () => {
    return {
        fontSize: '2.5em', 
        color: 'black'
    };
};

const footer_first = () => {
    return {
        fontSize: '2em',
        color: 'black'
    };
};

const footer_second = () => {
    return {
        fontSize: '1em',
        color: 'grey'
    };
};
const footer_third = () => {
    return {
        fontSize: '1em',
        color: 'grey',
        marginLeft: '1em'
    };
};

const header_second = () => {
    return {
        fontSize: '1em', 
        color: 'grey'
    };
};

const tech_first = () => {
    return {
        fontSize: '1.5em',
        color: 'black'
    };
};

const tech_second = () => {
    return {
        fontSize: '0.75em',
        color: 'grey'
    };
};

const text = () => {
    return {
        fontSize: '1em', 
        color: 'black'
    };
};

const larger_text = () => {
    return {
        fontSize: '1.5em', 
        color: 'black'
    };
};

const success = () => {
    return {
        fontSize: '1em', 
        color: 'forestgreen'
    };
};

const failure = () => {
    return {
        fontSize: '1em', 
        color: '#dc4233'
    };
};

const running = () => {
    return {
        fontSize: '1em', 
        color: 'darkblue'
    };
};

const selection = () => {
    return {
        fontSize: '1.5em', 
        color: '#dc4233'
    };
};

const sortingButton = () => {
    return {
        marginBottom: '0.5em', 
        width: '12em', 
        height: '2em', 
        outline: '1px solid #dc4233', 
        border: '1px solid transparent', 
        background: 'transparent'
    };
};

const fetchingButton = () => {
    return {
        marginLeft: '1em', 
        width: '6em', 
        height: '2em', 
        outline: '1px solid #dc4233', 
        border: '1px solid transparent', 
        background: 'transparent'
    };
};

const searchButtons = () => {
    return {
        marginLeft: '1em', 
        width: '8em', 
        height: '2em', 
        outline: '1px solid #dc4233', 
        border: '1px solid transparent', 
        background: 'transparent'
    };
};

const searchField = () => {
    return {
        width: '12em', 
        height: '1em', 
        outline: '1px solid #dc4233', 
        border: '1px solid transparent', 
        background: 'transparent'
    };
};

//   styling tool exporting

export default {
    header_first, header_second, failure, fetchingButton, row, column, infoRow, header_optional, 
    running, searchButtons, searchField, selection, sortingButton, sortings, success, text, larger_text,
    footer_first, footer_second, footer_third, tech_first, tech_second
};