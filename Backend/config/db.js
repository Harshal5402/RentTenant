import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://RentTenant:Rent_Tenant@cluster0.plafw.mongodb.net/RentTenant')
    .then(() => console.log('Connecting to the DataBase'))
    .catch(err => console.error('Error Connecting to the DataBase', err))
}

