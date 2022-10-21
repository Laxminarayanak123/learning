// function greet(name){
//     console.log("hello "+name);
// }
// greet("venom");
// // console.log(module);


//                         // modules usage begin
// var l2 = require("./moduleimple");
// l2.logi("venom");
// console.log(l2.url);
                        //module usage ends


                        // usage of path module
var path1= require("path");
var pathObj=path1.parse(__filename);
console.log(pathObj);

                        //ends
                        //os module
var os =require("os");
var totalmemory=os.totalmem();
var freememory=os.freemem();

console.log(`total memory: ${totalmemory}`);
console.log(`free memory: ${freememory}`);

const obj1={
    name:os.type(),
    release:os.release(),
    uptime:os.uptime()
}

console.log(obj1);

                    //ends
                    //events
const EventEmmiter =require("events");
const eventobj = new EventEmmiter();

eventobj.on('message',function(){
    console.log("message logged")
})

eventobj.emit('message');