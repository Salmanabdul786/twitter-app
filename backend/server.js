import express from "express";
import dotenv from "dotenv";
import path from "path";
import {v2 as cloudinary} from 'cloudinary';
import authRoutes from "./routes/auth.routes.js";
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'
import notificationRoutes from './routes/notification.route.js'
import connectDB from "./db/connectdb.js";
import cookieParser from "cookie-parser";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname= path.resolve();
app.use(express.json({limit:"20mb"}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notification", notificationRoutes);


	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});


app.listen(8000, () => {
  console.log(`Running on ${PORT}`);
  connectDB();
});

//BODm315ZX6pNGwin
//abdulkareem786salman
