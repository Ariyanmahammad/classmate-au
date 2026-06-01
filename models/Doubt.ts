import { Schema, models, model } from "mongoose";

const DoubtSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    tags: [String],

    semester: Number,

    department: String,

    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["open", "resolved"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Doubt || model("Doubt", DoubtSchema);