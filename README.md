# koa_study
koa 源码学习
### v2 : 封装ctx
###### ctx 的 六个属性
> 日你妈, 乱伦么, 关系这么混乱

![1](https://upload-images.jianshu.io/upload_images/6954760-a5c03787a9d2f7e3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###### 关于 this._body

```
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