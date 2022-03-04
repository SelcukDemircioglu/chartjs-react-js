const fs=require("fs");
const proces =require("child_process");
  
console.log(process.env?.MODULES);

fs.rm(__dirname+"/node_modules",{recursive:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("node_modules delete");
    
    fs.rm(__dirname+"/package-lock.json",{recursive:true},(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("package-lock.json delete");

        if (process.env?.MODULES===1) {
            proces.exec("npm i", (err, stdout, stderr) => {
                if (err) {
                    console.error(`exec error: ${err}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
            })
        }
    });


});

