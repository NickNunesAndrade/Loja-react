import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 3em;
    font-family: Roboto;

    & > div {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin: 1em;
    }

    h1, h3 {
        text-align: center;
    }

    h2 {
        margin-top: 2em;
    }

    button {
        margin-top: 2em;
        border-radius: 2em;
        border: none;
        outline: none;
        padding: .5em 1.5em;
        font: 500 1em Roboto;
        background-color: rgb(8, 0, 225);
        color:  white;
        cursor: pointer;
    }

    .botao button:hover {
        transition: 0.5s;
        background-color: #0861e1;
    }

    img {
        width: 20em;
        height: auto;
    }
`

export { Container }

