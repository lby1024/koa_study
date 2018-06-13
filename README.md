# koa_study
koa 源码学习
### v4 : 一个简单的洋葱圈
```
function fn1 (next) {
    console.log("---fn1进入---")
    next()
    console.log("---fn1出去---")
}
function fn2 (next) {
    console.log("---fn2进入---")
    next()
    console.log("---fn2出去---")
}
function fn3 (next) {
    console.log("---fn3---")
}

let list = [fn1, fn2, fn3]
let number = 0

function next () {
    number++
    list[number](next)
}

// 开始执行
fn1(next)
```

