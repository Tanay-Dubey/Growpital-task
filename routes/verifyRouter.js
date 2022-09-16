const express = require("express");
const router = express.Router();

router.post("/otp", (req, res) => {
    const data = req.body;
    console.log(data);
    //Note: I have added one more field to the request body (aadharValid) to check if the aadhar number is valid
    if (data.aadharValid == true) {  
        const reply = {
            "status": "SUCCESS",
            "message": "OTP sent successfully",
            "ref_id": "21637861"
        }
        res.json(reply);
    }
    else {
        const reply = {
            "status": "INVALID",
            "message": "Invalid aadhar number",
            "ref_id": "208"
        }
        res.json(reply);
    }
});

router.post("/verify", (req, res) => {
    const data = req.body;
    console.log(data);
    //Note: I have added one more field to the request body (otpValid) to check if the otp is valid
    if (data.otpValid == true) {
        const reply = {
            "status": "VALID",
            "message": "Aadhaar Card Exits",
            "ref_id": "21637861",
            "care_of": "S/O:Fakkirappa Dollin",
            "address": "D-98,vikas puri, Lucknow,Uttar Pradesh-223009", "dob": "25-09-1993",
            "email": "",
            "gender": "F",
            "name": "Fakirappa Dollin",
            "photo_link": "",
            "mobile_hash": "ed189eb73247cb90b769e7e8d7dfd2efa4cd6a5ec27602f5d2721c035266568c", "split_address": { "country": "India", "dist": "Lucknow", "house": "n-890", "landmark": "opposite uioq school", "pincode": "223009", "postOffice": "", "state": "Uttar Pradesh", "street": "", "subdist": "", "vtc": "Gomti Nagar S.O" }, "year_of_birth": "1995"
        }
        const dboper=require("../db").getDB();
        //The response message is stored into the database before sending it
        dboper.insertOne(reply)
        .then((record)=>{
            console.log("Record inserted successfull");
            res.json(reply);
        })
        .catch((err)=>{
            console.log("Error while inserting record");
            res.status(400).send("Error while inserting record");
        })
    }
    else {
        const reply = {
            "status": "INVALID",
            "message": "Incorrect OTP",
            "ref_id": "208"
        }
        res.json(reply);
    }
});

module.exports = router;