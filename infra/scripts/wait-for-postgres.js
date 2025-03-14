const { exec } = require('node:child_process')

function checkPostgres() {
  // executa comando de terminal e depois chama a função
  // --host localhost especifica que está esperando o localhost 
  // sinalizar via TCP/IP que o banco está pronto
  exec('docker exec postgres-dev pg_isready --host localhost', handleReturn)

  // função callback que será chamada apos executar o comando terminal
  // o exec vai injetar aqui o error e o stdout dele...
  function handleReturn(error, stdout) {
    // pesquisa a string accepting connections, se não achar, dá -1
    if (stdout.search("accepting connections") === -1){
      // escreve o ponto (efeito de reticnecia infinita)
      process.stdout.write(".") 

      // não econtrou? tenta de novo...(recursividade)
      // caso encontrar, aí nem no if vai entrar e vai seguir o programa
      checkPostgres() 
      return; // para script
    }

    console.log("\n🟢 Postgres está pronto e aceitando conexões\n")
  }
}
process.stdout.write('\n\n🔴 Aguardando Postgres aceitar conexões...')
checkPostgres()