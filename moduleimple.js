var url="http://bugle.com";

function logi(msg){
    console.log(msg);
}
// console.log(logi("help"));

                    // exports in module
module.exports.logi=logi;
module.exports.url=url;
// console.log(module);
                    //end of exports
                    