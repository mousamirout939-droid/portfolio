import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    tagline: { type: String, required: true },
    stack: [{ type: String }],
    bullets: [{ type: String }],
    liveUrl: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
