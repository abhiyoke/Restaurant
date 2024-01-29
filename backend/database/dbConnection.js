import mongoose from "mongoose";

export const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("Connected to database successfully");
    }).catch(err => {
        console.log(`Some error occurred while connecting to database! ${err}`);
    });
};