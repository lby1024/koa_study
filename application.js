const http = require('http')

let request = {                                     // +++++++++++++++++++++++++++
    get url () {                                    // +++++++++++++++++++++++++++
        return this.req.url                         // +++++++++++++++++++++++++++
    }                                               // +++++++++++++++++++++++++++
}                                                   // +++++++++++++++++++++++++++

let response = {                                    // +++++++++++++++++++++++++++
    get body () {                                   // +++++++++++++++++++++++++++
        return this._body                           // +++++++++++++++++++++++++++
    },                                              // +++++++++++++++++++++++++++
    set body (value) {                              // +++++++++++++++++++++++++++    
        this._body = value                          // +++++++++++++++++++++++++++                                  
    }                                               // +++++++++++++++++++++++++++
}

let context = {                                     // +++++++++++++++++++++++++++    
    get url () {                                    // +++++++++++++++++++++++++++    
        return this.request.url                     // +++++++++++++++++++++++++++
    },                                              // +++++++++++++++++++++++++++
    get body () {                                   // +++++++++++++++++++++++++++    
        return this.response.body                   // +++++++++++++++++++++++++++
    },                                              // +++++++++++++++++++++++++++
    set body (val) {                                // +++++++++++++++++++++++++++
        this.response.body = val                    // +++++++++++++++++++++++++++    
    }                                               // +++++++++++++++++++++++++++
}                                                   // +++++++++++++++++++++++++++

class Application {
    constructor () {
        // this.callback = ()=>{}
        this.context = context
        this.request = request
        this.response = response
    }

    use (callback) {
        this.callback = callback
    } 

    listen (...args) {
        const server = http.createServer(async(req, res) => {
            let ctx = this.create_context(req, res)                     // +++++++++++++++++++++++++++++++++++++++
            await this.callback(ctx)                                    // 填写ctx.body++++++++++++++++++++++++++++
            ctx.res.end(ctx.body)                                       // 将ctx.body传输到前端+++++++++++++++++++++
        })                      
        server.listen(...args)
    }

    create_context (req, res) {                                         // +++++++++++++++++++++++++++                        
        let ctx = Object.create(this.context)                           // +++++++++++++++++++++++++++                                        
        ctx.request = Object.create(this.request)                       // +++++++++++++++++++++++++++                                            
        ctx.req = ctx.request.req = req                                 // +++++++++++++++++++++++++++                                
        ctx.response = Object.create(this.response)                     // +++++++++++++++++++++++++++                                            
        ctx.res = ctx.response.res = res                                // +++++++++++++++++++++++++++                                    
        return ctx                                                                  
    }
}

module.exports = Application