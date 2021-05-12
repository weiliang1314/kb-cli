//代码伺服监测,自动监测views中变化，自己启动
const spawn = async(...args) => {
    //下载异步流程控制，只有执行完才能向下走,自动下载依赖
    const { spawn } = require('child_process'); //子进程

    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)

    return proc
}
module.exports = async() => {
    const watch = require('watch')
    let process;
    let isref = false
    watch.watchTree('./src', async(f) => {
        console.log("..", f)
        if (!isref) {
            isref = true;
            process && process.kill()
            await require('./refresh')
            setTimeout(() => {
                isref = false
            }, 5000)
            process = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run', 'serve'], );
        }
    })
}