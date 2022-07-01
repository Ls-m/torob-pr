var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Report = require('./schemas/Report');
const User = require('./schemas/User');
const Product = require('./schemas/Product');
const Shop = require('./schemas/Shop');


router.post('',async function (req, res) {
   const allReports = await Report.find({});

   const userId = req.body.userId;
   const productId = req.body.productId;
   const shopId = req.body.shopId;
   const content = req.body.content;
   
   const allUsers = await User.find({});
   const user = allUsers.find((user) => user.id === parseInt(userId));
   if(!user) return res.status(404).send("User not found!");

   const allProducts = await Product.find({});
   const product = allProducts.find((product) => product.id === parseInt(productId));
   if(!product) return res.status(404).send("Product not found!");

   const allShops = await Shop.find({});
   const shop = allShops.find((shop) => shop.id === parseInt(shopId));
   if(!shop) return res.status(404).send("Shop not found!");


   var newReport = {
    id:allShops.length+1,
    userId:userId,
    productId:productId,
    shopId:shopId,
    content:content,
}
const saveRes = await new Report(newReport).save(); 
res.status(200).send({
    newReport,
    message:"Report Saved!"
});
   
 
});
router.get('',async function (req, res) {
    const allReports = await Report.find({});
    res.status(200).send({
        size:allReports.length,
        
        reports:allReports.map((report)=>({
            id:report.id,
            userId:report.userId,
            productId:report.productId,
            shopId:report.shopId,
            content:report.content,
            
        })),

        code:200,
        message:"All reports received successfully!",
    });
    
  
 });

router.delete('/:id',async function (req, res) {
    
    const id = req.params.id;
    const allReports= await Report.find({});
    const report =  allReports.find((report) => report.id === parseInt(id));
    if(!report) return res.status(404).send("report not found!")
    
    await  Report.findOneAndRemove({_id:report._id});
    return res.status(200).send(
      {
        message:"report deleted successfully!",
      }
    );

});
module.exports = router