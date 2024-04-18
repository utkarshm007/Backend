import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    Category: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

export const Category = mongoose.model('Category', CategorySchema);
