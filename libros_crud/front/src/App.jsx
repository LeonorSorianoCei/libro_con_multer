import '@/App.css'; // Importa el archivo CSS correctamente

import { Routes, Route } from 'react-router-dom'; // Importa solo lo necesario de react-router-dom
import Layout from '@/pages/Layout'; // Importa el componente Layout

// Páginas (mis componentes principales)
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import LibrosList from '@/pages/LibrosList'; // Cambia el nombre de BookList a LibrosList
import LibroAdd from '@/pages/LibroAdd'; // Cambia el nombre de BookAdd a LibroAdd
import AuthorList from '@/pages/AuthorList';
import Login from '@/pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lista" element={<LibrosList />} /> {/* Cambia la ruta de BookList a LibrosList */}
          <Route path="/agregar" element={<LibroAdd />} /> {/* Cambia la ruta de BookAdd a LibroAdd */}
          <Route path="/autores" element={<AuthorList />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
