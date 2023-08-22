const http= require ('http');

const express=require('express')

const app=express();
app.use((req,res,next) =>{
    console.log("In the middleware");
    next();
});
app.use((req,res,next) =>{
    console.log(" IN another middleware");
    next();
});


const server=http.createServer(app);


const PORT = 3600;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});