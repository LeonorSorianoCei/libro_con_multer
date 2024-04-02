import React, { useState, useEffect } from 'react';
import './LibrosList.css';
import LibroForm from '../../components/LibroForm';
import LightBox from '../../components/lightbox/LightBox';
import { easyFetch } from '../../helpers/utils';
import { useNavigate } from 'react-router-dom';

const { VITE_BACKEND_URL } = import.meta.env;

function LibrosList() {
  const [librosList, setLibrosList] = useState([]);
  const [selectedLibro, setSelectedLibro] = useState(null);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLibros();
  }, []);

  const fetchLibros = () => {
    easyFetch({
      url: `${VITE_BACKEND_URL}/libros`,
      callback: (jsonData) => {
        setLibrosList(jsonData.data);
      }
    });
  }

  const handleLibroClick = (libro) => {
    setSelectedLibro(libro);
    setIsLightBoxOpen(true);
  }

  const handleCloseLightBox = () => {
    setIsLightBoxOpen(false);
  }

  return (
    <div className="libros-list-container">
      <h2>Lista de libros</h2>

      <div className="cardList">
        {librosList.map(({ id, nombre, imagen }) => (
          <div className="card" key={id}>
            <h3>{nombre}</h3>


            {imagen.startsWith('http') ? (
              <img src={imagen} alt={nombre} />
            ) : (
              <img src={`http://localhost:8080/API/v1/files/${imagen}`} alt={nombre} />
            )}
            
          </div>
))}

      </div>
      {isLightBoxOpen && (
        <LightBox isOpen={isLightBoxOpen} onClose={handleCloseLightBox} libro={selectedLibro}>
          <LibroForm key={selectedLibro.id} libro={selectedLibro} />
        </LightBox>
      )}
    </div>
  );
}

export default LibrosList;



