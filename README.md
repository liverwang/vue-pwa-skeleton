# vue-cli-demo with PWA and Skeleton

> 基于[Vue-cli](https://github.com/vuejs/vue-cli)建立的示例Demo，在Demo基础上集成了PWA和Skeleton

> PWA基于[workbox-webpack-plugin](https://developers.google.cn/web/tools/workbox/)实现

> Skeleton基于[vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)实现


## 启动步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## workbox
``` javascript
# webpack配置中添加workbox-webpack-plugin
const WorkBoxPlugin = require('workbox-webpack-plugin')

# 通过service-worker.js作为模板生成最终service-worker文件
# 这里可以添加部分自定义代码：workbox设置、缓存名称设置、具体资源缓存策略配置
new WorkBoxPlugin.InjectManifest({
  swSrc: path.resolve(__dirname, '../src/service-worker.js')
})
```
![Image text](https://liverwang.github.io/vue-pwa-skeleton/static/sw.gif)

## sw-register
``` javascript
# 通过sw-register-webpack-plugin插件可以有效完成sw的注册

const SwRegisterWebpackPlugin = require('sw-register-webpack-plugin')
# 动态生成版本号
new SwRegisterWebpackPlugin({
  version: +new Date()
})
```

``` javascript
# 生成的script脚本会注入到HTMLTemplate文件中
window.onload = function () {
  var script = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  script.type = 'text/javascript';
  script.async = true;
  script.src = '/sw-register.js?v=' + Date.now();
  firstScript.parentNode.insertBefore(script, firstScript);
};
```

## skeleton
``` javascript
# 因为使用Skeleton，需要分离样式文件，这里直接选择为true
# 也可以在webpack.skeleton.conf.js文件中，单独设置skeleton的loaders
loaders: utils.cssLoaders({
  sourceMap: sourceMapEnabled,
  extract: true
})
```
![Image text](https://liverwang.github.io/vue-pwa-skeleton/static/skeleton.gif)



## vue-cli

> Module build failed: Error: No parser and no file path given, couldn't infer a parser.

``` bash
# 遇到上面问题，注意重新安装prettier的指定版本
npm install --save-dev prettier@1.12.0
```

