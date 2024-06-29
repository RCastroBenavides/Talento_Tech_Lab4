import'./App.css';
import {useState,useEffect} from "react";
import Episodios from "./Componentes/Episodios";
import Infoper from "./Componentes/Infoper";
import axios from 'axios';

function App() {

  const [oEpis,setEpis] = useState([]);
  const [jInfo,setInfo] = useState([]);
  const [sInfp,setInfp] = useState("");
   
async function getData() {
  try {
    const rta = await fetch( 'https://rickandmortyapi.com/api/character' /*, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    } */
);
    if( !rta.ok ) {
      throw new Error( "Er:" + rta.error ) ;
    }
let recjs = await rta.json();
  console.log("=====>" + JSON.stringify(recjs.results));
let lst = [];
  for ( let x=0; x < recjs.results.length ; x += 3) {
      lst.push (recjs.results.slice( x,x+3 ));
    }
  console.log( ":::>"+JSON.stringify(lst));
  setInfo (lst);

  } catch (error) {
    console.log( "ERRORER:" + error ) ;
  }
};

useEffect( () => { getData() ;}, []);

let verEpisodios = (d) => {
  console.log( "Episodios: "+JSON.stringify(d.episode));
  setEpis (d.episode);
 }
let verInfo = (d) => {
    console.log( "Origen: "+d.origin.name+"----- URL"+d.origin.url);
    setInfp ("Origen: "+d.origin.name+"----- URL"+d.origin.url);
 }

return (
<div className='App'>
  <h1> PERSONAJES DE RICK & MORTY </h1><div className='container'>
    <div className='left'>
      <div className='image-container'>
        {jInfo.map((da, ia) => (
          <div key={ia} className='image-row'>
            {
            da.map((d, i) => (
              <div key={d.id} className='image-item-container'>
                <img src={d.image} className="image-item" alt={"Imagen ${i}"} />
                <p>
                <div className='details-container'>
                  <button className='tamlet' onClick={() => { verEpisodios(d); } }> PERSONAJE: {d.name} </button>
                  <button className='tamlet' onClick={() => { verInfo(d); } }> OTRA INFO {d.status} </button>
                </div>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className='right'>
      <div className='Arriba'>
        <Episodios ep={oEpis} />
      </div>
      <div className="Abajo">
        <Infoper ip={sInfp} />
      </div>
    </div>
  </div>
  </div>
            
);
}
export default App;