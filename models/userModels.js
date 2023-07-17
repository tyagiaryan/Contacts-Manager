const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:[true,"Please enter the user Name"]
    },
    email:{
        type: String,
        required:[true,"Please enter the user email address"],
        unique:[true,"Email Address already taken"]
    },
    password:{
        type: String,
        required:[true,"Please enter the user Password"]
    },
},{
    timestamps:true,
}
);

module.exports = mongoose.model("User",userSchema);