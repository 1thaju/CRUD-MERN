const mongoose = require('mongoose');

const productSchema = mongoose.Schema (
    {
        name: {
            type:String,
            required:[true,"please enter your name"]
        },
        quantity: {
            type:Number,
            required:[true]
        },
        price: {
            type:Number,
            required:[true]
        },
        Image: {
            type:String,
            required:[false]
        }
    },
    {
        timestamps : true
    }
)

const Product = mongoose.model('Product' , productSchema);
module.exports = Product;