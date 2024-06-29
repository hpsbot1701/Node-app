const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    category: String,
    price: {type: Number, min: [0,'wrong price']},
    discountPercentage: {type: Number, min: [0,'wrong min discount'], max: [50, 'wrong max discount']},
    rating: {type: Number, min: [0,'wrong min rating'], max: [5, 'wrong max rating']},
    images: [String],
    brand : {type: String, required: true}
  });

  exports.Product = mongoose.model('Product', productSchema);