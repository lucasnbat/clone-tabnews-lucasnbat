# Anotações

- Ambiente codespsaces já vem com: docker, docker compose, nvm e nodejs;

# Noções sobre nodejs e nvm

- Para listar versões do node: nvm ls
- Para escolher uma: *nvm install + versão* (ex: lts/hydrogen);
- Cada versão tem um apelido de elemento químico, pelo jeito;
- lts: dão suporte por mais tempo; dão compatibilidade entre subversões;
- nvm alias default -> comando que aponta qual a versão do nodejs padrão
  os terminais novos devem ler para inicializar;
    -*nvm alias default lts/hydrogen*;
- Arquivos com final "rc" significa "run commands" ou comandos de inicalização
    - o .nvmrc serve para reocmendarmos a versão de nodejs que nossos visitantes
      de rep vão ser recomendados a usar;

# Nextjs

- Não é framework extremamente opinativo, ele apenas orquestra;
- O que mais opina é o React;
- npm install next@13.1.6 -> instalar next como dependencia;
- npm install react@18.2.0 -> react como dependencia;
- npm install react-dom@18.2.0 -> renderizador de HTML do react
  - existem vários, tais como o react native (mobile), renderizadores 3d...


## Arquivo manisfesto

- É o packtage.json, com todas as dependencias e bibliotecas usadas na hora 
  de desenvolver e rodar;

# Protocolos

- HTTP: Hypertext transfer protocol (documentos que tem referencias para outros doc);
- FTP: transf de arquivos;
- SMTP: Simple Mail Transfer Protocol (transf. mensagem de email);

- Protocolo: regras que duas partes concordam para se comunicarem entre si;
- São empilháveis;
  - HTTP usa regras para comunicar entre cliente e servidor;
    - Essas informações podem ser transitadas via TCP;
      - QUe por sua vez usa o Internet Protocol (IP)
- Protocolos com mais verificação de perda de info como TCP geram custo;
  - Nem sempre compensa pagar esse custo (caso de vídeos zoom, com protocolo UDP)
  - Quem compensa a perda de frames geralmente são os humanos que estão na reunião zoom;
- No UDP, se há perda de movimento de um objeto na tela de posição A para posição B,
  ele preenche esse limbo com dataframes intermediários;
  - Isso não ocorre no TCP, o qual ao perceber a perda de um dado na transmissão 
    negocia o re-envio dessa informação, ocasionando "travamentos" na fluidez do objeto;

# Roteamento com Nextjs

- Tudo que coloca na pasta pages do next vira rota pública;
- pages/index.js -> seusite.com/
- pages/produtos/index.js -> seusite.com/produtos

# Conceitos de Git

- Merge conflict: quando alterações de duas pessoas causam conflito na execução
  da versão de código de cada uma;
    - Algo como uma pessoa está codando contado que existe um bloco x de código e 
      a outra pessoa deletou o bloco x
    - Aí abre-se um Merge conflict que só será resolvido por um humano;
- O Git tem o github como cópia de referencia e você tem vários clones que voce
  clonou em sua maquina
- O Git tira foto do estado dos arquivos, ou seja ,coloca identificador em
cada um deles e guarda eles em pacotes chamado blobs (binary large object). Conjunto
de blobs é uma foto;
- Depois, se dos arquivos que você guardou antes você só alterou alguns, o git
vai tirar uma foto nova inteira apenas dos arquivos alterados (vai juntar apenas os 
blobs dos arquivos alterados numa nova foto)e o que ficou inalterado ele vai apontar
para os blobs da foto anterior;
- Quando você precisa de ver as diferenças, o git joga um blob de arquivo numa versão
x contra o blob de outro na versão y e calcula o que foi mudado sob demanda

# Estágios dos gits

- Modified: uma arquivo que já tem commit e que foi modificado;
- Staged: um arquivo que você quer, só ele, que entre no palco para tirar a foto/commit
  e deixa o restante de fora (há casos assim onde você modifica vários para descobrir que resolveria o problema alterando apenas uma linha);
- git status
  - untracked: arquivos não rastreados que mal foram mexidos. Você alterou, ele vira modified;
  - ('modified'): não rastreado, mudanças que ainda não foram adicionadas com *git add .*
  - Staged: mudanças que aparecem como "Changes to be committed" após o *git add .*
  - commited: mudanças que aparecem como commit com hash após *git commit* e você digitar o texto do commit no arquivo do editor
- Basicamente:
  - **Untracked** --> qualquer alteração --> **modified** --> *git add* --> **staged** --> *git commit* --> **commited**
- Todos os arquivos acima são monitorados por git. Os que estão no .gitignore nem untracked chegam a ser;
- Build: arquivos nossos --> arquivos finais que serão consumidos pelo navegador (eles ficam na .next/)

# Git ammend e git push

- *git log* --oneline
  - logs em uma linha, resumidos
- *git diff* calcula a diferença entre os arquivos salvos nos commits x o que você tem atualmente na sua área de trabalho
- Caracter *\n* basicamente indica o caracter newline, que basicamente
é um caractere que indica FIM DA LINHA. Se não tem ele, para os computadores, meio que nem linha aquele trecho é.
- Por isso você consegue selecionar um pequeno espaço após cada linha
de código. É o \n, invibilizado pelo editor para não atrapalhar sua leitura;
- *git commit --amend*: com isso você consegue pegar o arquivo staged e emendar a alteração dele com a do commit anterior;

# Sobre push e outros comandos para git online

- "On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)"
  - Isso significa que a sua branch main local está a frente da main origin (online) em 1 commit
- origin/main = na origin online, a branch main
- local/main = no rep. local, a branch main


