import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {type:true, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String,reqired:true},
    isAdmin:{type:Boolean,required,default:false},
});
const userModel=mongoose.model("Mirror",userSchema);

export default userModel;
