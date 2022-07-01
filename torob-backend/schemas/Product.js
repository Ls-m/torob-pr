var mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id:Number,
    name:String,
    img:String,
    categoryId:String,
    shopPrice:[{
        shopId:String,
        price:String,
    }],

});

const product = mongoose.model("Product", productSchema);

module.exports = mongoose.model('Product');