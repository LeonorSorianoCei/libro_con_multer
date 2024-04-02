import LibroForm from "@/components/LibroForm"; 

function LibroAdd() {
  const emplyLibro = {
    id: 0,
    nombre: "", 
    imagen: "",
    descripcion: "",
  };

  return (
    <>
      <LibroForm postre={emplyLibro} /> 
    </>
  );
}

export default LibroAdd;
