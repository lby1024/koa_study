# koa_study
koa 源码学习
### v2 : 潜层封装http模块
##### 容易出错的地方
###### 忘记导出模块___application.js
```
 module.exports = Application
```
###### 忘记传参数___application.js

```
const server = http.createServer((req, res) => {
    this.callback(req, res)  // <<=== 记得传参数 res, req
})
```
