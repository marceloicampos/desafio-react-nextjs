# site_react_nextjs

Install on your machine the NodeJS

Create new Repository on Git Hub (Use Public Repo >>> Add README.md >>> Add .gitignore Node >>> Use License MIT)

Create new folder on your PC (for your project) and Git Clone the Repository (try to use Terminal/WSL on VScode or use Bash/Linux)
Command 'git clone' (inside your folder project)
On your project folder Command 'code .' to open VScode and expand the integrated terminal
Create the first file 'package.json' use command (on bash line) 'npm init -y'
Create the dependency NextJS use command 'npm install next'
Create the dependency React use command 'npm install react'
Create the dependency React-DOM use command 'npm install react-dom'
OR just 'npm install next react react-dom'

On your project create a folder 'pages' (create under the project root) and inside create the first index.js

other examples of folders and files

pages/index.js >>> site.com.br
pages/contato.js >>> site.com.br/contato
pages/blog/index.js >>> site.com.br/blog
pages/sobre/marcelo.js >>> site.com.br/sobre/marcelo

Inside file 'package.json' create new script "dev": "next dev" (and delete any script)

Now, when you want to run the production environment / server, from the command line run 'npm run dev'. Then we will have an automatic execution environment / local server on a 'localhost' port indicated by the 'npm run dev' script, just click on it and the default browser will open the production environment. >>> npm run dev

Now, start developing your project in React JS inside index.js

After finishing the project development (stop npm server >>> crtl + c >>> on command line) and we will upload the project to Git Hub using the git commands below

git status
git add -A
git commit -m 'description'
git push origin main