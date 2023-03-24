import { Schema, model } from "mongoose";
import { User } from "../interface/User";

const UserSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<User>("User", UserSchema);
