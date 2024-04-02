import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { easyFetch } from '../helpers/utils';
//import './PostreForm.css';

const LibroForm = () => {
  
  const [formData, setFormData] = useState({ //no es necesario el state
    nombre: '',
    imagen: '',
  });
  const navegador = useNavigate();
/*
  const handleCreatePostre = async () => {
    const FormData2 = new FormData(e.target);


    easyFetch({
      url: "http://localhost:8080/API/v1/libros",
      //preguntar como poner dos url!! para la imagen necesito poner http://localhost:8080/API/v1/upload
      method: 'POST',
      body: FormData2,
      callback: (data) => {
        console.log("EXITO CREADO!!! ", data);
        navegador("/lista");
        //navegador("/upload");
      }
    });
  };
*/
/*
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, imagen: file });
  };
*/

  const [jsonResponse, setJsonResponse] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    fetch('http://localhost:8080/API/v1/upload', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        setJsonResponse(data);
      })
  };

  return (
    <>
      <form onSubmit={handleSubmit}  className="main-form">
        <label>Nombre del libro</label>
        <input
          type="text"
          className="input-control"
          name="nombre"
        //  value={formData.nombre}
          placeholder="Ingrese nombre del libro"
          //onChange={handleInputChange}
        /><br />



<input type="text" name="nick" placeholder="NickName" />
          <input type="file" name="profile" />
          <br />
          <input type="submit" value="crear nuevo" />

      </form>

        {/*jsonResponse.url && 
            <>
              <strong>Respuesta del Backend</strong>
              <div style={{"display":"flex"}}>
                <img src={jsonResponse.url} alt="imagen" style={{"maxWidth":"200px"}}/>
                <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
              </div>
            </>
  */}









     {// <button className="button">Crear Nuevo</button>
     }
    </>
  );
};

export default LibroForm;
