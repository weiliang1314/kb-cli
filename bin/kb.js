#!/usr/bin/env node

const pro = require('commander');
//打印版本的命令Kb -V
pro.version(require('../package.json').version)
    //打印日志的命令
pro.
command('init <name>')
    //定义描述
    .description('init project')
    //执行部分
    .action(
        /*name => {
                //执行kb init adc 打印出init abc
                console.log('init ' + name)}*/
        require("../lib/init")
    )
pro.
command('refresh')
    //定义描述
    .description('refresh routers')
    //执行部分
    .action(require('../lib/refresh')

    )
pro.
command('serve')
    //定义描述
    .description('serve.....')
    //执行部分
    .action(require('../lib/serve')

    )
pro.parse(process.argv)