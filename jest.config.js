const dotenv = require("dotenv")

dotenv.config({
  path: ".env.development" // carregar variáveis desse arquivo
})

const nextJest = require("next/jest")

const createJestConfig = nextJest({
  // expõe a raiz do projeto -- foi importante para permitir leitura de .env pelo jest  
  dir: ".",
})
const jestConfig = createJestConfig({
  // redeclarando mantem possibilidade de continuar importando os packages instalados
  moduleDirectories: ["node_modules", "<rootDir>"]
})

module.exports = jestConfig;