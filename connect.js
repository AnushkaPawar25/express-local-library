const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String
});

async function run() {
  // Create a separate connection and register a model on it...
  const conn = mongoose.createConnection();
  conn.model('User', schema);

  // But call `mongoose.connect()`, which connects MongoDB's default
  // connection to MongoDB. `conn` is still disconnected.
  await mongoose.connect('mongodb://localhost:27017');

  await conn.model('User').findOne(); // Error: buffering timed out ...
}

run();