import { Schema, models, model } from "mongoose";

const AnswerSchema = new Schema(
  {
    doubtId: {
      type: Schema.Types.ObjectId,
      ref: "Doubt",
    },

    answeredBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    answer: {
      type: String,
      required: true,
    },

    upvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Answer || model("Answer", AnswerSchema);