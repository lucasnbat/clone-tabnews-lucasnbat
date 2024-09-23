import { Client } from 'pg'

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  })

  console.log('Credenciais POSTGRES:', {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  })

  try {
    await client.connect()
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

export default {
  query: query
}

function getSSLValues() {
  //caso tenha certificado de uma CA...
  if (process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA
    }
  }
  return process.env.NODE_ENV === 'development' ? false : true
}