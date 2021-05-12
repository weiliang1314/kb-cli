#npm 发布
npm config get registry #检测镜像厂库
npm config set registry=http://registry.npmjs.org
echo "登录"
npm login
echo "---------"
npm publish
npm config set registry=http://registry.npm.taobao.org #设置为淘宝镜像
echo "发布完成"
exit

