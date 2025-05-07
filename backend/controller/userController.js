import User from "../model/users.js"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        console.log(req.body)
        const existingUser = await User.findOne({ $or: [{ email }, { name }] })
        if (existingUser) {
            return res.status(400).json({ messege: "user allready existed" })
        }
        const user = new User({ name, email, password })
        await user.save()
        const token = jwt.sign({
            userId: user._id,
            name: user.name,
            password: user.password
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            }

        )
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            maxAge: 24 * 60 * 60 * 100,
        }).status(200).json({
            messege: "user registered succesFully", user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        })
    } catch (error) {
        res
            .status(500)
            .json({ message: 'Error registering user', error: error.message })

    }
}
export const login = async (req, res) => {
    try {
        const { name, password } = req.body

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ messege: "invalid credential" })
        }
        const isMatch = user.comparePassword(password)
        if (!isMatch) {
            return res.status(401).json({ messege: "incorrect password" })
        }
        const token = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"24h"
        }
    )
    res.cookie('token',token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false,
        maxAge:25*60*60*100,
    }).status(201).json({messege:"user logged in succesfully",user:{
        id:user._id,
        name:user.name,
        email:user.email

    }})
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message })
    }
}
export const logout = (req, res) => {
    res.clearCookie('token')
    res.json({ message: 'Logged out successfully' })
  }