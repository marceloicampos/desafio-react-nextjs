import { useState } from 'react';

function Home() {
    return ( 
        <div>
            <h1>Clique nos BOTÕES para somar mais 1 ao CONTADOR ou para voltar ao número 1 inicial!</h1>
            <h2><Contador /></h2>
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
        <p>by Marcelo I Campos - Projeto React - NextJS</p>
     </div>
 )
}

export default Home