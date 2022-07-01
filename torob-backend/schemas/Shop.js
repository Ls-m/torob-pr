var mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
    id:Number,
    name:String,
    productIds:[Number],
    website:String,
});

const shop = mongoose.model("Shop", shopSchema);

module.exports = mongoose.model('Shop');