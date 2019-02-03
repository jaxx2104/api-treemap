const chalk = require('chalk')
const figlet = require('figlet')
const program = require('commander')

program
  .version('0.1.0')
  .option('-u, --url <url>', 'GitHub API url', 'https://api.github.com/')
  .option('-r, --repo <account/repo>', 'GitHub Repository')
  .option('-t, --token <token>', 'GitHub Personal Access Token')
  .option('--max <n>', 'GitHub Max PullRequests')
  .option('--figlet <font>', 'figlet mode')
  .parse(process.argv)

if (!program.repo || !program.token) {
  console.log(chalk.white.bgRed.bold('[error] required --repo --token '))
  program.outputHelp()
  process.exit(1)
}

const font = program.figlet || 'Ghost'
const src = program.src || './src/**/*.+(js|ts)'

const files = glob.sync(src)
console.log(
  chalk.red(
    figlet.textSync('api-map', {
      font,
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  )
)
console.log(files)
