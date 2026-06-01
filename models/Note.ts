import { Schema, models, model } from "mongoose";

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    semester: {
      type: Number,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    pdfUrl: {
      type: String,
      required: true,
    },

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Note || model("Note", NoteSchema);