require("dotenv").config();
const express=require("express");
const app=express();
const createDB=require("./db").createDB;
const verifyRouter=require("./routes/verifyRouter");
const port=3000;
const hostname=process.env.APP_BASE_URL || "localhost";  //APP_BASE_URL is https://www.growpital.com/ as mentioned in the task

createDB();

app.use(express.json());
app.use("/verification/aadhar",verifyRouter);

app.listen(port,hostname,()=>{
    console.log(`Server running on port ${port}`);
});