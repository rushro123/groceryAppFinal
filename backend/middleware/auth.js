import jwt from "jsonwebtoken"

const auth=(req,res,next)=>{
    try {
        const token=req.cookies?.token;
        if(!token){
            return res.status(401).json({messege:"no token,authorization denied"})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user=decode
        next()
    } catch (error) {
        res.json({messege:"token not valid"})
    }
}
export default auth