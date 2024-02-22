const { AppErr } = require("../utils/appErr")
const getTokenfromHeader = require("../utils/getTokenfromHeader")
const verifyToken = require("../utils/verifyToken")
const isLogin = (req,res,next) =>
{
    //get token from req header 
    const token = getTokenfromHeader(req)
    //verify
     const decodedUser=verifyToken(token)
    //save the user into req object
    req.user = decodedUser.id
    if(!decodedUser){
        return next(new AppErr('Invalid/expired Token , Please login again',401))
    }
    next();
}

module.exports = isLogin;