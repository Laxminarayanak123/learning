// const Event1=require("events");
// const obj = new Event1();


const Logger=require("./logger");
const logger = new Logger();

logger.on('message',function(){
    console.log("event called");
})

logger.log("venom_likith123");

// const l1=require("./logger");
// l1.log("venom");
