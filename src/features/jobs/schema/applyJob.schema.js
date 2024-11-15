// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from 'mongoose';
export const applyJobSchema = new mongoose.Schema({
  // Write your code here
  jobId:{
    type:mongoose.SchemaTypes.ObjectId,
    required:[true,"job Id is required"]
  },
  userId:{
    type:mongoose.SchemaTypes.ObjectId,
    required:[true,"user Id is required"]
  }
});
