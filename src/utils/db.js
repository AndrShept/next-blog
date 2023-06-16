import mongoose from 'mongoose';
import { toast } from 'react-hot-toast';

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    toast.error('Connection failed!')
    throw new Error('Connection failed!')
  }
};

export default connect