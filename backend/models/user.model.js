import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true
  },
  password:{
    type:String,
    require:true
  }
});

const userModel = mongoose.model("Users" , userSchema)

export default userModel;