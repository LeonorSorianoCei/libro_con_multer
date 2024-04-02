import express from "express";
import {PORT, domain, fullDomain} from "./config/config.js"
import { logger } from "./middlewares/logger.js";
import { setHeaders } from "./middlewares/setHeaders.js";
import indexRoutes from "./routes/index.routes.js";
import cors from 'cors'
import mysql from "mysql2/promise"

const app = express()
console.clear();
//http://localhost:8080/API/v1//upload

// formulario html de Uploads
// ${fulldomain}/html-form
//app.use('/html-form', express.static('public')); 
// carpeta de archivos subidos a "uploads"
// ${fulldomain}/files
app.use('/API/v1/files', express.static('uploads'));
//http://localhost:8080/files/libro.jpg
//http://localhost:8080/API/v1/files/libro.jpg


app.use(cors())           
app.use(setHeaders)         
app.use(express.json());    
app.use(logger)   
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html"); 

    const landingHTML = `
    <h1>Bienvenidos a nuestra API de libros!!</h1>
    `
    res.send(landingHTML);
})



//app.use('/uploads', express.static('uploads'))

app.use("/API/v1/", indexRoutes) 


app.listen(PORT, () => {
    console.log(`Server running on ${fullDomain}`)
})