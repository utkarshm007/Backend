import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Completed: {
      type: Boolean,
      default: false,
    },
    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    SubTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodof',
      },
    ], //array of subtodos
  },
  { timeStamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
