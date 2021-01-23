<h1 align="center">
  <img src=./frontend/src/assets/logo.svg title"Tindev" alt="Tindev">
</h1>

<h2 align="center">
  Aplicação para conectar desenvolvedores
</h2>

<h3>Sobre</h3>
<p>Aplicativo construído com intuito de realizar consultas na API do Github, possibilitando dar "match" com outros desenvolvedores.</p>
<p>O projeto foi desenvolvido nas três frentes, back-end, front-end e mobile.</p>
<p><strong>Back-End:</strong> Node.js </p>
<p><strong>Front-End:</strong> React </p>
<p><strong>Mobile:</strong> React Native </p>

<h3>Instalação</h3>
<p>O primeiro passo para rodar a aplicação é clonar ela em sua máquina, utilizando seguinte comando no terminal:</p>
<blockquote>
  <p>git clone https://github.com/guilfernandez1/tindev.git</p>
</blockquote>
<p>Após ser feito o clone, abra as pastas <strong>backend</strong>, <strong>frontend</strong>, <strong>mobile</strong> e execute o seguinte código no terminal:</p>
<blockquote>
  <p>yarn install</p>
</blockquote>
<p>Este comando é responsável por baixar todas as dependências que a aplicação necessita para funcionar.</p>

<h3>Rodando a aplicação</h3>
<p>Abra as pastas <strong>backend</strong> e <strong>frontend</strong> e execute o seguinte comando no terminal para acessar a aplicação via Web:</p>
<blockquote>
  <p>yarn dev (Back-End)</p>
  <p>yarn start (Front-End)</p>
</blockquote>
<p>Acesse a aplicação pelo endereço: <strong>localhost:3000</strong></p>
<p>Abra as pastas <strong>backend</strong> e <strong>mobile</strong> e execute o seguinte comando no terminal para acessar a aplicação via Mobile:</p>
<blockquote>
  <p>yarn dev (Back-End)</p>
  <p>yarn start (Mobile)</p>
</blockquote>
<p>Acesse a aplicação pelo endereço: <strong>localhost:19002</strong>, baixe o aplicativo <strong>Expo</strong> em seu celular e leia o QR Code informado na tela para abrir o app Mobile.</p>

<h3>Funcionalidades</h3>
<p>A aplicação contém as seguintes funcionalidades:</p>

- [x] Consulta na API do GitHub
- [x] Cadastro de Devs
- [x] Like entre desenvolvedores
- [x] Dislike entre desenvolvedores
- [x] Função de match utilizando Web Socket
