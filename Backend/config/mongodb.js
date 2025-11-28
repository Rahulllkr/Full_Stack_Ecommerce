import mongoose from "mongoose"

const DB_Uri = process.env.MONGODB_URI

if(!DB_Uri){
    throw new Error("Please Add MongoDB_URI in env")
}

let cached = global.mongoose;
if(!cached){
    cached  = global.mongoose = {conn: null, promise: null}
}

const connectDB = async () => {

    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        cached.promise = mongoose.connect(DB_Uri,{
            maxPoolSize:5,
            serverSelectionTimeoutMS:5000,
            socketTimeoutMS:45000,
        }).then((mongoose) => {
            console.log("Database Connected")
            return mongoose
        })
    }

    cached.conn = await cached.promise;
    return cached.conn;

    // mongoose.connection.on("connected",() => {
    //     console.log("DB Connected")
    // })
    // await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`,{
    //     bufferTimeoutMs:30000, //30 seconds
    //     serverSelectionTimeoutMS:50000  // 50 seconds
    // })
}

export default connectDB