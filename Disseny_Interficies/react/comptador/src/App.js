import React, { useState } from 'react'; // Importamos React y el Hook useState

// Definimos el componente funcional App
function App() {
  // Declaramos el estado 'contador' y la función para actualizarlo 'setContador', inicializado en 0
  const [contador, setContador] = useState(0);

  // Función que incrementa el contador en 1
  const incrementarContador = () => {
    setContador(contador + 1); // Actualizamos el estado 'contador' sumándole 1
  };

  // Función que decrementa el contador en 1
  const decrementarContador = () => {
    setContador(contador - 1); // Actualizamos el estado 'contador' restándole 1
  };

  // Función que resetea el contador a 0
  const resetearContador = () => {
    setContador(0); // Reiniciamos el estado 'contador' a 0
  };

  // Retornamos el JSX que renderizará nuestra interfaz
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador de Clics</h1>
      <p>Has hecho clic {contador} veces</p>
      {/* Botón para incrementar el contador */}
      <button onClick={incrementarContador}>Incrementar</button>
      {/* Botón para decrementar el contador */}
      <button onClick={decrementarContador}>Decrementar</button>
      {/* Botón para resetear el contador */}
      <button onClick={resetearContador}>Resetear</button>
    </div>
  );
}

export default App; // Exportamos el componente App para su uso en otros archivos
