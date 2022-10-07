const Product = require("../models/product")


const AddProduct = async(req,res)=>{
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
        
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}


module.exports = {AddProduct}