var path =require("path");
var express=require("express");
var hbs=require('hbs');
var getGioCode=require("./geocode");
var foracst=require("./forcast");
var app=express();
var public_dir=path.join(__dirname,"public");
var viwedir=path.join(__dirname,"templatePages");
var partialdir=path.join(__dirname,"templatePages","partials");
console.log(partialdir);
hbs.registerPartials(partialdir);
console.log(public_dir);
console.log(__dirname);
console.log(__filename);
app.set('view engine','hbs');
app.set('views',viwedir);
app.get("",(req,res)=>{
    res.render('index',{title:"this is title",name:"this is name"});
});
app.get("/home",(req,res)=>{
    console.log("hitting service home");
    res.send("home page");
});
app.get('/help',(req,res)=>{
  res.render('help',{data:'my name is mahendra kumar sahu'})
});
app.get("/about",(req,res)=>{
console.log("hitting service about");
res.send("about page");
});
app.get("/weather",(req,res)=>{
var location=req.query.location;
if(!location){
  console.log("location not found from user");
 return res.send({error:"please add location to the url as a query"});
}
// applying address and request 
getGioCode(location,function(err,data){
    console.log(err);
  //  console.log(data.array[0].center);
  if(err){
      return res.send({error:"error finding giocode location"});
  }
   foracst({long:data.array[0].center[1],lati:data.array[0].center[0]},function(err,obj){
      res.send(obj);
   });
//////////////////////////////
});
});
app.use(express.static(public_dir));
app.listen("3000",()=>{
    console.log("server srarted at port 3000");
});