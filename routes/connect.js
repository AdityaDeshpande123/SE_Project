let sql = require('mysql2');

 const conn = sql.createConnection({
    
     host:"localhost",
     user:"root",
     password:"XYZthree123borntoplay",
     database:"se"
 })
conn.connect((err)=>{
    
     if(!err)
     console.log("Connection succesfull!!");
     else
     console.log(err);
});

module.exports = conn;