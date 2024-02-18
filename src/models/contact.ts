import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      validator: {
        $jsonSchema: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
          message: "Email must be a valid email address",
        },
      },
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: Number,
      required: true,
      trim: true,
      validator: {
        $jsonSchema: {
          bsonType: "number",
          minimum: 1000000000,
          maximum: 9999999999,
          message: "Phone number must be a 10 digit number",
        },
      },
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { 
    timestamps: true,
    expires: "12m"
  }
);

export default mongoose.models.contact || mongoose.model("contact", contactSchema);
