import Link from 'next/link';

function About() {
    return ( 
        <div>
            <h1>SOBRE quem sou eu</h1>
            <p>by Marcelo Ildefonso Campos - Project React - NextJS</p>
            <p>
            <Link href="/">
                <a>Voltar a página PRINCIPAL</a>
            </Link>
            </p>
            <h2>Quem sou eu?</h2>
            <p>Meu nome é <strong>Marcelo Ildefonso Campos,</strong>sou estudante entusiasta de HTML, CSS e JAVASCRIPT. Aprendendo (aos 40 anos de vida) a programar e desenvolver.</p>
            <h2>Meus Cursos</h2>
            <p><a href="https://www.cursoemvideo.com/blog/hall-da-fama/marcelo-campos/" target="_blank">Meus Cursos em Vídeo</a></p>
            <h2>Meus Projetos</h2>
            <p><a href="https://marceloicampos.github.io/site-hello-world/" target="_blank">Projeto Hello World</a></p>
            <p><a href="https://marceloicampos.github.io/site-hello-javascript/" target="_blank">Projeto Hello JavaScript</a></p>
            <p><a href="https://marceloicampos.github.io/site-glass-html5/" target="_blank">Projeto Glass Html5</a></p>
            <p><a href="https://marceloicampos.github.io/alura-imersaodev03/" target="_blank">Projeto Imersão DEV_</a></p>
            <p><a href="https://imersao-react-quiz-html-css-git-main.marceloicampos.vercel.app/" target="_blank">Projeto Imersão React</a></p>
            <p><a href="https://miy-nlw-04-nextjs-git-main-marceloicampos.vercel.app/" target="_blank">Projeto NLW7 My-Name-Tag</a></p>
            <p><a href="https://marceloicampos.github.io/nlw07-mynametag-html-css-js/" target="_blank">Github Explorer - Ignite Classes Reactjs 01</a></p>
            <p><a href="https://ignite-classes-reactjs-01-github-explorer.vercel.app/" target="_blank">Github Explorer - Ignite Classes Reactjs 01</a></p>
            <p><a href="https://ignite-desafio01-trilha-reactjs.vercel.app/" target="_blank">To Do List - Ignite Desafio 01 Trilha Reactjs</a></p>
            <h2>Como falar comigo?</h2>
            <p>Meu e-Mail marceloicampos@outlook.com - <a href="mailto:marceloicampos@outlook.com"> mande um e-Mail pra mim</a> (garanto que respondo).</p>
            <p><a href="https://www.linkedin.com/in/marceloicampos" target="_blank"> /marceloicampos - LinkedIn</a> - Meu LinkedIn</p>
            <p><a href="https://github.com/marceloicampos" target="_blank"> /marceloicampos - GitHub</a> - Aqui você encontra meus trabalhos em desenvolvimento (com muitas dicas boas) e aqui meu <a href="https://marceloicampos.github.io" target="_blank">repositório público</a> no Git Hub.</p>
            <p><a href="https://twitter.com/marceloicampos" target="_blank"> /marceloicampos - Twitter</a> - É so mais um perfil básico, mas é onde busco muitas notícias e informações atualizadas.</p>
            <p> <a href="https://www.facebook.com/marceloicampos" target="_blank"> /marceloicampos - Facebook</a> - Acompanha-me no meu perfil do Facebook.</p>
            <p> <a href="https://www.instagram.com/marceloicampos" target="_blank"> /marceloicampos - Instagram</a> - Aqui tem algumas fotos minhas (nada demais).</p>
            <p> <a href="https://www.youtube.com/user/MICChannel79/playlists" target="_blank"> /MICChannel79 - YouTube</a> - Acessa meu canal, não tem vídeo, mas tem perfil e MINHAS PLAYLISTS DE VÍDEOS (vale a pena CONFERIR).</p>
            <footer>
            <p>Estudos em HTML5, CSS3 e JAVASCRIPT por <a href="https://marceloicampos.com/about" target="_blank">Marcelo Ildefonso Campos</a></p>
            </footer>
        </div>
    )
}

export default About;
