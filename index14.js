console.log("hiii");
const fs = require("fs");

/*fs.writeFile("messages.txt", "hello from NodeJS" , (err)=>{
    if (err) throw err;
    console.log("the file has been saved");
})
*/

fs.readFile("./message.txt" ,"utf-8",(err, data)=>
    {
        if (err) throw err;
        console.log(data);
    })