const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log("Database connected Successfully")})
    .catch((e) => {
        console.log("error occured:"+e);
        process.exit(1);
    })


}

module.exports = dbConnect; 