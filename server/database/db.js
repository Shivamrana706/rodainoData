import mongoose from 'mongoose';


const connection = async () => {
   
    const URL = `mongodb+srv://shivamrana123:Mongodb123@cluster0.rhlik7t.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connection successfully")
    }catch(error){
        console.log("Error while connecting to Database",error)
    }

} 
export default connection;