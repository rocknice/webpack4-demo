# webpack4-demo
一个帮助团队成员更好熟悉webpack4的demo

========开发阶段=======
1.开启多核压缩
2.监控你的面板 speed-measure-webpack-plugin
3.开启通知面板 
4.开启打包进度
5.开发面板更清晰
6.开启窗口的标题
7.窗口打印更直接 （可选）

========上线阶段=======
1.es6 不需要编译 
set map es9 
https://cdn.polyfill.io/v2/polyfill.min.js?features=Map,Set
2.前端缓存小负载 webapp
  a.js -> a.xxx1.js
  a.xxx.js -> 代码 后台每次计算出当前包
3.真正的loading
4.单页 问题 多页转单页 webapp 性能 请求的数量 runtime
5.分析打包结果 CI 
http://webpack.github.io/analyse/#chunks
webpack-bundle-analyzer
https://alexkuz.github.io/webpack-chart/
6.test exculde include 非常重要 很快
7.压缩JS CSS happypack ts-loader optimize-css-assets-webpack-plugin
8.devtool eval
