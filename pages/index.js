import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

function Home() {
    return ( 
        <div>
            <h1>HOME</h1>
            <p>by Marcelo I Campos - Project React - NextJS</p>
            <p>
            <Link href="/about">
                <a>Acessar a página SOBRE quem sou eu</a>
            </Link>
            </p>
            <p>
            <Link href="/time">
                <a>Acessar a página TEMPO Estático no Back End SEM REVALIDAÇÃO</a>
            </Link>
            </p>
            <p>
            <Link href="/revalidate">
                <a>Acessar a página TEMPO Estático no Back End COM REVALIDAÇÃO</a>
            </Link>
            </p>
            <p>
            <Link href="/api/tempo">
                <a target="_blank">Acessar a página API TEMPO</a>
            </Link>
            </p>
            <p style={{fontWeight: "bold"}}>Clique nos BOTÕES para somar mais 1 ao CONTADOR ou para voltar ao número 1 inicial </p>
            <h2 style={{color: "red"}}><Contador /></h2>
            <p><CapsLock texto="texto em capslock usando parâmentro parent" /></p>
            <p><CapsLock2>texto em capslock usando parâmentro children</CapsLock2></p>
            <footer>
            <p>Estudos em HTML5, CSS3 e JAVASCRIPT por <a href="https://marceloicampos.com/about" target="_blank">Marcelo Ildefonso Campos</a></p>
            </footer>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    function reiniciarContador() {
        setContador (1); 
    }

    return (
     <div>
        <div>{contador}</div>
        <p><button onClick={adicionarContador}>ADICIONAR mais 1 ao contador acima</button></p>
        <p><button onClick={reiniciarContador}>REINICIAR o contador do 1 novamente</button></p>
     </div>
 )
}

function CapsLock(props) {
    const textoInserido = props.texto;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}

function CapsLock2(props) {
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
}

export default Home;
