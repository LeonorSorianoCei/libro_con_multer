import mysql from 'mysql';
import DatosPostres from './postres.db.js';

// Función para migrar datos a la base de datos MySQL
function migrarDatos() {
    // Configurar la conexión a la base de datos MySQL
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "postres"
    });

    // Conectar a la base de datos MySQL
    connection.connect();

    DatosPostres.forEach(postre => {
        const { nombre, id, imagen, descripcion, ingredientes, instrucciones, dificultad, tiempo } = postre;
        const query = `INSERT INTO postres (nombre, id, imagen, descripcion, ingredientes, instrucciones, dificultad, tiempo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        connection.query(query, [nombre, id, imagen, descripcion, ingredientes, instrucciones, dificultad, tiempo], (error, results, fields) => {
            if (error) throw error;
            console.log(`Registro insertado con ID: ${results.insertId}`);
        });
    });

    // Cerrar la conexión a la base de datos MySQL
    connection.end();
}

// Ejecutar la función de migración
migrarDatos();
