import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "validator/lib/isemail.js";

export default mongoose.model(
  "User",
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      require: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Do dai phai lon hon 3",
      },
    },

    email: {
      type: String,
      validate: {
        validator: (value) => isEmail,
        message: "Email is incorrect format",
      },
    },

    password: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: false,
    },
  })
);
