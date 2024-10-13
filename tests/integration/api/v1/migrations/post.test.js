/* get foi uma convensão do Filipe */

test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: 'POST',
  })

  const responseBody = await response.json()

  console.log(responseBody)

  expect(Array.isArray(responseBody)).toBe(true)
});
