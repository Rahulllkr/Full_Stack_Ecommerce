import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";



//App Config

const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json());
app.use(cors());

//Api endpoints
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)

app.get("/", (req,res) => {
    res.send("Server setup successfully")
});

//app ko listen karna jaruri hai vo har req par res deta hai


app.listen(port,()=>{
    console.log("Server is running on Port : "+ port)
})