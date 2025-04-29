const mangoose = require('mongoose');

const connectDB = async () => {
    await mangoose.connect("mongodb+srv://suriu4445:E8rhpM3PP8LJ00ZL@suri.73wn7wl.mongodb.net/devTinder")
}

module.exports = {
    connectDB
}

