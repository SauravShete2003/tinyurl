import { Schema, model } from "mongoose";
const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
},{timestamps : true});

const User = model('User' , userSchema)
export default User;
