import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todo = new Schema({
  content: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  insertedDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('todo', todo);