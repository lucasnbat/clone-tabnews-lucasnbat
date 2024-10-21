import database from 'infra/database'

beforeAll(cleanDatabase)

async function cleanDatabase(){
  await database.query("drop schema public cascade; create schema public;")
}

test("POST to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: 'POST',
  })
  expect(response1.status).toBe(201)

  const response1Body = await response1.json()
  console.log(response1Body)

  expect(Array.isArray(response1Body)).toBe(true)
  expect(response1Body.length).toBeGreaterThan(0)
});

test("Second POST to /api/v1/migrations should return an 0 length array", async () => {
  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: 'POST',
  })
  expect(response2.status).toBe(200)

  const response2Body = await response2.json()
  console.log(response2Body)

  expect(Array.isArray(response2Body)).toBe(true)
  expect(response2Body.length).toBe(0)
});
