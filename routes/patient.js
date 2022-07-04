const { Router } = require('express');
const express = require('express');
let r1 = express.Router();
let conn = require('./connect')



r1.use(express.static(__dirname + '/public'));

r1.get("/:userid",(req,res)=>{
    
    let pnamex = req.params.userid;
    conn.query(`select * from interactions where Pname="${pnamex}"`,(err,rows,fields)=>{
          
        if(!err)
        {
            console.log(rows);
            res.render("patient",{pname:"Aditya",data1:rows});
        }
        else
        {
            console.log(err);
        }

    })
    
    
});


module.exports = r1;