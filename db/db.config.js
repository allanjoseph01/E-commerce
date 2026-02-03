import mongoose from 'mongoose'

const MONGODB_URI = "mongodb://localhost:27017/ecommerce";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  return mongoose.connect(MONGODB_URI)
}
