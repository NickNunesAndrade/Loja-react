import { Container } from './styled';
import Produto from '../produto/index';
import { useState } from 'react';

export default function Inicio() {
    const [produtos, setProdutos] = useState([]);

    function listar() {
        const lista = [
            {
                id: 100,
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJzIdTl2BQNNvkcQeRaDDd2VCu2A0oHRgQA&usqp=CAU",
                titulo: "Avengers",
                preco: "200,00",
                descricao: "Esse produto é muito legal",
                especificacoes: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!" 
            },
            {
                id: 101,
                imagem: "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1741907411",
                titulo: "Village",
                preco: "400,00",
                descricao: "Esse produto é muito legal",
                especificacoes: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!"               
            },
            {
                id: 102,
                imagem: "https://cdn.awsli.com.br/600x450/1634/1634877/produto/78554131/59de13619d.jpg",
                titulo: "God Of War",
                preco: "300,00",
                descricao: "Esse produto é muito legal",
                especificacoes: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!"               
            },
            {
                id: 103,
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcDxuEcmGw1pcjKsCJul7pv1Syc6cDQNCCw&usqp=CAU",
                titulo: "Ghost",
                preco: "350,00",
                descricao: "Esse produto é muito legal",
                especificacoes: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!"               
            }
        ]
        setProdutos(lista);
    }

    return (
        <Container>
            <h1> Bem-Vindos ! </h1>
            <br />
            <div className="botao"><button onClick={listar}> Listar </button></div>
            <br />
            <div className="lista-produtos">
                {produtos.map(item => 
                    <Produto info={item} />
                )}
            </div>
        </Container>
    );
}