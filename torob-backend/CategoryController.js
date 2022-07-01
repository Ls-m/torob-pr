var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Category = require('./schemas/Category')

router.post('',async function (req, res) {
   const allCategories = await Category.find({});

   const name = req.body.name;
   const parentId = req.body.parentId;
   
   
   var newCategory = {
        id:allCategories.length+1,
        name:name,
        parentId:parseInt(parentId),
    }
    const saveRes = await new Category(newCategory).save(); 
    res.status(200).send({
        newCategory,
        message:"Category Saved!"
    });
   
 
});
router.get('',async function (req, res) {
    const allCategories = await Category.find({});
    res.status(200).send({
        size:allCategories.length,
        
        categories:allCategories.map((category)=>({
            id:category.id,
            name:category.name,
            parentId:category.parentId,
            
        })),

        code:200,
        message:"All categories received successfully!",
    });
    
  
 });


router.delete('/:id',async function (req, res) {
    
    const id = req.params.id;
    const allCategories= await Category.find({});
    const category =  allCategories.find((category) => category.id === parseInt(id));
    if(!category) return res.status(404).send("category not found!")
    
    await  Category.findOneAndRemove({_id:category._id});
    return res.status(200).send(
      {
        message:"category deleted successfully!",
      }
    );

});
module.exports = router