const express = require("express");
const app = express();

const cors = require("cors");


//
const genPassword = require("./public/passwd/generator")

app.use(cors())
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get("/", (req,res)=>{

    res.redirect("/password/15")
})

app.get("/password/:lenght", (req, res)=>{

    const passwordLenght = Number(req.params.lenght)

    if(passwordLenght < 8)
    {

        res.status(200).json({
            passwd: genPassword(8)
        })
        
    }
    else{
        console.log("success")
        res.status(200).json({
            password: genPassword(passwordLenght)
        })
    }
    
    
})


app.listen(process.env.PORT || 3000,  ()=>{

    
    console.log("API ON --- heroku!!!")
})