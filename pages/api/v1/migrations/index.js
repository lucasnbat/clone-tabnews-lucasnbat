import migrationRunner from 'node-pg-migrate'
import { join } from 'node:path'
import database from 'infra/database.js'

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient()
  const defaultMigrationOptions = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: 'up',
    verbose: true,
    migrationsTable: 'pgmigrations'
  }

  if (request.method === 'GET') {
    const pendingMigrations = await migrationRunner(defaultMigrationOptions)
    await dbClient.end()
    response.status(200).json(pendingMigrations)
  }

  if (request.method === 'POST') {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false, // alterando para dryRun false para gerar live run
    })

    await dbClient.end()

    if (migratedMigrations.length > 0){
      return response.status(201).json(migratedMigrations)
    }

    return response.status(200).json(migratedMigrations)
  }

  return response.status(405).end()
}

