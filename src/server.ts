import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/firstProject");

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
}

main();
