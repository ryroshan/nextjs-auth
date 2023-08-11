import mongoose from 'mongoose';

export async function connect() {
    try {
         mongoose.connect(process.env.MONGO_URL!);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB is connected!');
        });

        connection.on('error', (error:any) => {
            console.log('MongoDB connection error:', error);
            process.exit(1);
        });

        // Handle unhandled promise rejections
        process.on('unhandledRejection', (reason, promise) => {
            console.log('Unhandled Rejection at:', promise, 'reason:', reason);
        });
    } catch (error) {
        console.log('Something went wrong during database connection:');
        console.error(error);
    }
}
