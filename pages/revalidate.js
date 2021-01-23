import Link from 'next/link';

function Revalidate(props) {
    console.log('> Pass over FrontEnd REVALIDATE;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();
    
    return (
        <div>
            <h1>Tempo Página COM revalidação</h1>
            <p>by Marcelo I Campos - Project React - NextJS</p>
            <p>
            <Link href="/">
                <a>Voltar a página PRINCIPAL</a>
            </Link>
            </p>
            <div style={{fontSize: "25px", fontFamily:"Arial"}}>{dynamicDateString} (dinâmico - front end)</div>
            <div style={{fontSize: "25px", fontFamily:"Arial"}}>{props.staticDateString} (estático - back end - COM revalidação)</div>
            <div>Agora se houver atualização de chamada no navegador (aperte F5 mais de uma vez) o back end será revalidado e TEMPO ajustado de acordo com as chamadas</div>
            <script data-ad-client="ca-pub-8817498061942635" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </div>
    )
}

export function getStaticProps() {
    console.log('> Pass over validate ON getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Revalidate;