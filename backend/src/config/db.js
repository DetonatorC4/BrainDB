const mongoose = require ("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.error("ERROR CONNECTING TO MONGODB", error);
    process.exit(1)
  }
};

module.exports = connectDB