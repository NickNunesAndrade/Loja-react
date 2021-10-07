import { useState } from 'react';
import Contador from '../contador/index';
import { Container, Remover } from './styled';

export default function Itens(props) {
    const [produto, setProduto] = useState(props.info);

    function alterar(qtd) {
        setProduto({...produto, qtd: qtd});
        props.update(produto.id, qtd);   
    }

    function remover() {
        props.remove(produto.id);
    }

    return (
        <Container>
            <div className="item">
                <img className="capa" src={produto.imagem} alt="" />
                <Contador onChange={alterar} value={produto.qtd} />
            </div>
            <div className="titulo"> {produto.titulo} </div>
            <div className="preco"> 
                <span>Preço Unitario</span>
                <br />
                {produto.preco} 
            </div>
            <div className="qtd">
                <span>Quantidade</span>
                <br />
                {produto.qtd}
            </div>
            <div className="remover"> 
                <Remover onClick={remover} />
            </div>
        </Container>
    );
}