const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('fuck the fucking world')       // 显示在网页上的内容
})

server.listen(2333, ()=>{
    console.log('监听2333端口')
})