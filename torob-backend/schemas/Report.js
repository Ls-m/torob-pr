var mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
    id:Number,
    userId:Number,
    productId:Number,
    shopId:Number,
    content:String,

});

const report = mongoose.model("Report", reportSchema);

module.exports = mongoose.model('Report');