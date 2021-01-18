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
            <hr />
            <p>Meu e-Mail marceloicampos@outlook.com - <a href="mailto:marceloicampos@outlook.com"> mande um e-Mail pra mim</a> (eu garanto que respondo).</p>
            <p><a href="https://github.com/marceloicampos" target="_blank"> /marceloicampos - Github</a> - Aqui você encontra meus trabalhos em desenvolvimento (com muitas dicas boas).</p>
            <p><a href="https://twitter.com/marceloicampos" target="_blank"> /marceloicampos - Twitter</a> - É so mais um perfil básico, mas é onde busco muitas notícias e informações atualizadas.</p>
            <p> <a href="https://www.facebook.com/marceloicampos" target="_blank"> /marceloicampos - Facebook</a> - Acompanha-me no meu perfil do Facebook.</p>
            <p> <a href="https://www.instagram.com/marceloicampos" target="_blank"> /marceloicampos - Instagram</a> - Aqui tem algumas fotos minhas (nada demais).</p>
            <p> <a href="https://www.youtube.com/MICChannel79" target="_blank"> /MICChannel79 - Youtube</a> - Acessa meu canal, não tem vídeo, mas tem perfil e MINHAS PLAYLISTS DE VÍDEOS (vale a pena CONFERIR).</p>
        </div>
    )
}

export default Sobre