import mongoose from "mongoose"

const connectDB = async () => {

    mongoose.connection.on("connected",() => {
        console.log("DB Connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`,{
        bufferTimeoutMs:30000, //30 seconds
        serverSelectionTimeoutMS:50000  // 50 seconds
    })
}

export default connectDB