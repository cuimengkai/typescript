# IDE Sublime Text来学习TypeScript
1.创建一个名字是typescript文件夹:mkdir typescrit
2.进入文件夹:cd typescript
3.将所创建的typescript转换成包:npm init 
4.引入基于node的typescript依赖库:npm install -g typescript
5.在当前文件夹下面创建一个文件:vim greeter.ts
6.编辑内容
function greeter(persion){
    return "Hello , "+persion;
}
var user = "Trek";
console.info(greeter(user))
7.将ts文件编译成js文件:tsc greeter.ts(会在当前位置生成一个同名的js)

要注意的是尽管有错误，greeter.js文件还是被创建了。 就算你的代码里有错误，你仍然可以使用TypeScript。但在这种情况下，TypeScript会警告你代码可能不会按预期执行。

Sublime TypeScript 语法高亮校验 插件
preference -> Package Control ->Install Package 输入TypeScript 找到 enter

typescript & gulp

使用npm install命令来安装包。 首先全局安装gulp-cli
npm install -g gulp-cli

然后安装typescript，gulp和gulp-typescript到开发依赖项。 Gulp-typescript是TypeScript的一个Gulp插件。

npm install --save-dev typescript gulp gulp-typescript