/* /api/status */

import database from 'infra/database.js'

async function status(request, response) {
  //toISOString = Converte para aquele formato iso 
  const updatedAt = new Date().toISOString()

  // linha abaixo retorna a versão limpa do banco (16.4)
  const databaseVersionResult =
    await database.query("SHOW server_version;")
  const databaseVersionValue =
    databaseVersionResult.rows[0].server_version

  const databaseMaxConntectionsResult =
    await database.query("SHOW max_connections;")
  const databaseMaxConnectionsValue =
    databaseMaxConntectionsResult.rows[0].max_connections

  const databaseName = process.env.POSTGRES_DB
  // busca a conexão associada ao clone_local e printa um array contendo, para cada espaço, uma conexão ativa
  const databaseOpenedConnectionsResult =
    await database.query({
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname= $1;",
      values: [databaseName],
    })
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count

  response.status(200).json({
    // snake_case = padrão de variaveis para retornos de api
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      }
    }
  })
}

export default status;
