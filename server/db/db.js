const mongoose = require("mongoose");
const option = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const host = "mongodb://localhost:27017/noteList"

function connect() {
    console.log("connect to db is correct");
    mongoose.connect(host, option);
}; 

module.exports = connect;
