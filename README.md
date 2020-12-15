2020.12.15-----这是使用vue脚手架生成的一个简单工程模板所带的readme，目前版本是没有使用组件而是所有都堆在App.vue中，主要由三个v-for生成列表构成，所以接下来的更新就会是以组件来构建单页面应用
使用vue-cli打包之后出现页面跑不出来的错误，这是dist目录下的那些css和js文件的引用路径的/前少了一个  .  少了点的加上就行。。。。暂时没找到怎么解决

dev分支使用的是组件开发，在根目录新增了一个vue.config.js  里面增加了一个公共路径为 "./" 重新打包之后就好了
# vue-searchcity

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
