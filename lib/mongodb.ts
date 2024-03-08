// import mongoose from "mongoose";

// export const connectMongoDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to MongoDB Successfully");
//   } catch (error) {
//     console.log("Error while connecting to MongoDB", error);
//   }
// };

import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    const mongodbUri: string = process.env.MONGODB_URI!; // Type assertion with non-null assertion operator
    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
  }
};
