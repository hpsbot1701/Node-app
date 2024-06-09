const fs = require('fs')
const index = fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
const products = data.products
const express = require('express')
const morgan = require('morgan')
const Server =  express();


//bodyParser
Server.use(express.json())
Server.use(morgan('default'))
//Server.use(express.urlencoded())
Server.use(express.static('public'))

const auth = (req,res,next)=>{
  next()
}
//Create POST /products     C U R D
Server.post('/products',(req,res)=>{
    console.log(req.body)
    products.push(req.body)
    res.status(201).json(req.body)
})
// Read GET /products
Server.get('/products',(req,res)=>{
    res.json(products)
})

// Read GET /products/:id
Server.get('/products/:id',(req,res)=>{
    const id = +req.params.id
      const product = products.find(p=>p.id===id)
    res.json(product)
})

// Update PUT /products/:id
Server.put('/products/:id',(req,res)=>{
    const id = +req.params.id
      const productIndex = products.findIndex(p=>p.id===id)
      products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json()
})

// Update PATCH /products/:id
Server.patch('/products/:id',(req,res)=>{
    const id = +req.params.id
      const productIndex = products.findIndex(p=>p.id===id)
      const product = products[productIndex]
      products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()
})

// Delete DELETE /products/:id
Server.delete('/products/:id',(req,res)=>{
    const id = +req.params.id
      const productIndex = products.findIndex(p=>p.id===id)
      const product = products[productIndex]
      products.splice(productIndex,1)
    res.status(201).json(product)
})

Server.get('/demo',(req,res)=>{
     
    //  res.sendStatus(404);
      //res.json(products)
   // res.status(201).send('<h1>hello</h1>')
     //res.sendFile('/Users/hpsin/OneDrive/Desktop/node-app/index.html')
})
Server.listen(8080,()=>{
    console.log("Server Started")
})
