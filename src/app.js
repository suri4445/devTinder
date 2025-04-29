const express = require('express');
const { connectDB } = require("./config/database")
const { adminAuth } = require("./middlewares/auth")
const User = require("./models/user")

const app = express();

app.use(express.json());

app.post("/signUp", async (req, res, next) => {
    // const userObj = {
    //     firstName: "Suresh",
    //     lastName: "U",
    //     emailId: "suriu@gmail.com",
    //     password: "aaaaa",
    //     age:28,
    //     gender: "M"
    // } 
    const userObj = req.body
    const user = new User(userObj);
    await user.save();
    res.send("User added")
})


app.get('/getUserByName', async (req, res, next) => {
    const name = req.body.firstName;
    const result = await User.find({firstName: name})
    try{
        if(result.length){
            res.send(result)
        }else {
            res.send("User not found in db")
        }
    } catch(err) {
        res.status(400).send("Something went wrong")
    }
    res.send(result)
})

app.get("/getAllUsers", async (req, res, next) => {
    const result = await User.find({})
    try{
        if(result.length){
            res.send(result)
        }else{
            res.status(4000).send("db is empty")
        }
    }catch(err){
        res.send("Somethig qent worng")
    }
})

app.delete("/deleteUser", async (req, res, next) => {
    const userToDelete = req.body.firstName;
    console.log('deleteUser', userToDelete, req.body)
    const result = await User.deleteOne(req.body);
    try{
        if(result){
            res.send(result)
        }else{
            res.status(400),send("Fishy")
        }
    }catch(err){
        console.log('Somethig qent worng', err)
    }
})


app.patch("/updateUserById", async (req, res, next) => {
    const {_id, password} = req.body;
    console.log('Update', _id, password)
    const result = await User.findByIdAndUpdate(_id, {password});
    try{
        if(result){
            res.send(result)
        }else{
            res.status(400),send("Fishy")
        }
    }catch(err){
        console.log('Somethig qent worng', err)
    }
})

connectDB().then(() => {
    console.log("DB connect success");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
      })
}).catch(err => {
    console.error("Db connect error", err)
})
