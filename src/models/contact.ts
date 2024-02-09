import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  { 
    timestamps: true,
    expires: "3m"
  }
);

export default mongoose.models.contact || mongoose.model("contact", contactSchema);
