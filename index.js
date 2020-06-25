const fs = require ("fs")
fs.readFileSync(path)
fs.readFile(path, (err,data) =>{

})
const myReadFile = (path) => new Promise((resolve,reject)=>{
    if(!path){
        reject(new Error())
        fs.readFile(path, (data) => resolve(data))
    }
})