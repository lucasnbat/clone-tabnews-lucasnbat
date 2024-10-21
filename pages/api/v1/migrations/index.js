import migrationRunner from 'node-pg-migrate'
import { join } from 'node:path'

export default async function migrations(request, response) {
  const defaultMigrationOptions = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: 'up',
    verbose: true,
    migrationsTable: 'pgmigrations'
  }

  if (request.method === 'GET') {
    const pendingMigrations = await migrationRunner(defaultMigrationOptions)
    response.status(200).json(pendingMigrations)
  }

  if (request.method === 'POST') {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false, // alterando para dryRun false para gerar live run
    })

    if (migratedMigrations.length > 0){
      return response.status(201).json(migratedMigrations)
    }

    return response.status(200).json(migratedMigrations)
  }

  return response.status(405).end()
}

