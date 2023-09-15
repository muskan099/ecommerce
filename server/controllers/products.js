import ProductDescription from "../models/productDescription.js";

export const getProducts = async (req,res) => {
    try{
     const productDescription = await ProductDescription.find()

     res.status(200).json(productDescription)
     console.log("productDescription",productDescription)
    }catch(error){
       res.status(404).json({ message : error.message})
    }
    
}

