const EventEmitter=require("events");
// const obj=new EventEmmiter();


class Logger extends EventEmitter{

    log(msg){
        console.log(msg);

    this.emit('message');
    }
}

module.exports=Logger;
