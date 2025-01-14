import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    name:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        enum: ["male","female"],
    },
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;