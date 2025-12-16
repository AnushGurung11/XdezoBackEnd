import mongoose from "mongoose";


const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: ture,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: ture }
);

export default mongoose.model("User", userSchema);