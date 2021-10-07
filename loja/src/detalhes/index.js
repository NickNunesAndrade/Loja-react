import Cookie from 'js-cookie';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styled';

export default function Detalhes(props) {
    const [produto, setProduto] = useState(props.location.state);
    const navigation = useHistory();

    function comprarItens() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined 
            ? JSON.parse(carrinho)
            : [];
        if(carrinho.some(item => item.id === produto.id) === false)
            carrinho.push({...produto, qtd: 1});
        Cookie.set('carrinho', JSON.stringify(carrinho));
        navigation.push('/carrinho');    
    }

    return (
        <Container>
            <div className="detalhe">
                <Link to="/">Voltar</Link>
                <h1>Detalhes do Produto</h1>
                <br /><br />
                
                <div className="images"> <img src={produto.imagem} alt="" /></div>
                <h1> {produto.titulo} </h1>
                <h3> {produto.preco} </h3>
            </div>

            <div className="descricao">
                <h2>Descricao</h2>
                <div> {produto.descricao} </div>
                <h2>Especificaçoes</h2>
                <div> {produto.especificacoes} </div>
                <div> <button onClick={comprarItens}>Comprar</button></div>
            </div>
        </Container>
    );
}