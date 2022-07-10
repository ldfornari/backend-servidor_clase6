const express = require("express")
const app = express()
const port = 8080
const fs = require('fs')
let lengthData = 0

const server = app.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto ${port}`)
})
server.on("error", (error) => console.log(`Error en servidor ${error}`))

class Contenedor {
    constructor() {
        this.fileName = "./productos.txt"     
    }
    async getById(number) {
        try{
            const content = await fs.promises.readFile(this.fileName, "utf8")
            const data =  JSON.parse(content)
            lengthData = data.length
            const product = data.find((byId)=> {return byId.id == number})
            return console.log(product)

        }catch(error){
            throw new Error(error,mesagge)
        }        
    }  
    async getAll([]) { 
        try{
            const content = await fs.promises.readFile(this.fileName, "utf8")
            return console.log(content)                
        }
        catch(error){
            throw new Error(error.message)
        }
    }
 
}

const get = new Contenedor()

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Desafío </h1>')
})

app.get('/productos', (req, res) => {
   res.send(get.getAll([]))
})

app.get('/productoRandom', (req, res) => {  
   res.send(get.getById(Math.floor(1 + Math.random() * lengthData)))
})