# Anotações

- Ambiente codespsaces já vem com: docker, docker compose, nvm e nodejs;

# Noções sobre nodejs e nvm

- Para listar versões do node: nvm ls

- Para escolher uma: `nvm install + versão` (ex: lts/hydrogen);

- Cada versão tem um apelido de elemento químico, pelo jeito;

- lts: dão suporte por mais tempo; dão compatibilidade entre subversões;

- nvm alias default -> comando que aponta qual a versão do nodejs padrão
  os terminais novos devem ler para inicializar; -`nvm alias default lts/hydrogen`;

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
  - ('modified'): não rastreado, mudanças que ainda não foram adicionadas com `git add .`
  - Staged: mudanças que aparecem como "Changes to be committed" após o `git add .`
  - commited: mudanças que aparecem como commit com hash após `git commit` e você digitar o texto do commit no arquivo do editor

- Basicamente:
  
  - **Untracked** --> qualquer alteração --> **modified** --> `git add` --> **staged** --> `git commit` --> **commited**

- Todos os arquivos acima são monitorados por git. Os que estão no .gitignore nem untracked chegam a ser;

- Build: arquivos nossos --> arquivos finais que serão consumidos pelo navegador (eles ficam na .next/)

# Git amend e git push

- `git log` --oneline
  
  - logs em uma linha, resumidos

- `git diff` calcula a diferença entre os arquivos salvos nos commits x o que você tem atualmente na sua área de trabalho

- Caracter `\n` basicamente indica o caracter newline, que basicamente
  é um caractere que indica FIM DA LINHA. Se não tem ele, para os computadores, meio que nem linha aquele trecho é.

- Por isso você consegue selecionar um pequeno espaço após cada linha
  de código. É o \n, invibilizado pelo editor para não atrapalhar sua leitura;

- `git commit --amend`: com isso você consegue pegar o arquivo staged e emendar a alteração dele com a do commit anterior;

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

- Conceito relevante: `saldo positivo x saldo negativo`
  
  - Fazer mais com que menos;
  - Qualquer tarefa que abale esse senso natural de saldo na sua mente se torna cansativa;
  - Ex: cenário ruim do nível 4 (sobrecarregar programador com rotinas de gestão)

- Nível 1: anotação para apenas lembrar do que precisa ser feito. Custo de energia (para produzir essa anotação) e de aquecimento (rapidez de verificação) devem ser baixíssimos. Ex: folhas de papel A4 com as tarefas;

- Nível 2: `lembrar de todas as coisas a serem feitas com tempo de aquecimento baixo, mas em grupo`. Ótimo ter checkboxes para marcar de forma parcial e total. Ex: quadro na geladeira;

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

# Resoluções de DNS

- Seu computador contata o DNS server, pega o ip referente ao endereço que você pesquisou e depois o seu pc usa esse ip para se referir diretamente ao servidor que contem os serviços que você quer utilizar;

- Domain Name System;

- Converte nome em endereço IP ("resolver");

- É como uma tabelona que anota o nome e o endereço relativo;
  
  - Um ip pode mudar, mas aí o nome continua, não impacta no domínio;

- Você faz a requsiição primeiramente para um recursive server;
  
  - Esse recursive server vai pedir para um root server (um dos servidores dns poderosos lá) se ele sabe qual é o ip referente àquele domínio;

- tabnews.com.br.
  
  - "termina" com ponto. O root server vai ler de trás para frente;
  - "." indica o root server;
  - ".br" é o TLD, Top Level Domain. E o root server sabe qual é a lista dos servidores que são dos TLD. Os roots servers sabem quais os ips dos servidores dos TLD;
    - ccTLDs = country code tld domains - para países, .br, .pt, etc
    - gTLDs = generic TLDs como o .com, .org, .dev, .bradesco
  - Depois disso, então, o computador vai pergar a lista de nomes dos tlds devolvida pelo root server e perguntar onde está o dominio tabnews.com.br;
    - Esse TLD só retorna onde está o Authoritative Server,o que tem as informações, registros do seu domínio tabnews.com.br
    - Dentro desse pacotinho de informações está o ip do servidor da sua aplicação;
    - Ele devolve esse ip para seu computador usar na requisição para o servidor final;
  - Para agilizar as requisições futuras, pode ser utilizado cache em cada um desses servidores que foram consultados;

# Registrando um domínio próprio

- Para registrar um dominio você tem que ir atrás de um registor
  (registrador, como registro.br, uolhost, hostgator, locaweb...);
- É como se eles fossem vivo, claro, tim... e você pode migrar entre
  registradores também;
- NIC.br = Nucleo de Informação e Controle do .br - denominado "Registry" ou "Registro" no schema do Deschamps
  - Ele que tem todos os endereços .br possiveis disponiveis
  - Ele é consultado pelo registro.br na hora que você coloca o dominio que vc quer la
  - E retorna se tá disponivel ou não;
  - Se estiver disponivel, aí o seu registrador (hostgator, locaweb, registro.br)
    passa as info para o Registry e o Registry insere esse registro na lista de TLDs consultaveis apontando para o seu Authoritative Server
- A compra de um dominio passa pela escolha do dominio, cadastro simples, confirmação de usuário e pagamento.
- Uma vez que o domínio foi pago, você precisa de um servidor authoritativo, que vai transmitir isso para o Registor, que
  vai passar isso para o Registry (NIC.br) que vai atualizar o TLD com seu endereço e assim, os novos fluxos vindo do
  root server irão encontrar seu site
- O que faremos agora é
  - Ir no servidor dns da vercel
  - Colocar nosso domínio lá
  - E fazer com que o registro.br aponte para o nosso domínio no server autoritativo da vercel
  - Isso fará com que o Registry pegue essa informação e propague para o TLD, de forma que novas solicitações vindas
    do root server serão lançadas direto para nosso server autoritativo (o server dns da vercel que contem nosso dominio
    cooppplatform.com.br)
- Para fazer com que o server da vercel seja o nosso authoritativo, você vai em domain > add > insere o repo do projeto >
  insere o domínio comprado no registro.br > finaliza
- Inicialmente a vercel irá pensar que temos um server authoritativo externo e estamos tentando fazer com que ela aponte para esse server externo. Mas nós queremos que a vercel seja o authoritativo. Logo, basta ir na aba nameservers > add > aparece os dois endereços de server DNS:
  - ns1.vercel-dns.com
  - ns2.vercel-dns.com
- Esses serão os dois servers dns da vercel que vão responder pelo domínio;
- Vá no registro.br, entre no seu dominio clicando no nome dele > vá para dns > cole os dois endereços de server dns que apontei acima
- Lembrete: o server authoritativo não armazena o site, ele APONTA para o ip do server que armazena o site
- O Nome real do Authoritative Server é Authoritative Nameserver
- para instalar pacote com comando dig: `sudo apt install dnsutils`
- comando: `dig nomedoseudominio.com.br A`
  - Com isso você tá buscando o IP do server que guarda seu site
  - No caso, vai aparecer dois ips na mesma faixa, demonstrando os dois servidores da vercel mais proximos de você para entregarem os dados do site
- Os records são registros no server authoritativo;
  - `dig coopplatform.com.br TXT +trace`
    - Nesse exemplo buscamos o conteudo do record TXT e pedimos para mostrar todo o caminho tomado até chegar no server authoritativo

# McDonald's Theory

- Sugira algo bizarro apenas para quebrar o gelo e subir sugestões do pessoal;
- E aos poucos será definido:
  - O que fazer => área para notícias e conteúdos agro para o público;
  - O que proteger => relevância de conteúdos para o público;
  - O que repetir para as novas pessoas que chegarem dentro do seu projeto => produza conteúdo relevante que você terá espaço para fazer propaganda do seu produto!!

# Não confie em 100% uptime

- Comprometimento de 99,9% de uptime;
- Equivale a 44min. por mês;
- Isso é combinado no SLA nos termos de serviço quando vc acessa a plataforma;
- Quanto mais complexo o serviço, mais difícil determinar o que é "ficar fora" ou "downtime";
- Status pages;
  - Pesquise `termo + status` no google;
  - aws status;
  - vercel status;
- Mas não confie nem no status da página de status;

# PoC x MVP

- Proof of Concept;
- Minimal Valuable Product;
- Primeiro você faz várias provas de conceito baratas (versões de página, por exemplo);
- Depois você vai fazer o MVP para fazer o produto completo mínimo bem feito de forma que o mínimo já seja a solução sem ruídos entre o cliente e sua aplicação;

# Inauguração Milestone 1: Fundação

- Começamos a projetar pelo front-end;

# Overengineering

- Simples != mal-feito;
- Simples bem-feito > complexidade;
- Escolha de linguagem:
  - Maturidade da empresa;
  - Comunidade;
  - Facilidade de encontrar profissionais;
  - Contexto;
- A coisa mais importante para software é quanto
  **modificável** ele é;
- Como pensar no projeto:
  - Linguagem a definir;
    - Linguagem que você domine;
    - Seja fácil de aprender e tenha baixa barreira de entrada;
  - Arquitetura de software:
    - Definida pelo escopo que cada componente & Interação entre eles;
    - Organização de pastas != arquitetura de software;
    - Ex: MVC (1979)
  - Organização de pastas:
    - root
      - pages
        - index.js
      - models
        - user.js
        - content.js
        - password.js
      - infra
        - database.js
        - migrations
        - provisionaing
          - staging
          - production
      - tests

# Testes

- Se um sistema perde funcionalidades em outra versão
  ele sofre uma **REGRESSÃO**;
- O certo é ter um teste para isso, para indicar esse erro
  que regressou o sistema; para você ver como vai resolver;
- Jest:
  - `npm install --save-dev jest@29.6.2`
  - No package: "test": "jest"

## Teste de verdade

- Models é uma pasta com "ferramentas" úteis para uso no sistema;
- Jest só usa commonjs por exemplo;
- Testes podem inclusive servir como uma documentação perfeita integrada
  com o código; ótimo para rever regras de negócio;

### TDD - Test Driven Development

- Especificamos o comportamento esperado pelo teste => codamos depois para ajustar com o resulta

## Tipos de teste

- E2E/ testes de UI (Ponta da pirâmide);
- Integration Test/ services (Corpo da pirâmide);
- Unit Test (Base da pirâmide);
- O conceito de "unidade" pode ser definido pelo próprio eng. soft.;

# Endpoint

- Ponto final: indica onde vamos chegar;
  - Mais comumente usado quando estamos dizendo sobre endereço de API;
- Tudo, grosseiramente, é uma interface;
  - A diferença está em:
    - O quanto é programável;
    - Qual público está direcionada;
- Para ver todo o protocolo no curl: `curl http://localhost:3000/api/status -v`
  - ">": são requisições
  - \*: são mensagens internas
  - "<": são a respostas do server
- Fica a cargo do client pegar a resposta e renderizar algo (chrome, edge...)

# Não é magia, é protocolo!

- Note: o "A" record do server authoritativo guarda o ip do server final que contém o seu site;
- Se eu acessar esse ip, vai abrir o site?
- Veja que ao solicitarmos acesso com `curl https://76.76.21.21 --insecure --verbose` ocorreu:
  - uma resposta com status 308 (redirect)
  - que ordena redirecionar para https://vercel.com/
  - o client (chrome) obedece e redireciona para o site
- O server autoritativo tem vários hosts virtuais com diferentes sites;
- Como então ele renderiza apenas o meu?
  - Ao fazer a req. http via chrome, usando o seu dominio, é setado
    no cabeçalho "header" que o host = coopplatform.com.br, o que faz
    ele saber que precisa renderizar o seu site;
  - Comando equivalente: `curl https://76.76.21.21 --insecure --verbose --header 'Host: coopplatform.com.br'`
- Acesse diretamente: `curl https://coopplatform.com.br --insecure --verbose`

# Versionamento de API

- Dois timos de mudanças:
  - Breaking Changes: mudanças tuas que quebram a API e exigem rescrever; quebra de contratos que ela expunha (renomear
    user_name para username; mudança de tipo de dados de retono);
    - Mudanças que quebram compatibilidade com versões anteriores;
  - Non Breaking Changes: ...
- Estratégias:
  - URI Path Versioning (/v1/api);
  - Header Versionning: client manda cabeçalho customizado na
    request para cliente definir o que quer usar;

# Como escolher BD

- SGBD;
  - MySQL;
  - PostgreSQL\*;
  - MongoDB;
  - Microsoft SQL Server;
- Modo de administrar e gerar querys;
  - ORM - Object Oriented Maping;
  - Não usar ORM\*;
  - pg (node-pg) para conectar e mandar querys;
- Como você vai fazer migrations;
  - node-pg-migrate;
- Tipos:
  - Relacional;
  - Não Relacional;
    - Armazenamento por Documentos;
    - Armazenamento chave/ valor;
  - Bancos Espacial;
- SQL:
  - Criado nos labs da IBM;
  - Virou um padrão adotado por muitos bancos relacionais;
  - Para usos mais básicos é praticamente a hegemonia;

# Por que o Docker dominou o mundo?

- Problema de VMs: muita memória e pouco processamento
  consumido;
- Docker: criou uma interface para tecnologias já existentes
  no Linux, o cGroups (controle de recursos computacionais
  granular) e Namespaces(criação de membrana ao redor de pro-
  cessos para que conversassem somente entre eles);
- No docker: você só agrupa recursos já existentes na máquina
  pra rodar serviços que você quer (um container)
  ![alt text](image.png)
- Ao entrar no terminal de um container você não está entrando
  em nada, apenas está usando um serviço com um PID de namespace
  diferente;

# Subir Banco de Dados (Local)

- Dockerfile: código fonte que define comandos que vão formar
  o ambiente virtual com serviços;
- Dockerfile precisa ser compilado numa IMAGEM (é como um .exe
  que não dá para alterar)
- Para você executar uma iamgem, um CONTAINER é usado. Um container
  é uma imagem rodando;
- A versão mais leve (e recomendada) da imagem do postgres é a
  Alpine;
- COnfigure as variaveis de ambiente;
- `docker compose up`

# Se conectando no banco de dados

- Exit code: codigo que o processo expele ao ser encerrado:
  - 0 : tudo certo
  - Qualquer coisa acima de 0: deu algo errado;
- `docker logs 39809401204d`
- Instalando client: `sudo apt install postgresql-client`
- `psql --host=localhost --username=clone --port=2345`
  - Mas vc precisa abrir a porta do container para se comunicar
    com o banco;
  - Para isso, você precisa especificar o ports lá no compose.yaml
    inserindo o ports: 5432:5432 (hostExterno:portaInternaDoContainer)
- Para baixar e recriar o container: `ocker compose up -d --force-recreate`
  - mesma coisa de fazer `docker compose down` (destruir) --> `docker compose up`
- Caso você mude o .yaml para outra pasta, especifique o caminho
  ao usar os comandos up e dowm: `docker compose -f infra/compose.yaml down`

# Trabalhando com módulo `database.js`

- `npm install pg@8.11.3`
- alteração do script para jest --watchAll (vigia TUDO, até alterações de commits antigos)

# Sobre variáveis de ambiente e "stateless"

- Interface = layout + UI
- Aplicação = regra de negócio -> gera um resultado, um state
- Persistência = persiste/ grava o state 
  - Masterizando: tirar a info do dispositivo e jogar na nuvem (remoto)
- Precisamos desacoplar a camada de persistência, pois, em caso de aumento de acessos, precisamos duplicar, triplicar a camada de app sem duplicar os dados armazenados:
  ![alt text](image-1.png)
- As variáveis de ambiente auxiliam a permitir esse efeito de "desacoplamento"

## Variáveis em ação no código

- Processo pai (terminal) tem o processo filho (server.js)
  - E cada processo tem suas variáveis de ambiente e puxa elas;
- Para ver as variáveis ambiente, entre no bash do linux e digite `env` no terminal
- `POSTGRES_PASSWORD=suaSenha npm run dev` isso faz com que o proximo processo use a var ambiente;
  - para evitar que isso fique gravado no historico, só deixe um espaço:
    - ` POSTGRES_PASSWORD=clone npm run dev`
    - sim, é literalmente dar um espaço antes do comando para evitar gravação no histórico;
- Existe hierarquia de precedência na leitura dos .env
  - isso significa que, se vc vai fazer deploy de uma aplicação, as var ambiente definidas no momento da build no painel terao precedência sobre as var locais de desenvolvimento que vc definiu no seu .env (pelo menos Vercel funciona assim)

# Absolute path

- Criar um jsconfig.json e:
  
  ```
  {
  	"compilerOptions": {
    	"baseUrl": "." //base absoluta = raiz do projeto para frente
  	}
  }
  ```