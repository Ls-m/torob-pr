var mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    id:Number,
    name:String,
    parentId:Number,

});

const category = mongoose.model("Category", categorySchema);

module.exports = mongoose.model('Category');