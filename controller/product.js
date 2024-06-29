const fs = require('fs')
// const index = fs.readFileSync('index.html','utf-8')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products = data.products

const model = require('../model/product')
const Product = model.Product

//create
exports.createProduct = async(req,res)=>{
    // console.log(req.body)
    // products.push(req.body)

    const product = new Product(req.body)
    const newProduct = await product.save()
   
      res.status(201).json(newProduct)


    
   
}

exports.getAllProducts = async(req,res)=>{
  const products = await Product.find()
    res.json(products)
}

exports. getProduct = async(req,res)=>{
    const id = req.params.id
    const product = await Product.findById(id)
    res.json(product)
}
exports. replaceProduct = async(req,res)=>{
    const id = req.params.id
    const doc = await Product.findOneAndReplace({_id:id},req.body, {new:true})
    res.status(201).json(doc)
}
exports.updateProduct = async(req,res)=>{
    const id = req.params.id
    const doc = await Product.findOneAndUpdate({_id:id},req.body, {new:true})
    res.status(201).json(doc)
  
}
exports.deleteProduct = async(req,res)=>{
    const id = req.params.id
    const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc)
}