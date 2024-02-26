const mongoose = require("mongoose");

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://user4203:42039133@cluster0.jos22gx.mongodb.net/?retryWrites=true&w=majority");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connect;
