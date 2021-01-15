import Link from 'next/link';

function Sobre() {
    return ( 
        <div>
            <h1>SOBRE quem sou eu</h1>
            <p>by Marcelo I Campos - Project React - NextJS</p>
            <p>
            <Link href="/">
                <a>Voltar a página PRINCIPAL</a>
            </Link>
            </p> 
        </div>
    )
}

export default Sobre