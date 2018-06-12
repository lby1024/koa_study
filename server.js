const Coa = require('./application.js')

const app = new Coa()
app.use(async(ctx) => {
    ctx.body = 'ctx的简单封装'+ctx.url
})

app.listen(2333, ()=>{
    console.log('监听端口号, 2333')
})