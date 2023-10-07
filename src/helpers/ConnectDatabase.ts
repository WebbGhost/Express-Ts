import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const url: string | undefined = process.env.MONGODB_DATABASE_URL as string;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to mongo DB: ');
  } catch (error) {
    console.log('Could not connect to MongoDB', error);
  }
};
export default connectDB;
