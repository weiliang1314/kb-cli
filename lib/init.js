//引入node 异步方法promise
const { promisify } = require('util');
const figlet = promisify(require("figlet"))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const { clone } = require('./down');
const open = require('open')

const spawn = async(...args) => {
    //下载异步流程控制，只有执行完才能向下走,自动下载依赖
    const { spawn } = require('child_process'); //子进程
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
            //执行结束时
        proc.on('close', () => {
            resolve()
        })
    })
}
module.exports = async name => {
    //打印欢迎界面
    //清空
    clear()
    const data = await figlet("Hello,welcome")
    log(data)
    log('创建新项目：' + name)
        //克隆github上的项目模板
    await clone('github:su37josephxia/vue-template', name)
        //下载控制
        //await spawn('cnpm', ['install'], { cwd: `./` + name })
    await spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], { cwd: `./${name}` });


    log(`安装完成
    
        ===========
        cd ${name}
        npm run serve
        =============`)

    //启动项目
    open('http://localhost:8080')
    await spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run', 'serve'], { cwd: `./${name}` });
}