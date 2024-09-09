import { Client } from 'pg'

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  })
  await client.connect()
  try {
    const result = await client.query(queryObject)
    return result
  } catch (error) {
    console.error(error)
  } finally {
    // usado para, idependente do que acontecer 
    // (cair no try ou no catch), finalizar a conexão
    await client.end()
  }

}

export default {
  query: query
}