import mongoose from 'mongoose';

export async function connect(){
    try {
        await mongoose.connect(process.env.MONGO_URL!);

       const connection = await mongoose.connection;
       connection.on('connected', ()=>{
            console.log('MongoDB is connected!');    
       });

       connection.on('error', (error)=>{
        console.log('MongoDB connection error, please make sure mongodb is runing', + error);
        process.exit();
        
       })
    } catch (error) {
        console.log('something went wrong!');
        console.log(error);
    }
};