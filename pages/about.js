import Link from 'next/link';

function About() {
    return ( 
        <div>
            <h1>SOBRE quem sou eu</h1>
            <p>by Marcelo I Campos - Project React - NextJS</p>
            <p>
            <Link href="/">
                <a>Voltar a página PRINCIPAL</a>
            </Link>
            </p>
            <hr />
            <h2>Quem sou eu?</h2>
            <p>Meu nome é <strong>Marcelo I Campos</strong>, sou estudante entusiata de HTML, CSS e JAVASCRIPT. Aprendendo (aos 40 anos de vida) a programar e desenvolver.</p>
            <h2>Meus Projetos</h2>
            <p><a href="https://marceloicampos.github.io/site-hello-world/" target="_blank">Projeto Hello World</a></p>
            <p><a href="https://marceloicampos.github.io/site-glass-html5/" target="_blank">Projeto Glass Html5</a></p>
            <p><a href="https://marceloicampos.github.io/site-test-javascript/" target="_blank">Projeto Test JavaScript</a></p>
            <p><a href="https://imersao-react-quiz-html-css-git-main.marceloicampos.vercel.app/" target="_blank">Projeto Imersão React</a></p>
            <h2>Como falar comigo?</h2>
            <p>Meu e-Mail marceloicampos@outlook.com - <a href="mailto:marceloicampos@outlook.com"> mande um e-Mail pra mim</a> (garanto que respondo).</p>
            <p><a href="https://github.com/marceloicampos" target="_blank"> /marceloicampos - GitHub</a> - Aqui você encontra meus trabalhos em desenvolvimento (com muitas dicas boas) e aqui meu <a href="https://marceloicampos.github.io" target="_blank">repositório público</a> no Git Hub.</p>
            <p><a href="https://twitter.com/marceloicampos" target="_blank"> /marceloicampos - Twitter</a> - É so mais um perfil básico, mas é onde busco muitas notícias e informações atualizadas.</p>
            <p> <a href="https://www.facebook.com/marceloicampos" target="_blank"> /marceloicampos - Facebook</a> - Acompanha-me no meu perfil do Facebook.</p>
            <p> <a href="https://www.instagram.com/marceloicampos" target="_blank"> /marceloicampos - Instagram</a> - Aqui tem algumas fotos minhas (nada demais).</p>
            <p> <a href="https://www.youtube.com/user/MICChannel79/playlists" target="_blank"> /MICChannel79 - Youtube</a> - Acessa meu canal, não tem vídeo, mas tem perfil e MINHAS PLAYLISTS DE VÍDEOS (vale a pena CONFERIR).</p>
        </div>
    )
}

export default About;