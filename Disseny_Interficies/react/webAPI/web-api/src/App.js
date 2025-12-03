import React, { useState, useEffect } from 'react'; 

import './App.css'; 

  

function App() { 

  // === ESTATS === 

  // 'ciutatSeleccionada' emmagatzema la ciutat que l'usuari tria al desplegable. 

  // Comença per defecte amb 'Barcelona'. 

  const [ciutatSeleccionada, setCiutatSeleccionada] = useState('Barcelona'); 

  

  // 'dadesTemps' emmagatzema la informació rebuda de l'API. 

  // S'inicialitza a 'null' perquè encara no hem rebut dades. 

  const [dadesTemps, setDadesTemps] = useState(null); 

  

  // 'carregant' ens servirà per mostrar un missatge mentre esperem la resposta de l'API. 

  const [carregant, setCarregant] = useState(false); 

  

  // === HOOK useEffect === 

  // Aquest hook s'executa cada cop que el valor de 'ciutatSeleccionada' canvia. 

  // És el lloc ideal per fer trucades a APIs (efectes secundaris). 

  useEffect(() => { 

    // Si no hi ha cap ciutat seleccionada, no facis res. 

    if (!ciutatSeleccionada) return; 

  

    // Funció asíncrona per obtenir les dades del temps. 

    const obtenirTemps = async () => { 

      setCarregant(true); // Comencem la càrrega 

      setDadesTemps(null); // Resetejem les dades anteriors 

  

      // Substitueix 'LA_TEVA_API_KEY' per la clau que has obtingut de WeatherAPI.com 

      const apiKey = '240d263023fc4434983154225253010'; 

      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciutatSeleccionada}&aqi=no`; 

  

      try { 

        const resposta = await fetch(url); // Fem la petició a l'API 

        if (!resposta.ok) { 

          throw new Error('La resposta de la xarxa no ha estat correcta'); 

        } 

        const dades = await resposta.json(); // Convertim la resposta a format JSON 

        setDadesTemps(dades); // Guardem les dades a l'estat 

      } catch (error) { 

        console.error("Error en obtenir les dades del temps:", error); 

        // Aquí podríem establir un estat d'error per mostrar-lo a l'usuari 

      } finally { 

        setCarregant(false); // Aturem la càrrega, tant si ha anat bé com si no 

      } 

    }; 

  

    obtenirTemps(); // Cridem la funció per obtenir les dades 

  }, [ciutatSeleccionada]); // L'array de dependències fa que el hook s'executi només quan canvia 'ciutatSeleccionada' 

  

  // === RENDERITZAT DEL COMPONENT === 

  return ( 

    <div className="App"> 

      <header className="App-header"> 

        <h1>El Temps amb React</h1> 

         

        {/* Desplegable per seleccionar la ciutat */} 

        <select  

          value={ciutatSeleccionada}  

          onChange={(e) => setCiutatSeleccionada(e.target.value)} 

        > 

          <option value="Barcelona">Barcelona</option> 

          <option value="Madrid">Madrid</option> 

          <option value="Tokio">Tokio</option> 

           <option value="Bruges">Bruges</option> 

           <option value="Valencia">Valencia</option> 

        </select> 

  

        {/* Secció per mostrar els resultats */} 

        <div className="resultat-temps"> 

          {/* Si està carregant, mostrem un missatge */} 

          {carregant && <p>Carregant...</p>} 

  

          {/* Si tenim dades, les mostrem. Usem l'encadenament opcional (?.) per evitar errors si un objecte és null */} 

          {dadesTemps && ( 

            <div> 

              <h2>Temps a {dadesTemps.location?.name}</h2> 

              <p><strong>Temperatura:</strong> {dadesTemps.current?.temp_c}°C</p> 

              <p><strong>Condició:</strong> {dadesTemps.current?.condition?.text}</p> 

              <img src={dadesTemps.current?.condition?.icon} alt="Icona del temps" /> 

            </div> 

          )} 

        </div> 

      </header> 

    </div> 

  ); 

} 

  

export default App; 