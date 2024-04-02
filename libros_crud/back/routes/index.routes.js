import { Router } from "express";
import { getAllLibros, createLibro } from "../controllers/libros.controller.js";
import multer from 'multer'
import connection from "../db/mysql.js";
import { fullDomain } from "../config/config.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.originalname}`)
    }
})
  
const upload = multer({ storage })

const router = Router();


router.get("/libros", getAllLibros);


router.post("/libros", createLibro);

//http://localhost:8080/API/v1/upload
//http://localhost:8080/API/v1/libros
// Subir imagen
router.post("/upload", upload.single('profile'), async (req, res, next) => {
  // Formato de respuesta
  const responseAPI = {
    data: [],
    msg:"",
    status: "ok"
  }

  console.log("file vale", req.file);
  console.log("body vale", req.body);

  try {
    // Insertar la imagen en la tabla de libros
    const sqlQuery = `INSERT INTO libros (imagen, nombre) VALUES ('${req.file.filename}', '${req.body.nombre}')`;
    const [result, fields] = await connection.query(sqlQuery);
    const newLibroId = result.insertId;

    responseAPI.data = newLibroId;
    responseAPI.msg = "Crear nuevo libro";
    responseAPI.status = "ok";
    res.status(200).send(responseAPI);

  } catch (error) {
    console.error("Error al insertar nuevo libro:", error);
    responseAPI.msg = "Error al insertar nuevo libro";
    responseAPI.status = "error";
    res.status(500).json(responseAPI);
  }
});











//http://localhost:5173/uploads/chaqueta.jpg  GET



export default router;
