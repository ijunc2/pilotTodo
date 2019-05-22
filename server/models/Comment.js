import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const comment = new Schema({
  todo: {
    type: Schema.Types.ObjectId,
    ref: 'todo'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  comment: String,
  insertedDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('comment', comment);