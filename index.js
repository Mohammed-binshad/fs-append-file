const fs = require("fs");

fs.appendFile("message.txt","helloo guru",(err)=>{
        if(err) throw err;
        console.log('saved')
    })