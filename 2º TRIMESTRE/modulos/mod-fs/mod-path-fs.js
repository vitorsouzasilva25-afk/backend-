
const fs = require('fs')
const path = require('node:path')
const chalk = require('chalk').default




try {
    //  resultado  ler arquivo  caminho pasta  arquivo  condificador
    // const arquivo = fs. readFileSync(path.join(__dirname, "/README.MD"), "utf-8")
    const arquivo = fs.readFileSync(path.resolve(__dirname, "README.MD"), "utf-8")
    console.log(chalk.bgGreenBright('Arquivo Carregado com sucesso'))
    console.log(arquivo)

} catch (error) {
    console.error(chalk.bgRedBright('⚠️ ​Deu ruim...'))
    console.log(error.massage)

}
