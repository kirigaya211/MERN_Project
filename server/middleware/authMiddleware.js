const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization?.split("")[1];

    if(!token){
        return res.status(401).json({error:"No token provided"});
    }

    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    }catch(error){
        return res.status(401).json({error:"Invalid token"});
    }
}

module.exports = authMiddleware;