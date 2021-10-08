import styled from 'styled-components';

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em;

    .botao button {
        margin-top: 2em;
        border-radius: 2em;
        border: none;
        outline: none;
        padding: .5em 1.5em;
        font: 400 1em Roboto;
        background-color: rgb(8, 0, 225);
        color:  white;
        cursor: pointer;
    }

    .botao button:hover {
        transition: 0.5s;
        background-color: #0861e1;
    }

    .lista-produtos {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .lista-produtos:hover {
        transition: 0.8s;

    }

    h1 {
        font-family: Roboto;
        font-weight: 900;
    }
`

export { Container }

