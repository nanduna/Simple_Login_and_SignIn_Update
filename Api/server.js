

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collection = require('./models/User')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect ("mongodb+srv://nandunabeykoon:nandun123@cluster0.k4kjmzr.mongodb.net/?retryWrites=true&w=majority")

app.post("/signin", async(req, res) => {

   const {Username, LastName, Email, password,} = req.body

   try{
    const newCollection = new collection({
        Username : Username,
        LastName: LastName,
         Email : Email,
        password: password
    })
    await newCollection.save()
    res.status(201).send("Succes")
   }catch(error){
    res.status(500).send("Error")
    console.log(error)
   }


})

app.post("/login", async(req, res) => {
    const {Username, password} = req.body;
    const founUser = await collection.findOne({Username})
    console.log(founUser)
    if (founUser){
        if(founUser.password === password){
            res.json("Succes")
        }else{
            res.json("user is not exsisted")
        }
    }

    // .then(user => {
    //     if(user) {
    //         if(user.Password === Password){
    //             res.json("Succes")
    //         }else{
    //             res.json("the Password is incorrect")
    //         }
    //     }else{
    //         res.json("user is not exsisted")
    //     }
    // })
})

app.listen(5000, () => {
    console.log("Server is running")
})