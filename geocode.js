const request = require("request");

//var request=require("request");
var getGioCode=(address,callback)=>{

    var url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibWFoZW5kcmFzYWh1MTIxMiIsImEiOiJjazBxeWpzZTEwMG13M21ta2ppZXlxcjdyIn0.bMOiaJmXjgTqYkuJVttyog";
   request({url,json:true},(err,res)=>{
    if(err){
      //  console.log("Error on getting geocode");
      //  console.log(err);
        callback("Error on getting geocode",undefined);
        return;
    }else if(res.body.length===0||res.body.features.length===0){
       // console.log("address search result not found ");
      //  console.log(res.body);
       return callback("address search result not found ",undefined);
    }else{
      console.log("else part triggered");
      console.log(res.body);
      var locatondata={array: res.body.features};
      callback(undefined,locatondata)
    }

   });

}

module.exports=getGioCode;
