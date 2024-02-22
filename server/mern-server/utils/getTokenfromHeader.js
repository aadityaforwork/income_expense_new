const getTokenfromHeader = (req) => {
    //getting token from the header
    const headerObj=req.headers;
    const token = headerObj['authorization'].split(" ")[1];
    if (token !== undefined)
    {
        return token;
    }
    else
    {
        return{
            status:"failed",
            message:"there is no token attached to the header",
        }
    }
}
module.exports = getTokenfromHeader;