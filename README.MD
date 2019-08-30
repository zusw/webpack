## webpack 模块打包工具
- npx webpack index.js 
> 生成打包翻译后的可被浏览器识别的main.js，ES语句识别

- js规范：ES moudule，CommonJS, CMD, AMD 都可编译
```js
// CommonJS 模块引入和使用
const Header = require('./header.js');
new Header();
// 模块导出
module.exports = Header;
```

- npx webpack -v 查找当前项目node_modules里webpack版本
- npm info webpack 查找webpack历史版本
- npx webpack --config webpackconfig.js 指定webpack打包的配置文件为webpackconfig.js，默认为webpack.config.js;
- entry: './src/index.js', === entry: { "main": "./src/index.js" },
- mode: 'production', 打包出的文件是压缩过的；'development'值打包的文件不压缩；在development模式下，sourceMap默认已配置，可以通过 devtool: 'none' 关闭
- sourceMap 是一个映射关系，找到出错的文件及行数，而不是打包后出错的文件及行数。使用devtool: 'source-map',会在打包文件中生成一个bundle.js.map的文件，使用参数 'inline-source-map'会将这个.map文件转为base64的字符串，放入输出文件的底部。添加 cheap- 则只管提示业务代码错误，添加 module 则提示范围包括 node_modules，eval 则通过 eval 方式对代码进行打包。
- "bundle": "webpack", 打包命令 npm run bundle，打包完成后跳出命令行
- "watch": "webpack --watch" 打包完成后自动监听代码变化重新打包，不跳出命令行
- "server": "node server.js" 自己写一个 server.js, 配置得当可以达到webpack-dev-server 一样的效果；publicPath 不是必须的
- "start": "webpack-dev-server", 配合 devServer 的配置，可以自动启动服务器，打开和监听代码变化
- div:nth-of-type(odd) { } 选择偶数行div
```js
// 热更新某个模块
if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'));
    number();
  })
}
```
- babel-loader webpack与babel做通信的桥梁，并不会做ES6转ES5语法翻译;@babel/preset-env才是做翻译的模块，配置options: { presets: ['@babel/preset-env]}来使之生效；也可以配置.babelrc。转ES5后还不够，有些函数或方法（如promise、map等）在低版本浏览器中没有，故而要借助@babel/polyfill，只需在使用的地方引入即可

- Tree Shaking 摇树，去除文件中多余的部分。只支持 ES Module 中import语法引入的内容；
- package.json sideEffects: ["@babel/polyfill"], 把不想被 Tree Shaking 摇掉的依赖放入数组中；