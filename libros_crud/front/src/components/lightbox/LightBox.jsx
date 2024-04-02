import React from "react";
import "./LightBox.css";

const LightBox = ({ isOpen, onClose, libro, children }) => {
  const toggleLightBox = () => {
    onClose();
  };

  return (
    <section>
      {isOpen && (
        <div className="Lightbox-container">
          <div className="Lightbox-backdrop" onClick={toggleLightBox}></div>
          <div className="Lightbox-content">
            <button className="Lightbox-close" onClick={toggleLightBox}>
              X
            </button>
            <h2>{libro.nombre}</h2>
            <img src={libro.imagen} alt={libro.nombre} />
            <p><strong>Instrucciones:</strong> {libro.instrucciones}</p>
            {children}
          </div>
        </div>
      )}
    </section>
  );
};

export default LightBox;
