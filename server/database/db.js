import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connection = async () => {

    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rhlik7t.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connection successfully")
    } catch (error) {
        console.log("Error while connecting to Database", error)
    }

}
export default connection;