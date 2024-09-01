/* /api/status */

import database from 'infra/database.js'

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as num;")
  console.log(result.rows)

  response
    .status(200)
    .json(
      "O GERA SEBO VAI GIRANDO DEVAGAR ELE CURTE GEEEINHAS ELE GOSTA DE PINGAR",
    );
}

export default status;
