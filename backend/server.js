import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./db/connectdb.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.get('/',(req,res)=>{
    res.send("Server");
});
app.listen(8000, () => {
  console.log(`Running on ${PORT}`);
  connectDB();
});

//BODm315ZX6pNGwin
//abdulkareem786salman
