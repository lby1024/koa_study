const Coa = require('./application.js')

const app = new Coa()
app.use((req, res) => {
    res.writeHead(200)
    res.end('fuck the fucking world')
})

app.listen(2333, ()=>{
    console.log('监听端口号, 2333')
})