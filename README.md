# site_react_nextjs >>> Implementation Instructions

Install on your machine the NodeJS

Create new Repository on github.com (Use Public Repo >>> Add README.md >>> Add .gitignore Node >>> Use License MIT)

Create new folder on your PC (for your project) and Git Clone the Repository (try to use Terminal/WSL on VScode or use Bash/Linux)</br>
Command 'git clone' (inside your folder project)</br>
On your project folder (Command 'code .') to open VScode and expand the integrated terminal</br>
Create the first file 'package.json' use command (on bash line) 'npm init -y'</br>
Create the dependency NextJS use command 'npm install next'</br>
Create the dependency React use command 'npm install react'</br>
Create the dependency React-DOM use command 'npm install react-dom'</br>
OR just 'npm install next react react-dom'</br>

Update
npm outdated
and
npm install
on dev script put - export NODE_OPTIONS=--openssl-legacy-provider; - with use the current node

On your project create a folder 'pages' (create under the project root) and inside create the first index.js

Other examples of folders and files</br>
or File-System root <br>
pages/index.js >>> / >>> site.com.br</br>
pages/about.js >>> /about >>> site.com.br/about</br>
pages/contato.js >>> /contato >>> site.com.br/contato</br>
pages/blog/index.js >>> /blog/ >>> site.com.br/blog/</br>
pages/about/marcelo.js >>> /about/marcelo >>> site.com.br/about/marcelo</br>

Inside file 'package.json' create new script "dev": "next dev" (and delete any script)

Now, when you want to run the production environment / server, from the command line run 'npm run dev'. Then we will have an automatic execution environment / local server on a 'localhost' port indicated by the 'npm run dev' script, just click on it and the default browser will open the production environment. >>> npm run dev

Now, start developing your project in React JS inside index.js **(see my example code)**

After finishing the project development (stop npm server >>> crtl + c >>> on command line) and we will upload the project to Git Hub using the git commands below

git status</br>
git add -A</br>
git commit -m 'description'</br>
git push origin main</br>

# How to navigate between pages instantly

First we need to import component react Link so just write on first line >>> import LINK from 'next/link';

Embrace the tag <a> with the <LINK> component, and inside the LINK put the parametrer href="/target page name" and after on the target page place the index return with href="/" to return do index page **(see my example code)**

After finishing the project development (stop npm server >>> crtl + c >>> on command line) and we will upload the project to Git Hub using the git commands below

git status</br>
git add -A</br>
git commit -m 'description'</br>
git push origin main</br>

Now (with the published page) by simply passing the pointer over the link (to access the next page) the Next.JS will preload the contents of the next page (with prefetch). We can see this happening in Dev Tools on the Network tab. And the Next.JS will continue to load the pages automatically and instantly as a Single-page application, but with static page configuration

# How to create static pages that update themselves

Let's use the concept of TIME, which obviously updates itself

With this basic idea of ​​TIME we can understand and visualize dynamic content on a static page

Create new page >>> time.js

Write a simple function to dynamically display a GMT date and time **(see my example code)**. This date and time information will be displayed in front of the browser in a static way, but our code will also inform other static date and time that are updated dynamically and revalidated at a predetermined time, so the "back end" will show static information that is automatically revalidated dynamically.

The challenge is to create a date and time that validates itself without user request.

For this we use a function to statically get the props or getStaticProps() or get the static props

Note: this function is used only in the application building process

Development mode: that we use on our own machine to develop applications

Build mode: which runs only once, building html and optimizations and freezing a package that will be ready for production

Production mode: it is a ready-made package that is actually running, auto-scalable or not (depending on the accesses) and making queries in the back end

---

Now the static time is stopped at build time and when we update the page it only updates the dynamic time at the front end

Podemos confirmar o dito acima inserindo log de console no código fonte do time.js

FINALMENTE vamos a parte da revalidação e auto atualização das páginas estáticas (a cada segundo por exemplo), para tanto inserimos uma propriedade chamada de revalidate inserindo com quantos segundos de revalidação vamos adotar (veja código de exemplo)

Assim o Build é revalidado a cada segundo. O Next.JS estará rodando sozinho o getStaticProps(), revalidando os dados e transformando em estáticos

O dado dinâmico fica no client-side só é atualizado quando cliente atualiza o navegador

O dado estático fica no server-side rodando sozinho o getStaticProps(), revalidando os dados e transformando em estáticos novamente

Assim os dados sempre ficam estáticos no back end até uma nova consulta, onde acontece nova revalidação e nova transformação de página estática

Essa REVALIDAÇÃO SÓ ACONTECE se ultrapassar o tempo de revalidação estipulado e se recebemos novos acessos ao serviço de back end, então a Vercel irá realizar novo build para entregar nova página estática

O MAIS IMPORTANTE DE TODO ESSE PROCESSO É QUE: mesmo que o back end fique fora do ar a Vercel sempre tem disponível uma página estática revalidada e esta página fica em produção até que ocorra nova revalidação. Assim o site nunca ficará fora do ar.

Assim mesmo com o Back End fora do Ar o Front End continua em produção entregando dados ao usuário final.
