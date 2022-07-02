var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Product = require('./schemas/Product')

router.post('',async function (req, res) {
   const allProducts = await Product.find({});
   const name = req.body.name;
   const img = req.body.img;
   const categoryId = req.body.categoryId;
   const shopId = req.body.shopId;
   const price = req.body.price;
   
   var newProduct = {
    id:allProducts.length+1,
    name:name,
    img:img,
    categoryId:categoryId,
    shopPrice:[{
        shopId:shopId,
        price:price,
    }],
}
const saveRes = await new Product(newProduct).save(); 
res.status(200).send({
    newProduct,
    message:"Product Saved!"
});
   
 
});
router.get('',async function (req, res) {
    const allProducts = await Product.find({});
    res.status(200).send({
        size:allProducts.length,
        
        products:allProducts.map((product)=>({
            id:product.id,
            name:product.name,
            img:product.img,
            categoryId:product.categoryId,
            shopPrice:product.shopPrice.map((shopPrice)=>({
                shopId:shopPrice.shopId,
                price:shopPrice.price,
            }))
            
        })),

        code:200,
        message:"All products received successfully!",
    });
    
  
 });

router.put('/:id',async function (req, res) {


    const id = req.params.id;
    const allProducts = await Product.find({});
    const product =  allProducts.find((product) => product.id === parseInt(id));
    if(!product) return res.status(404).send("product not found!")
    const shopId = req.body.shopId;
    const price = req.body.price;
    const newShopPrice = {
        shopId:shopId,
        price:price,

    }
    
    product.shopPrice.push(newShopPrice);
    await Product.updateOne({ _id: product._id }, product);
    return res.status(200).send(
      {
        product,
        message:"product changed successfully!",
      }
    );

});
router.delete('/:id',async function (req, res) {
    
    const id = req.params.id;
    const allProducts= await Product.find({});
    const product =  allProducts.find((product) => product.id === parseInt(id));
    if(!product) return res.status(404).send("product not found!")
    
    await  Product.findOneAndRemove({_id:product._id});
    return res.status(200).send(
      {
        message:"product deleted successfully!",
      }
    );

});
module.exports = router