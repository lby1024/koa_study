# koa_study
koa 源码学习
### v3 : 封装ctx
###### ctx 的 六个属性
![1](https://upload-images.jianshu.io/upload_images/6954760-5a5c6d203f6c3c5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###### 关于 this._body

```
// get set 里面的this, 指的是对象自己
// 下面代码相当于给response, 添加了一个body属性, 默认值为undefined
let response = {
    get body () {
        return this._body
    },
    set body (value) {
        this._body = value
    }
}
console.log(response.body)      // undefined
response.body = 'fuck'
console.log(response.body)      // 'fuck'
```
