var request=require("request");
var url="http://api.weatherstack.com/current?access_key=3d00799255dfe20b39ceef168f769699&query=37.8267,-122.4233";

request({url,json:true},(err,response)=>{
 if(err){
     return;
 }
 
 console.log(response.body);
});

var locurl="https://api.mapbox.com/geocoding/v5/mapbox.places/indrakhi.json?access_token=pk.eyJ1IjoibWFoZW5kcmFzYWh1MTIxMiIsImEiOiJjazBxeWpzZTEwMG13M21ta2ppZXlxcjdyIn0.bMOiaJmXjgTqYkuJVttyog";
request({url:locurl,json:true},(err,response)=>{

    if(err){
        console.log("error in geolocation");
        console.log(err);
        return;
    }
    console.log(response.body);

})