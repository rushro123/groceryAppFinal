import Shop from "../model/shop.js";

export const addItem=async (req,res)=>{
    try {
        const {title,price,category,img}=req.body
        
        const existingItem=new Shop.findOne({title});
        if(existingItem){
            return res.status(201).json({messege:"item allready existed"})
        }
        const Item=new Shop({title,price,category,img})
        await Item.save()
        res.status(201).json({messege:"item added succesfully",item:Item})
    } catch (error) {
        res.status(401).json({messege:"failed to add the item",error:error.message})
    }
}
export const getFiltertems=async (req,res)=>{
    try {
        const {category}={$in:req.params.filter}
        const item=await Cart.find(category)
        res.json(item)
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching posts', 
            error: error.message 
          }) 
    }
}
export const getAllItems=async (req,res)=>{
    try {
        
        const item=await Shop.find()
        res.json(item)
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching posts', 
            error: error.message 
          }) 
    }
}