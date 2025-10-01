import React from 'react'; // Importamos React
import ReactDOM from 'react-dom/client'; // Importamos ReactDOM para renderizar en el DOM
import App from './App'; // Importamos el componente App
import './index.css'; // Importamos estilos globales (opcional)

// Obtenemos el elemento raíz del DOM donde se montará la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos el componente App dentro del elemento raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
