// const lib = require('./lib.js')
// const express = require('express')

// const server = express();
// server.listen(8080)
// console.log("hello world")
// console.log("Working Here !")

// const http = require("http");
// const lib = require('./lib.js')
// const express = require('express')

const express = require('express')
const morgan = require('morgan')
const Server =  express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')


//bodyParser
Server.use(express.json())
Server.use(morgan('default'))
//Server.use(express.urlencoded())
Server.use(express.static('public'))
Server.use('/products', productRouter.router);
Server.use('/users', userRouter.router);

// Server.use((req,res,next)=>{
//     console.log(req.get('User-Agent'), req.method, req.ip, req.hostname)
//     next()
// })

const auth = (req,res,next)=>{
    // console.log(req.query)
    // if(req.body.password=='123'){
    //     next()
    // }else{
    //    res.sendStatus(401);
    // }
    next()
}

//MVC - Modal View Controller






Server.listen(8080,()=>{
    console.log("Server Started")
})




// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url.startsWith('/product')) 
//     {
//     const id = req.url.split('/')[2]
//     const product = products.find(p=>p.id===(+id))
//     console.log(product)
//     res.setHeader("Content-Type", "text/html")
//         let modifiedIndex = index.replace("**Title**",product.title)
//         .replace("**price**",product.price)
//         .replace("**rating**",product.rating)
//         res.end(modifiedIndex)
//         return;
    
//   }

//  switch(req.url){
//     case '/':
//         res.setHeader("Content-Type", "text/html");
//         res.end(index)
//         break;
//     case '/api':
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(data));  
//         break;

    
//     case '/product':
//         res.setHeader("Content-Type", "text/html")
//         let modifiedIndex = index.replace("**Title**",product.title)
//         .replace("**price**",product.price)
//         .replace("**rating**",product.rating)
//         res.end(modifiedIndex)
//         break;

//     default:
//         res.writeHead(404);
//         res.end();     
//  }

//   console.log("server started");
// //   res.setHeader("Dummy", "DummyValue");
// //   res.setHeader("Content-Type", "text/html");
// //   res.setHeader("Content-Type", "application/json");
// //   res.end(data);
// });

// server.listen(8080);