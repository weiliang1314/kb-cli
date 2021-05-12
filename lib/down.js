//克隆github上项目模板代码
const { promisify } = require('util')
module.exports.clone = async(repo, desc) => {
    const down = promisify(require('download-git-repo'));
    //进度条
    const ora = require('ora')
    const process = ora('下载.......' + repo)
        //转动进度条
    process.start()
    await down(repo, desc)
    process.succeed()
}