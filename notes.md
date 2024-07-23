# Anotações

- Ambiente codespsaces já vem com: docker, docker compose, nvm e nodejs;

# Noções sobre nodejs e nvm

- Para listar versões do node: nvm ls

- Para escolher uma: _nvm install + versão_ (ex: lts/hydrogen);

- Cada versão tem um apelido de elemento químico, pelo jeito;

- lts: dão suporte por mais tempo; dão compatibilidade entre subversões;

- nvm alias default -> comando que aponta qual a versão do nodejs padrão
  os terminais novos devem ler para inicializar; -_nvm alias default lts/hydrogen_;

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
  - ('modified'): não rastreado, mudanças que ainda não foram adicionadas com _git add ._
  - Staged: mudanças que aparecem como "Changes to be committed" após o _git add ._
  - commited: mudanças que aparecem como commit com hash após _git commit_ e você digitar o texto do commit no arquivo do editor

- Basicamente:

  - **Untracked** --> qualquer alteração --> **modified** --> _git add_ --> **staged** --> _git commit_ --> **commited**

- Todos os arquivos acima são monitorados por git. Os que estão no .gitignore nem untracked chegam a ser;

- Build: arquivos nossos --> arquivos finais que serão consumidos pelo navegador (eles ficam na .next/)

# Git amend e git push

- _git log_ --oneline

  - logs em uma linha, resumidos

- _git diff_ calcula a diferença entre os arquivos salvos nos commits x o que você tem atualmente na sua área de trabalho

- Caracter _\n_ basicamente indica o caracter newline, que basicamente
  é um caractere que indica FIM DA LINHA. Se não tem ele, para os computadores, meio que nem linha aquele trecho é.

- Por isso você consegue selecionar um pequeno espaço após cada linha
  de código. É o \n, invibilizado pelo editor para não atrapalhar sua leitura;

- _git commit --amend_: com isso você consegue pegar o arquivo staged e emendar a alteração dele com a do commit anterior;

# Sobre push e outros comandos para git online

- "On branch main
  Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)"

  - Isso significa que a sua branch main local está a frente da main origin (online) em 1 commit

- origin/main = na origin online, a branch main

- local/main = no rep. local, a branch main

- git push: local --> remoto/online (empurrar)

- git pull: local <-- remoto/online (puxar)

- packtage.json: metadados, scripts e dependencias;

- packtage-lock.json: toma nota das dependencias principais e dependencias das dependencias;

  - é exclusivamente sobre dependencias;

- Sobre o problema do git --amend:
  - se você faz um --amend, ele volta no tempo,
    pega a alteração do seu commit mais atual e
    mescla com o commit anterior, gerando uma NOVA
    foto, um NOVO commit;
  - com isso, o commit anterior que você tinha foi
    descartado e agora você tem um novo commit que
    não tá lá na origin/main;
  - isso gera inconsistência;
  - usando o git push --force você força o push
    e faz o origin aceitar as alterações. O mais recente
    commit do origin será substituido pelo commit mais
    recente do seu rep. local;

# Client x Server

- Cliente é quem requisita, servidor é quem supre um serviço;

- Um ator não é limitado apenas a ser só server ou só client, ele pode assumir papéis diferentes dependendo da relação;

- Comunicação é feita por protocolos;

- Deploy: depositar arquivos nos servidores que vão fornecer serviço;

- Hoje:
  - Máquina local --> C.I. (Continuous Integrator) --> Build --> Produção;
  - C.I. = contém testes automatizados;
  - Build = ocorre numa máquina que vai criar a versão final de código que rodará na internet;
  - Produção: ...produção!

# Mais deploys

- Minimal Privilege Principle: principio do menor priilégio;

  - Libera o básico de acessos e depoise xpanda conforme necessidade;

- Deploys na vercel sempre ficam com url identificando eles;

  - branchs tem url unica;
  - commits tem url unica;

- Isso permite você, em casos de problemas com atualizações, voltar para um deploy que deu certo e apontar o dominio oficial publico da vercel para esse deploy funcional;

# Muralhas

- Muralha de tecnologia x Muralha de negócio;

# Orgânico x Impressora 3D

- Over Engineering: complicar demais implementação de funcionalidade que poderia ter sido mais simples;
- Feature Creep: tanta feature que mais atrapalha do que ajuda na UX;

# Moral x Prática

- Não dá para mudar os resultados passados, mas escolha ser você quem determina a interpretação desses resultados e o que vai fazer no futuro;
  - Não aumente as dores da realidade; bola para frente.

# Como organizar tarefas

- Conceito relevante: _saldo positivo x saldo negativo_

  - Fazer mais com que menos;
  - Qualquer tarefa que abale esse senso natural de saldo na sua mente se torna cansativa;
  - Ex: cenário ruim do nível 4 (sobrecarregar programador com rotinas de gestão)

- Nível 1: anotação para apenas lembrar do que precisa ser feito. Custo de energia (para produzir essa anotação) e de aquecimento (rapidez de verificação) devem ser baixíssimos. Ex: folhas de papel A4 com as tarefas;

- Nível 2: _lembrar de todas as coisas a serem feitas com tempo de aquecimento baixo, mas em grupo_. Ótimo ter checkboxes para marcar de forma parcial e total. Ex: quadro na geladeira;

- Nível 3: expandir conhecimento. Utilizar ferramentas que tem tempo de produção maior (trello, github, etc) contendo mais informações e um tempo de aquecimento maior também (demora mais para visualizar pois precisa carregar as páginas, etc);

- Nível 4: gerar métricas sobre as pessoas que estão trabalhando. Isso é muitas vezes mais útil ao gestor do que ao programador que programa (participar de reuniões, arrastar um card de jira...);
  - Mensurar métricas é MEIO, e não um FIM em si mesmo; Não pese as pessoas do seu time!

# Como lidar com projetos de qualquer tamanho

- Nunca negocie com terroristas. Seu cérebro engata muitas situações de tudo ou nada e o certo a se fazer sempre é optar pelo terceiro caminho: fazer aos poucos, trabalhar pouco, ganhar pouco. Apesar do mal estar que essa frase provoca, é possível se livrar disso com o tempo e a persistência;

- Issue de inception: Issue é onde você mostra problemas do projeto. A issue do inception é como se fosse uma penseira onde você descarrrega toda a ideia bagunçada que você tem na cabeça de uma forma linear num texto, analisando a origem da ideia, alicerces e se ela para em pé mesmo;

- Isso vai gerar uma pedra enorme. Você tem que quebrar ela até conseguir definir tamanhos de pedras que você vai conseguir lidar;

# Criando milestones e issues do projeto

- Por padrão, quebre as pedras o máximo possível até ficar na pedrinha em que você considere viável para implementar;

- Mecânica de dopamina:
  - 1º estágio - Início: cérebro identifica oportunidade e libera pequenas doses de dopamina em regiões do cérebro para você gerar movimento e ir em direção ao objetivo;
  - 2º estágio - Progresso: cérebro libera novas doses maiores à medida que o caminho tomado pelo seu movimento começa a gerar resultado. estímulo para concluir o movimento;
  - 3º estágio - Final: caso o movimento produza um resultado que é "aprovado", uma dose final e maior de dopamina é liberada e o evento mexe com as estruturas do cérebro, modelando-o;

# Configurando formatadores

- editorconfig: editor enquanto você digita;
- prettier: ajusta inclusive códigos já existentes;

- comandos:
  - npm i prettier -D = instala como dependencia de desenvolvimento;
  - adicione {"lint:check": "prettier --check ."} no package.json;
  - Instale a extensão do prettier e insira ele como formatador padrão do vscode;
  - Habilite o formatar ao salvar;
  - Autosave: desabilite. Isso vai ajudar para quando fazer testes automatizados.
