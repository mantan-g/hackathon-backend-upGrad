import mongoose from 'mongoose';

export const LearnerActivitySchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    program: { type: String, required: true },
    course: { type: String, required: true },
    module: { type: String, required: true },
    activityType: { type: String, required: true }, // e.g., "viewed", "completed"
    meta: {
      type: mongoose.Schema.Types.Mixed,
    },
    timestamp: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
