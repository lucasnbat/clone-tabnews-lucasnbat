import { Client } from 'pg'

// funções para realizar querys
async function query(queryObject) {
  let client
  try {
    client = await getNewClient()
    const result = await client.query(queryObject)
    return result
  } catch (error) {
    console.error(error)
    throw error
  } finally {
    // usado para, idependente do que acontecer 
    // (cair no try ou no catch), finalizar a conexão
    await client.end()
  }
}

// criação de client
async function getNewClient() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  })

  await client.connect()

  return client;
}

export default {
  query,
  getNewClient,
}

// função para lidar com parametro ssl do client
// se for ambiente de prod, ssl: true
function getSSLValues() {
  //caso tenha certificado de uma CA...
  if (process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA
    }
  }

  // console.log('NODE_ENV: ', process.env.NODE_ENV)
  return process.env.NODE_ENV === 'production' ? true : false
}