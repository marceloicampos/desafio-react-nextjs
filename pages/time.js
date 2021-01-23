import Link from 'next/link';

function Time(props) {
    console.log('> Pass over FrontEnd TIME;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();
    
    return (
        <div>
            <h1>Tempo Página SEM revalidação</h1>
            <p>by Marcelo I Campos - Project React - NextJS</p>
            <p>
            <Link href="/">
                <a>Voltar a página PRINCIPAL</a>
            </Link>
            </p>
            <div style={{fontSize: "25px", fontFamily:"Arial"}}>{dynamicDateString} (dinâmico - front end)</div>
            <div style={{fontSize: "25px", fontFamily:"Arial"}}>{props.staticDateString} (estático - back end - SEM revalidação)</div>
            <div>Mesmo se houver atualização de chamada no navegador (apertando F5) o back end NÃO será revalidado e TEMPO ficará estático no back end</div>
            <script data-ad-client="ca-pub-8817498061942635" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </div>
    )
}

export function getStaticProps() {
    console.log('> Pass over validate OFF getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Time;