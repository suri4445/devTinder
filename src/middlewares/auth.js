const adminAuth = (req, res, next) => {
    const token = "abcaa";
    const isAuth = token === "abc"
    if(!isAuth){
        res.status(401).send("UnAuth")
    }else {
        next();
    }
}

module.exports = {
    adminAuth
}