
var getGioCode=require("./geocode");
var foracst=require("./forcast");
getGioCode("hyderabad",function(err,data){
    console.log(data.array[0].center);
   foracst({long:data.array[0].center[1],lati:data.array[0].center[0]},function(err,obj){
       console.log(obj);
   })
})