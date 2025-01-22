# Geral sobre o ambiente do curso

- Ambiente codespsaces já vem com: docker, docker compose, nvm e nodejs;

## Noções sobre nodejs e nvm

- Para listar versões do node: nvm ls

- Para escolher uma: `nvm install + versão` (ex: lts/hydrogen);

- Cada versão tem um apelido de elemento químico, pelo jeito;

- lts: dão suporte por mais tempo; dão compatibilidade entre subversões;

- nvm alias default -> comando que aponta qual a versão do nodejs padrão
  os terminais novos devem ler para inicializar; -`nvm alias default lts/hydrogen`;

- Arquivos com final "rc" significa "run commands" ou comandos de inicalização
  
  - o .nvmrc serve para reocmendarmos a versão de nodejs que nossos visitantes
    de rep vão ser recomendados a usar;

## Nextjs

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

## Estágios dos gits

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

## Git amend e git push

- `git log` --oneline
  
  - logs em uma linha, resumidos

- `git diff` calcula a diferença entre os arquivos salvos nos commits x o que você tem atualmente na sua área de trabalho

- Caracter `\n` basicamente indica o caracter newline, que basicamente
  é um caractere que indica FIM DA LINHA. Se não tem ele, para os computadores, meio que nem linha aquele trecho é.

- Por isso você consegue selecionar um pequeno espaço após cada linha
  de código. É o \n, invibilizado pelo editor para não atrapalhar sua leitura;

- `git commit --amend`: com isso você consegue pegar o arquivo staged e emendar a alteração dele com a do commit anterior;

## Sobre push e outros comandos para git online

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

## Mais deploys

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

## Overengineering

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

## Testes

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
  ![alt text](images/image.png)
- Ao entrar no terminal de um container você não está entrando
  em nada, apenas está usando um serviço com um PID de namespace
  diferente;

# Subir Banco de Dados (Local)

- Dockerfile: código fonte que define comandos que vão formar
  o ambiente virtual com serviços;
- Dockerfile precisa ser compilado numa images/imageM (é como um .exe
  que não dá para alterar)
- Para você executar uma iamgem, um CONTAINER é usado. Um container
  é uma images/imagem rodando;
- A versão mais leve (e recomendada) da images/imagem do postgres é a
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
  ![alt text](images/image-1.png)
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
  
  - Extra: se vc ta mexendo em arquivo já enviado ao git, pode usar um comando como `git commit -am 'mensagem do commit'`

# Endpoint "/status": ISO 8601 + Fuso + MVC + lowerCamelCase

- Fuso horário: 2024-09-08T23:29:51Z
  - Temos ano, mês, dia, seguidos de hora, minuto e segundo;
  - Z é o código de um fuso horário militar, e Z é o código de ZuluTimeZone, um offset de UTC00 se você for verificar no wikipedia;
- Controller pega a requisiçaõ do usuário --> busca a regra de nogócio com a model --> model envia de novo para o controller --> ele manda resposta para view para mostrar ao usuário;
- Testes estritos: testes que não permitem que haja algo a mais retornado no corpo da requisição;
- Query:
  - Sem parâmetros -> não é passível de SQL Injection;
  - Querys com parâmetros fixos -> não é passível de SQL Injection -> porque tá tudo hard coded nela;
  - Querys com parâmetros dinâmicos;
- No POSTGRESQL toda conexão precisa ter uma associação com banco de dados;

# Análise e tratamento de erros

- Ao verificar logs, busque primeiramente alguma informação que é familiar para você, que você conheça.
  
  - Não tente jamais absorver o log inteiro de uma vez;

- Comando git interessante:

- ```b
  git restore .
  ```

- Esse comando permite restaurar o estado de todos os arquivos desde que não commitados ainda, pelo que entendi;

- Para colocar variaveis ambiente na vercel: clique no seu project > settings > environment variables
  
  ![](C:\Users\lucas\AppData\Roaming\marktext\images/images\2024-09-15-14-46-56-images/image.png)

- Há três ambientes principais: Development, Preview e Production. Deixe apenas Production habilitado para essas variáveis;

- Salve;

- Depois disso, vá em project > deployment da vercel, selecione a ultima versão do projeto > vá nos 3 pontinhos > redeploy para forçar a releitura das vars de ambiente;
  
  - Não precisa colocar para aproveitar cache de build anterior, vá para deploy do zero mesmo;

# Databases in Neon

- Algo estranho: como é possível que, para eu me conectar com o Neon, eu precise de uma instância local rodando?
- Seja o que for, o setup de variáveis de produção no host da nuvem (no caso,
  vercel) precisa conter os valores .env que apontam para seu banco de dados
  da nuvem;

# Databases in DigitalOcean

- VPS = Virtual Private Server (ou...VMs na nuvem)
- Como funciona o ssl?
- Todo SO vem com a detecção de chaves que são vindas de Autoridades Certificadoras
  ou CA.
- Um certificado autoassinado pelo provedor de nuvem geralmente pode dar problemas
  porque, jsutamente, ele é *autoassinado*;
- Ou seja, até mesmo um hacker poderia gerar um certificado autoassinado e enviar de
  volta para o servidor, então por padrão as aplicações bloqueiam isso;
- É preciso enviar um certificado assinado por uma CA, para que o nosso SO, reconhecendo
  quais são as assinaturas das CAs, possa validar o certificado como correto e permitir
  a transmissão de informações;
- A DigitalOcean pode, no papel de CA, emitir um certificado que só ela sabe construir
  a assinatura, de forma que apenas o servidor dela possa decifrar e reconstruir as infor-
  mações;
  - Com isso, nem será preciso subir na hierarquia e buscar as CAs públicas;
- O certificado deve ser baixado por conexão segura;
- O conteudo de um certificado geralmente é cifrado em base64 no arquivo aberto no vscode;
- Caso um dia você vá passar um valor para uma var ambiente que carregue um certificado, 
  é preciso que você susbtitua todas as quebras de linha (aquele espaço invisivel no final
  de cada frase) por \n
  - Sim, selecione todos os espaços no final de cada linha com ctrl + D, digite \n no lugar
    e pronto, obtenha sua string;
  - cole na var ambiente com entre aspas
- Lembre que será necessário também colar o certificado na var ambiente lá no ambiente produ-
  ção na vercel;

# Migrations

- Arquivos de migração: são as alterações em si que serão aplicadas;

- Framework de migração: organiza ordem de aplicação das migrações e garante que serão executadas uma única vez;

- Instalar:
  
  ```powershell
  npm install node-pg-migrate@6.2.2
  ```

- Configure o script `"migration:create": "node-pg-migrate create"` no `package.json` e execute:
  
  ```powershell
  npm run migration:create first migration test
  ```

- As migrations não usam o conceito de blob do git, apenas usam a diff entre uma e outra;

- Conceito de:
  
  - Up: quando está executando em ordem crescente;
  - Down: caso houve erro, aqui tem todas os comandos para desfazer as alterações de Up;

- Para que as migrations destinem-se a um diretorio dentro de `infra/`, re-
  configure o script:
  
  ```vim
  "migration:create": "node-pg-migrate -m infra/migrations create"
  ```

- Agora para você executar, configure esse script:
  
  ```vim
  "migration:up": "node-pg-migrate -m infra/migrations up"
  ```

- instale o dotenv e depois ajuste o script:
  
  ```powershell
  npm install dotenv@16.4.4
  ```
  
  ```vim
    "migration:up": "node-pg-migrate -m infra/migrations --envPath .env.development up"
  ```

- Depois configure o DATABASE_URL para o pg-node-migrate no `.env.development`:
  
  ```vim
  DATABASE_URL=postgres://user:password@host:port/database
  ```

## Dry run x Live run

- Dry run executa as migrations "de mentira", apenas para ver qual resultado ocorre;
  
  - Termo originado no corpo de bombeiros dos EUA (Dry run = teste a seco);

- Live run executa as migrations de verdade, pra valer;

- Personalizando comando de test para apenas rodar o que tá em `migrations/`:
  
  ```vim
  npm run test:watch -- migrations
  ```

## Migrations `down`

- Uso:
  
  - Sensível (pode deletar estruturas de BD e DADOS nelas);
  
  - Raro (ou pelo menos você vai fazer o possível para que seja);
    
    - Motivação para escrever cai;
    
    - Motivação para testar cai;

- Se você quiser ver apenas o teste do post: 
  
  ```powershell
  # isso (esse "." antes do "post")meio que é regex que captura o "/"
  npm run test:watch -- migrations.post 
  ```

- Jest roda testes em paralelo.
  
  - Para modificar, adicione `--runInBand` nos scripts:
    
    ```vim
    "test": "jest --runInBand",
    "test:watch": "jest --watchAll --runInBand",
    ```



## Fazendo `Jest` transpilar para esmodules

- O jest não tem suporte ainda a esmodules (`import {} from ''`), e isso causa problemas ao importar o `database.js` para dentro de arquivos de testes;

- O `database.js` é escrito para rodar em um server web que já tem suporte a transpilação para esmodules porque roda usando as maquinarias do Next, que tem suporte para esmodules. O Jest não funciona assim;

- Então precisamos "transferir os poderes" que o Next tem para o Jest;

## Fazendo deploy e rodando migrations em produção

- Instale: `npm install dotenv-expand@11.0.6`
- Isso permite leitura de var ambiente dentro da variavel string de conexão
  com banco de dados;
- Ex:
  ```vim
  POSTGRES_USER=local_clone
  DATABASE_URL=xxxxxxxx://$POSTGRES_USER:xxxxx_xxxxx@xxxxxxxxxx:xxxx/xxxxx_xxxxx
  ```
# Como se destacar

- **Bottom line** (lucro líquido);
  - Qual produto influencia mais o lucro líquido da empresa?
  - Qual é o maior custo da empresa hoje?
- O técnico é *meio- para nutrir o *negócio*;

# Branches no Git: 3 níveis de compreensão

## 1º nível de compreensão (git copia?)

- **Verificar branch**: `git branch`
  - Dá para verificar ao dar `git status` (texto aparece
    falando "on branch main")
- **Criar branch**: `git branch tamanho-do-cabelo`
- **Trocar branch**: `git checkout tamanho-do-cabelo`
  - Tudo que for alterado, deletado, adicionado nessa branch não
    vai afetar a `main`

## 2º nível de compreensão (git usa os blobs!!)

- O que o git faz é só reaproveitar os blobs já existentes...
- Ao criar nova linha do tempo ele aponta para os blobs originais...
  novas alterações criam apenas um novo blob e o git aponta para ele
  (aponta para um novo conjunto de blobs que é igual ao conjunto original
  + o novo blob)
- Ao voltar para linha do tempo original, o que acontece é o git deixar
  de apontar para o conjunto que inclui o novo blob...ele aponta apenas
  para o conjunto que existia antes do commit do novo blob proveniente da
  outra branch
- duplica apenas os commits (vamos dizer... as "anotações" do historico
  e pra onde apontam)

## 3º nível de compreensão (o "mais correto")

- Git não duplica o historico de commits...ele tem um PONTEIRO chamado
  HEAD que aponta para qual é o 'flag' do commit (se é o 'flag' main
  ou o flag tamanho-do-cabelo)
    - Sim, é como se o nome de cada branch fosse uma flag, um rótulo que
      marca cada commit que você faz;
- Os caminhos apontaveis pelo ponteiro HEAD são as heads
  - você ve em `ls .git/refs/heads/`
  - ```vim
      Mode                 LastWriteTime         Length Name
      ----                 -------------         ------ ----
      -a----        22/12/2024     20:19             41 main
      -a----        22/12/2024     20:18             41 tamanho-do-cabelo
    ```
- E se você mandar `cat .git/refs/heads/tamanho-do-cabelo` vai ver que o arquivo
  contem um apontamento para o ultimo commit feito na branch em questão;
- Assim, se você faz `cat .git/HEAD` ela vai apontar para o arquivo no qual
  o ponteiro está mirando no momento e vai mostrar o conteudo dele... ou seja:
  ```vim
  ref: refs/heads/tamanho-do-cabelo
  ```
- Ao dar `git log --stat` você pode ver para onde o ponteiro HEAD está apontando;
- Ao mudar de branch, você apenas muda para onde o ponterio HEAD está apontando..
  ![alt text](images/image-2.png)
- Dica: da para fazer mudança de branch com `git switch tamanho-do-cabelo`

# Fazendo deploy em Homologação (Staging)

- Vercel:
  - `push` para branch main -> deploy em ambiente de produção
  - `push` para outra branch -> deploy em ambiente de homologação
- Vercel verifica:
  - Variaveis cadastradas na categoria production: ambiente produção usa
  - Variaveis cadastradas na categoria preview: ambiente homologação usa
- Configuração:
  - Vá no Neon e crie uma nova database dentro do banco que você já tem
    (meu caso: coopplatform)
  - Depois copie os parâmetros da nova database (vá para opção Parameters
    Only, permita revelar a senha)
  - Vá na vercel, clique no seu projeto -> settings -> environment variables
    -> selecione apenas 'preview' (ambiente de homologação) e cole tudo dentro
    da seção onde tem campos de nome e valor para variaveis
    - Se certifique de que o nome das var estão corretos
    - Lembre de inserir a porta do banco (nosso caso: POSTGRES_PORT com valor
      5432)
- Como funciona:
  - o repositório local vai ter o ponteiro HEAD apontado para os commits da 
    branch de homologação(ex: fix-migrations-branch)
  - ao dar push nessa branch, ele vai gerar um commit com novo flag/marcador
    (flag fix-migrations-branch) lá no repositório remoto (na images/imagem, origin)
  - e assim vamos ter as branches representadas no repositório remoto também;
  - ![alt text](images/image-3.png)
- Dica: `git checkout -b nome-branch` cria e troca automatico pra nova branch
- Com `git push --set-upstream origin fix-migrations-endpoint` você empurra as 
  alterações dessa branch de teste para a origin, o repositório remoto;
- Ao dar push numa branch que não é main, começa o deploy em ambiente homologação:
  - ![alt text](images/image-4.png)
- Em settings -> deployment protection a vercel disponibiliza proteção contra 
  requisições http feitas a branchs de homologação em clients anonimos (como curl)
    - desative para funcionar com curls do curso a esse projeto
- Dica para ler json melhor no terminal:
  ```vim
  curl -s https://clone-tabnews-lucasnbat-2bq9vrmqv-lucas-nunes-batistas-projects.vercel.app/api/v1/status | python3 -m json.tool
  ```
  - A concatenação com `| python3 -m json.tool` faz o resultado json ir para o 
    formatador de json disponivel no python3 do ambiente ubuntu

# Como não perder código com git

- Deletar branches: `git branch -d tamanho-do-cabelo`;
- Deletar branches (forçar): `git branch -D tamanho-do-cabelo`;
- Se você deletou a branch de um commit precioso, basta pegar o hash
  desse commit a partir do `git log` e depois fazer um `git checkout <hash>`
  - Na verdade, para alguns casos é melhor fazer o `git reflog` e buscar 
    hash do commit (buscando a mensagem original do commit nos registros)
- Isso fará com que o ponteiro HEAD se desloque para o commit
  - A diferença é que agora o ponteiro aponta apenas para o commit livre-
    mente (hash) ao inves de apontar para a branch e o commit (fix-migrations-
    endpoint + hash);
  - Esse commit está "pending" porque ele não está associado a branch nenhuma.
  - Ou seja, **ao deletar a branch você não deleta commit**, apenas o ponteiro
    da branch. O commit fica livre "vagando" e é descartado pelo garbage colec-
    tor do git após 14 dias (tempo que pode ser alterado);
- Para "ressuscitar" a branch você faz, depois do `git checkout <hash>`, um
  `git checkout -b fix-migrations-endpoint`;
  - Isso criará um ponteiro de branch comm esse nome novamente e o associará ao
    commit;
- Se você não quer fazer o git checkout para hash e depois associar, pode fazer
  com um único comando: `git checkout -b fix-migrations-endpoint <hash>`
- Assim você criará uma branch nova com base no commit que tem o hash passado;

# Formas de merge

- Fast foward e 3-Way Merge
- Mesclar é só fazer o ponteiro da main apontar para o commit que
  você fez na branch de teste para arrumar o programa;
- Existe branch alvo (target) e a branch fonte (source):
  - Basicamente você precisa ir para a branch que vai ficar com todas
    as alterações e commits (no caso, main) e fazer 
    `git merge fix-migrations-endpoint`
  - Com isso, você está trazendo para a branch alvo (main) os commits
    da branch source (fix-migrations-endpoint)
- O que o git faz é mover o HEAD para a main e depois fazer o ponteiro
  da main apontar para o commit da fix-migrations-enpoint
- ```vim
    commit a6c180fd59ac066033bac8922692fd6eb9b1bb6b (HEAD -> main, origin/fix-migrations-endpoint, fix-migrations-endpoint)
  ```
- Dando olhada ali acima, pode ver que agora o HEAD aponta para a main (e
  ela está apontando para esse commit), o repositório remoto com sua branch fix-migrations-endpoint tambem aponta para esse commit, e o repositorio
  local fix-migrations-endpoint tambem aponta para esse commit;
- `git log --graph` mostra os ramos graficamente;
- **Esse "atualizar a referência" é o modo fast-foward**
- Dica: forma nova de conseguir formatar json via terminal 
  ```vim
  curl -s https://coopplatform.com.br/api/v1/status | jq

  // se você quiser vigiar a resposta de 2s em 2s:
  watch 'curl -s https://coopplatform.com.br/api/v1/status | jq'

  // se quiser determinar que vai att. de 1s em 1s:
  watch -n 1 'curl -s https://coopplatform.com.br/api/v1/status | jq'
  ```

# Nascimento e "Morte" do Movimento Ágil

- Waterfall
  - LEvantamento de requisitos: RF e RNFs do sistema, o que ele se propunha
    a resolver;
  - Projeto: Diagramas de casos de uso, UML, bancos de dados a usar, paradig-
    mas...
  - Implementação: Desenvolvedores pegavam a documentação do projeto, desenvol-
    viam tudo e entregavam compilado em um artefato;
  - Validação: Um time pegava o artefato com os programas e validava do inicio
    ao fim, caso tudo estivesse OK, era marcado como válido;
  - Implantação: time de Operações fazia todos os ajustes necessários para ins-
    talação do produto de software na infraestrutura da empresa (servers de 
    produção);
- Tudo entregue de uma vez só; linear e sequencial; 
- Programadores ficavam limitados no meio apenas na implementação;
- Manifesto ágil:
  - Individuos e interações mais que processos e ferramentas;
  - Software entregue mais que documentação;
  - Colaboração com clientes mais que negociação de contratos;
  - Resposta a mudança mais que seguir o plano;
- 