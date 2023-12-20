const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors")
const dotenv = require('dotenv');
const multer = require('multer')
const cookieParser = require('cookie-parser')
const path = require('path')
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');
const postRoute=require('./routes/post');
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/SmartScribble');
        console.log('MongoDB connected');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}


dotenv.config();
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/post",postRoute);

//image upload
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"image1.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})

app.listen(4000,()=>{
    connectDB();
    console.log('Server running on port 4000');
});