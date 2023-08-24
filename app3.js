const express=require('express')

const bodyparser=require('body-parser')


const app=express();

app.use(bodyparser.urlencoded({extended: false}))


app.use('/add-product',(req,res,next)=>{
    
    res.send('<form action ="/product" method ="POST"> <input type="text" name="title"><br><input type="number" name="size"><br> <button type="submit">Add</button> </form>')
})

app.use('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/')
})
app.use('/',(req,res,next) =>{
    
    res.send("<h1> Hello this is lakki</h1>");

});


app.listen(3800)


