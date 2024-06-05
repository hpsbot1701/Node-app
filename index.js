// const lib = require('./lib.js')
// const express = require('express')

// const server = express();
// server.listen(8080)
// console.log("hello world")
// console.log("Working Here !")

const http = require("http");
const lib = require('./lib.js')
const express = require('express')

const fs = require('fs')

const index = fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products = data.products


const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url.startsWith('/product')) 
    {
    const id = req.url.split('/')[2]
    const product = products.find(p=>p.id===(+id))
    console.log(product)
    res.setHeader("Content-Type", "text/html")
        let modifiedIndex = index.replace("**Title**",product.title)
        .replace("**price**",product.price)
        .replace("**rating**",product.rating)
        res.end(modifiedIndex)
        return;
    
  }

 switch(req.url){
    case '/':
        res.setHeader("Content-Type", "text/html");
        res.end(index)
        break;
    case '/api':
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));  
        break;

    
    case '/product':
        res.setHeader("Content-Type", "text/html")
        let modifiedIndex = index.replace("**Title**",product.title)
        .replace("**price**",product.price)
        .replace("**rating**",product.rating)
        res.end(modifiedIndex)
        break;

    default:
        res.writeHead(404);
        res.end();     
 }

  console.log("server started");
//   res.setHeader("Dummy", "DummyValue");
//   res.setHeader("Content-Type", "text/html");
//   res.setHeader("Content-Type", "application/json");
//   res.end(data);
});

server.listen(8080);