import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const user = new Schema({
  id: Number,
  name: {
    type: String,
    unique: true,
    index: true
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

export default mongoose.model('user', user);