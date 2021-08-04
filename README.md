# Teste de Programação Elo7

## Objetivo

Como parte do processo seletivo do Elo7, gostaríamos que você fizesse uma pequena tarefa. Conforme seu resultado convidaremos você para uma sessão de pair-programming.

O objetivo dessa tarefa é avaliar como você desenvolve código em termos de estilo, eficiência e qualidade.

Crie um repositório no seu Github com a resolução da tarefa descrita abaixo e veremos a sua progressão por meio dos commits.

A especificação é bem básica. Caso deseje aprimorar o template proposto, fique à vontade. Se algo não estiver óbvio, assuma o que for mais claro para você e documente suas suposições.

Qualquer dúvida maior, pergunte-nos. No geral, divirta-se!

## Landing page

Crie um projeto para recriar a seguinte página:

![Vagas](https://s3.amazonaws.com/files.elo7.com.br/candidatos/front-end/vagas.png "Vagas")

Os dados das vagas vêm de uma [API](http://www.mocky.io/v2/5d6fb6b1310000f89166087b) mas, infelizmente, não foram tratados e, por isso, devem ser removidas as vagas inativas. No caso em que não tem a localização, exibir "Remoto" no lugar.

Todos os arquivos necessários para o teste podem ser baixados [aqui](https://s3.amazonaws.com/files.elo7.com.br/candidatos/front-end/teste.zip)

## Implementação

Codificação do layout da landing page

## Ferramentas utilizadas

* HTML
* SASS/CSS
* Javascript/ES6
* NodeJS v10.16.3 - Para rodar as tasks do Gulp.
* Gulp - Para automatizar as tarefas, tais como, converter o SASS para CSS e gerar o arquivo minificado, converter o script de ES6 para ES5 e gerar o arquivo minificado, gerar a sprite dos ícones
* Babel - Transpila o script para um formato aceito por todos os navegadores.

## Tasks do Gulp

* sassDev - Converte o SASS para CSS.
* sassProd - Gera o arquivo CSS minificado.
* jsProd - Converte o script para um formato aceito por todos os navegadores utilizando o Babel e gera o arquivo minificado.
* watch - Monitora alterações nos arquivos e executa as tasks automaticamente.
* generateSprite - Gera a sprite dos ícones.

Todos os arquivos de assets (css, js, scss, img e fonts), estão dentro do diretório assets.

Para rodar o projeto é necessário ter o NodeJS instalado, caso não tenha, [clique aqui](https://nodejs.org/en/) e faça do download da versão de acordo com o seu sistema operacional.

Após efetuar o download do NodeJS, faça o clone do repositório, (caso não tenha o GIT instalado, [clique aqui](https://git-scm.com/downloads)) no seu terminal, execute o comando abaixo.

`git clone https://github.com/rsoliveira87/landingpage-elo7.git && cd landingpage-elo7`

Dentro da pasta landingpage-elo7, execute o comando abaixo para instalar as dependências do Node.

`npm install`

Depois execute a task default do Gulp para gerar os arquivos CSS e JS.

`npx gulp`

Para rodar as outras tasks.

```
npx gulp sassProd
npx gulp sassProd
npx gulp jsProd
npx gulp watch
npx gulp generateSprite
```

Para visualizar o projeto basta abrir o arquivo `index.html` (localizado na raiz do projeto) no browser.