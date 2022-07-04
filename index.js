const express = require('express');
const sql = require('mysql2');
const bodyParser = require('body-parser');
let app = express()
let patient = require('./routes/patient')
let conn = require('./routes/connect');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
let parser = bodyParser.urlencoded({extended:false});
app.set("view engine","ejs");




app.get("/",(req,res)=>{

    res.render("login")

});
app.post("/",parser,(req,res)=>{

    //     conn = sql.createConnection({
    //     host:"localhost",
    //     user:"root",
    //     password:"XYZthree123borntoplay",
    //     database:"se"
    // });
    conn.connect((err)=>{


        if(!err)
        {
           console.log("Connection Successfull!")
            let userid = req.body["loginid"]
            let passwd = req.body["password"]
            
            conn.query(`select Password from patientlogin where Loginid="${userid}"`,(err,rows,fields)=>{
                
                if(!err)
                {
                    console.log("Login Successfull");

                    if(rows[0].Password==passwd)
                    {
                        
                        console.log(userid+passwd)
                        res.redirect(`/patient/${userid}`)
                        app.use(`/patient`,patient)
                    }
                    else
                    {
                       
                       //Window.alert("Alert");
                        res.render("login");
                    }
                }
                else
                console.log(err);


            })


            
        }
        else
        console.log(err);

    })

});




app.listen(3900,()=>{
    console.log("Listening to port");
});