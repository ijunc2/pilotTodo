import mongoose from 'mongoose';

const connectMongoose = () => {
  var options = {
    user: "admin",
    pass: "admin123!!",
  };


  var db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', function () {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
  });

  mongoose.connect('mongodb://13.209.246.29:27017/admin', options);
}

export default connectMongoose;