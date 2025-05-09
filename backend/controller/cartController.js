import Cart from '../model/cart.js'

export const addItem=async (req,res)=>{
    try {
        const {title,quantity,price,category,img}=req.body
        const existingItem=await Cart.findOne({title});
        if(existingItem){
            return res.status(401).json({messege:"item allready existed"})
        }
        const Item=new Cart({title,quantity,price,category,img})
        await Item.save()
        res.status(201).json({messege:"item added succesfully",item:Item})
        console.log(res)
    } catch (error) {
        res.status(401).json({messege:"failed to add the item",error:error.message})
    }
}
export const updateItemById=async (req,res)=>{
    try {
        const {quant}=req.body
        const item=await Cart.findOneAndUpdate({_id:req.params.id},{quantity:quant},{new:true})
        console.log(quant)
        if(!item){
           return res.status(401).json({messege:"cant update the post"})
        }
        res.json(item)
    } catch (error) {
        res
        .status(500)
        .json({ message: 'Error updating post', error: error.message })
    }
}
export const getAllItems=async (req,res)=>{
    try {
        
        const item=await Cart.find()
        res.json(item)
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching posts', 
            error: error.message 
          }) 
    }
}
export const getFiltertems=async (req,res)=>{
    try {
        const {category}=req.params
        const item=await Cart.find(category)
        res.json(item)
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching posts', 
            error: error.message 
          }) 
    }
}
export const deleteItemById=async (req,res)=>{
    try {
        const item=await Cart.findByIdAndDelete({_id:req.params.id})
        if(!item){
           return res.status(401).json({messege:"item not found"})
        }
        res.status(201).json(item)
    } catch (error) {
        res
        .status(500)
        .json({ message: 'Error deleting post', error: error.message })
        
    }
}