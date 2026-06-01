import { Schema, models, model } from "mongoose";

const PremiumNoteRequestSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    department: String,

    semester: Number,

    subject: String,

    requirements: String,

    status: {
      type: String,
      enum: ["pending", "approved", "completed"],
      default: "pending",
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default models.PremiumNoteRequest ||
  model("PremiumNoteRequest", PremiumNoteRequestSchema);