var request=require("request");
var forcast=(obj,callback)=>{
    var long=obj.long;
    var lati=obj.lati;
    var url="http://api.weatherstack.com/current?access_key=3d00799255dfe20b39ceef168f769699&query="+long+","+lati;
    request({url,json:true},(err,response)=>{
        if(err){
        //    console.log("error in forcast");
        //    console.log(err);
            callback("error in forcast",undefined);
            return;
        }else if(response.body.length===0){
          //  console.log("unable to find location");
          
            callback("unable to find location",undefined);
            return;
        }else {
           // console.log(response.body);
            callback(undefined,response);
        }
        
        console.log(response.body);
       });

}
module.exports=forcast;