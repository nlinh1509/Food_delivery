import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://nlinh:nlinh1509@cluster0.c56krn3.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
