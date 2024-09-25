import mongoose from "mongoose";

const DB = 'mongodb+srv://RentTenant:Rent_Tenant@cluster0.plafw.mongodb.net/RentTenant?retryWrites=true&w=majority';

export const connectDB = async () => {
    await mongoose.connect(DB) // ('mongodb+srv://RentTenant:Rent_Tenant@cluster0.plafw.mongodb.net/RentTenant?retryWrites=true&w=majority')
    .then(() => console.log('Connecting to the DataBase'))
    .catch(err => console.error('Error Connecting to the DataBase', err))
}
