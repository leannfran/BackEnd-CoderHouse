import express from 'express';

const app = express();
const users = [
    {id:1, nombre:"leandro",apellido:"franco"},
    {id:2, nombre:"ludmila",apellido:"sabbatini"},
    {id:3, nombre:"nicle",apellido:"franco"},

]


app.get('/bienvenida',(req,res)=>{
    res.sendFile("/Users/ferfranco/Desktop/study/back-end--coder-house/DesafioExpress-#3/index.html")
})

app.get('/',(req,res)=>{
    res.send(users)
})

app.listen(8080,()=>console.log('servidor iniciado en el puerto 8080'))