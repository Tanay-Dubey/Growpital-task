const MongoClient=require("mongodb").MongoClient;

const url="mongodb://0.0.0.0:27017/"; //Mongodb server will run on local server
const dbname="Aadhar";

let db;

module.exports={
    createDB:function(){
        MongoClient.connect(url).then((client)=>{
            const dbclient=client.db(dbname);
            db=dbclient.collection("info");
            console.log("Successfully connected to database");
        }).catch((err)=>{
            console.log("Error while connecting to database:",err);
        });
    }, 

    getDB:function(){
        return db;
    }
};