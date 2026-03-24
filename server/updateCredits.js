import mongoose from 'mongoose';
import 'dotenv/config';
import userModel from './models/userModels.js';

const updateCredits = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
        console.log('Database Connected for update...');

        const result = await userModel.updateMany(
            {}, 
            { $set: { creditBalance: 50 } }
        );

        console.log(`${result.modifiedCount} users updated to 50 credits.`);
        process.exit(0);
    } catch (error) {
        console.error('Update failed:', error);
        process.exit(1);
    }
};

updateCredits();
