import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    selectFile: String,
    productName: String,
    reviews : {
        type: Number,
        default: 0
    },
    description: String,
    price: Number,
    productDetail: String,
    dimension: String,
    weight: String,
    purity: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const ProductDescription = mongoose.model('productDescription',productSchema)

export default ProductDescription;