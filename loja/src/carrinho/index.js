import { Link } from 'react-router-dom';
import { Container } from './styled';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Itens from './carrinho-item/index';
import Cookies from 'js-cookie';


export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);

    useEffect(carregar, []);

    function carregar() {
        let carrinho = Cookie.set('carrinho');
        carrinho = carrinho !== undefined 
            ? JSON.parse(carrinho)
            : [];
        setProdutos(carrinho);
    }

    function removerProduto(id) {
        let carrinho = produtos.filter(item => item.id !== id);
        Cookie.set('carrinho', JSON.stringify(carrinho));
        setProdutos([...carrinho]);
    }

    function alterarProduto(id, qtd) {
        let alterar = produtos.filter(item => item.id === id)[0];
        alterar.qtd = qtd;
        Cookies.set('carrinho', JSON.stringify(produtos));
    }

    return (
        <Container>
            <h1>Carrinho</h1>
            <Link to="/">Voltar</Link>
            <div className="item">
                {produtos.map(item => 
                    <Itens key={item.id} 
                        info={item}
                        update={alterarProduto}
                        remove={removerProduto}
                        />  
                )}
            </div>
        </Container>
    );
}
