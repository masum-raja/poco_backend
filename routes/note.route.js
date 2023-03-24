const { Router } = require("express");

const noteRoute = Router();

/*****************  GET METHOD  **************************/

noteRoute.get("/",async(req,res)=>{
    try{

      res.status(200).send("Notes Page")
    }catch(err){
        console.log(err)
        res.status(400).send({message:"Something went wrong"})
    }
})

module.exports={noteRoute}