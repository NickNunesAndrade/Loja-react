import styled from 'styled-components';
import {useEffect, useState} from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;

    & > * {
        margin: .5em;
        background-color: #f5f5f5;
        padding: 0.3em .8em;
        user-select: none;
    }

    .menos {
        border-radius: 100%;
        cursor: pointer;
    }

    .quantidade {
        padding: 0.3em 1em;
    }

    .mais {
        border-radius: 100%;
        cursor: pointer;
    }
`

export default function Contador(props) {
    const [qtd, setQtd] = useState(props.value);

    function adicionar() {
        if(qtd >= 10) 
            return;
        setQtd(qtd + 1);
    }

    function diminuir() {
        if(qtd === 0)
            return;
        setQtd(qtd - 1);
    }

    useEffect(() => {
        props.onChange(qtd);
    }, [qtd]);

    return (
        <Container>
            <div className="menos" onClick={diminuir}>-</div>
            <div className="quantidade"> {qtd} </div>
            <div className="mais" onClick={adicionar}>+</div>
        </Container>
    );
}
