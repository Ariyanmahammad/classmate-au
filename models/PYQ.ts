import { Schema, models, model } from "mongoose";

const PYQSchema = new Schema(
  {
    title: String,

    subject: String,

    semester: Number,

    department: String,

    year: Number,

    questionPdf: String,

    solutionPdf: String,

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default models.PYQ || model("PYQ", PYQSchema);