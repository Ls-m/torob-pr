var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Shop = require('./schemas/Shop');
const Product = require('./schemas/Product');

router.post('',async function (req, res) {
    const name = req.body.name;
    const website = req.body.website;
    const productId = req.body.productId;
    const productIds = [req.body.productId];

    const allProducts = await Product.find({});
    const product = allProducts.find((product) => product.id === parseInt(productId));
    if(!product) return res.status(404).send("product not found!");
    
    const allShops= await Shop.find({});
    

    var newShop = {
        id:allShops.length+1,
        name:name,
        productIds:productIds,
        website:website,
    }
    const saveRes = await new Shop(newShop).save(); 
    res.status(200).send({message:"Shop Saved!"});
   
});
router.get('',async function (req, res) {
    const allShops = await Shop.find({});
    res.status(200).send({
        size:allShops.length,
        
        shops:allShops.map((shop)=>({
            id:shop.id,
            name:shop.name,
            productIds:shop.productIds,
            website:shop.website,
            
        })),

        code:200,
        message:"All shops received successfully!",
    });
    
  
 });

 router.put('/:id',async function (req, res) {


    const id = req.params.id;
    const allShops = await Shop.find({});
    const shop =  allShops.find((shop) => shop.id === parseInt(id));
    if(!shop) return res.status(404).send("shop not found!")

    const productId = req.body.productId;
    
    shop.productIds.push(productId);
    await Shop.updateOne({ _id: shop._id }, shop);
    return res.status(200).send(
      {
        shop,
        message:"shop changed successfully!",
      }
    );

});
router.delete('/:id',async function (req, res) {
    
    const id = req.params.id;
    const allShops= await Shop.find({});
    const shop =  allShops.find((shop) => shop.id === parseInt(id));
    if(!shop) return res.status(404).send("shop not found!")
    
    await  Shop.findOneAndRemove({_id:shop._id});
    return res.status(200).send(
      {
        message:"shop deleted successfully!",
      }
    );

});
module.exports = router