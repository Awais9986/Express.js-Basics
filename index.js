import express from 'express'
const PORT = 3000

const app = express();

app.get('/',function (req,res){
    res.send("<h1>app write documentation na rashid jor shawe de...</h1>")
})

app.get('/login',function (req,res){
    res.send("<h1>This is a login page</h1>")
})

app.get('/signin',function (req,res){
    res.send("<h1>This is a sign in page... ok </h1>")
})

app.listen(PORT,()=>{
    console.log(`This is a backend project ${PORT}`)
})


