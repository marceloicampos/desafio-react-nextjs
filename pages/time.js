import Link from 'next/link';

function Tempo(props) {
    console.log('> Pass over FrontEnd;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    return (
        <div>
            <h1>Tempo de Forma Dinâmica em Página Estática</h1>
            <p>by Marcelo I Campos - Project React - NextJS</p>
            <p>
            <Link href="/">
                <a>Voltar a página PRINCIPAL</a>
            </Link>
            </p>
            <div style={{fontSize: "25px", fontFamily:"Arial"}}>{dynamicDateString} (dinâmico - front end)</div>
            <div style={{fontSize: "25px", fontFamily:"Arial"}}>{props.staticDateString} (estático - back end)</div>
        </div>
    )
}

export function getStaticProps() {
    console.log('> Pass over getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo