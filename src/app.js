const express = require('express');

const app = express();

// app.use("", (req, res, next) => {
//     console.log("Default page");
//     res.send("Default page");
// });

app.use("/Login", (req, res, next) => {
    res.send("Login");
});

app.use("/regester", (req, res, next) => {
    res.send("regester");
});

app.use("/test", (req, res, next) => {
    res.send("test");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})