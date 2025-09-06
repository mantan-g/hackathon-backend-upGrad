import mongoose from 'mongoose';

export const ProgramSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true }, // base64 string
    courses: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
        module: [
          {
            title: { type: String, required: true },
            description: { type: String, required: true },
            asset: { type: mongoose.Schema.Types.Mixed, required: true },
          },
        ],
        overView: { type: mongoose.Schema.Types.Mixed, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);
