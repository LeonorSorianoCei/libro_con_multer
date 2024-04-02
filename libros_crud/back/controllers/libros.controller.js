import connection from "../db/mysql.js";

// formato de Respuesta
const responseAPI = {
    data: [],
    msg:"",
    status: "ok"
}


export const getAllLibros = async (req, res) => {

    const consulta=
    `SELECT * FROM libros`;

    const [results, fields ] = await connection.query(consulta);

    responseAPI.data=results;
    responseAPI.msg="Obtener libros";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

//http://localhost:8080/API/v1/libros
export const createLibro = async (req, res) => {
    const {
      nombre
    } = req.body;


    //const imagen = req.file.filename; // Obtener el nombre del archivo de la imagen subida


    const sqlQuery = `INSERT INTO libros 
      (nombre) 
      VALUES 
      ('${nombre}');`;
  
    try {
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
      res.status(500).send(responseAPI);
    }
};









/*

export const createLibroooo = async(req, res, next) => {

    try {
        const {titulo, id_autor, cali=0, lanzamiento="", editorial="", precio=0, cant_vendidos=0, num_paginas=0 } = req.body;

        if(titulo=="" || id_autor == 0){
            responseAPI.msg="Error al crear libro";
            responseAPI.status="error";

            // insertar en la base de datos, el error que se acaba de generar

            res.status(400).send(responseAPI);
            return;
        }

        const sqlQuery= `INSERT INTO libros 
        (libro, id_autor, calificacion, lanzamiento, editorial, precio, cant_vendidos, num_paginas) 
        VALUES  ('${titulo}', '${id_autor}', '${cali}', '${lanzamiento}', '${editorial}', '${precio}', '${cant_vendidos}', '${num_paginas}');`;


        const [newBook, fields ] = await mysqlConn.query(sqlQuery);

        // Nuestra respuesta para MySQL o Sequelize
        responseAPI.data=newBook;
        responseAPI.msg="Crear nuevo libro";
        responseAPI.status="ok";
        res.status(200).send(responseAPI);
    } catch (error){
        next(error);
    }
}

*/






/*
export const createPostre = async(req, res) => {
    
    const {titulo, id_autor, cali=0, lanzamiento="", editorial="", precio=0, cant_vendidos=0, num_paginas=0 } = req.body;

    if(titulo=="" || id_autor == 0){
        responseAPI.msg="Error al crear libro";
        responseAPI.status="error";
        res.status(400).send(responseAPI);
        return;
    }

    const sqlQuery= `INSERT INTO libros 
    (libro, id_autor, calificacion, lanzamiento, editorial, precio, cant_vendidos, num_paginas) 
    VALUES  libros
    ('${titulo}', '${id_autor}', '${cali}', '${lanzamiento}', '${editorial}', '${precio}', '${cant_vendidos}', '${num_paginas}');`;


    const [newBook, fields ] = await connection.query(sqlQuery);

    // Nuestra respuesta para MySQL o Sequelize
    responseAPI.data=newBook;
    responseAPI.msg="Crear nuevo libro";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}
*/

/*
export const getPostreById = async(req, res) => {

    const Libro = await Libros.findByPk(req.params.id);
    if(!Libro){
        responseAPI.msg="Libro no encontrado";
        responseAPI.status="ok";
        res.status(404).send(responseAPI);
        return;
    }

    await Libro.update(req.body);
    responseAPI.data=Libro;
    responseAPI.msg="Obtener libros por id";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const updatePostre = async(req, res) => {
    const Libro = await Libros.findByPk(req.params.id);
    if(!Libro){
        responseAPI.msg="Libro no encontrado";
        responseAPI.status="ok";
        res.status(404).send(responseAPI);
        return;
    }

    await Libro.update(req.body);
    // respondo con la nueva lista de libros ACTUALIZADA
    responseAPI.data=Libro;
    responseAPI.msg="Actualizar libro con valores específicos";
    responseAPI.status="ok";
    res.status(200).send(responseAPI);
}

export const deletePostre = async(req, res) => {
    const Libro = await Libros.findByPk(req.params.id);
    if(!Libro){ // No se encontró 
        responseAPI.msg="No se encontró un libro para eliminar";
        res.status(404).send(responseAPI); return;
    }
    responseAPI.data=Libro;
    await Libro.destroy();
    responseAPI.msg="Libro Eliminado";
    res.status(200).send(responseAPI);
}







/*
export const createPostre = async (req, res) => {
    const {
      nombre,
      imagen,
      descripcion,
      ingredientes,
      instrucciones,
      dificultad,
      tiempo
    } = req.body;
  
    if (nombre === "" || descripcion === "" || ingredientes === "" || instrucciones === "" || dificultad === "" || tiempo === "") {
      responseAPI.msg = "Error al crear postre";
      responseAPI.status = "error";
      res.status(400).send(responseAPI);
      return;
    }
  
    const sqlQuery = `INSERT INTO postres 
      (nombre, imagen, descripcion, ingredientes, instrucciones, dificultad, tiempo) 
      VALUES 
      ('${nombre}', '${imagen}', '${descripcion}', '${ingredientes}', '${instrucciones}', '${dificultad}', '${tiempo}');`;
  
    const [newPostre, fields] = await connection.query(sqlQuery);
  
    responseAPI.data = newPostre;
    responseAPI.msg = "Crear nuevo postre";
    responseAPI.status = "ok";
    res.status(200).send(responseAPI);
  };
  
*/


