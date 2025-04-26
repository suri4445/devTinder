const express = require('express');
const { adminAuth } = require("./middlewares/auth")

const app = express();

app.use("/admin", (req, res, next) => {
    const token = "abcaa";
    const isAuth = token === "abc"
    if(!isAuth){
        res.status(401).send("UnAuth")
    }else {
        next();
    }
})
//or
app.use("/admin", adminAuth);


app.use("/admin/getUser", (req, res, next) => {
    res.send("Get users");
});
app.use("/admin/delUser", (req, res, next) => {
    res.send("Delete users");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})