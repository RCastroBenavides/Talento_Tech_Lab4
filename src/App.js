import'./App.css';
import {useState,useEffect} from "react";
import Episodios from "./Componentes/Episodios";
import Infoper from "./Componentes/Infoper";
import { useDispatch, useSelector } from 'react-redux';
import { setEpisodios, setInfper, setRM,setEpisodios2, setEpisodiosim } from './reducers';

function App() {
  const disp = useDispatch();
  const jInf = useSelector( state => state.holaApp.rickymort );

async function getData() {
  try {
    const rta = await fetch( 'https://rickandmortyapi.com/api/character');
    if( !rta.ok ) {
      throw new Error( "Er:" + rta.error ) ;
    }
let recjs = await rta.json();
  console.log("=====>" + JSON.stringify(recjs.results));
let lst = [];
  for ( let x=0; x < recjs.results.length ; x += 4) {
      lst.push (recjs.results.slice( x,x+4 ));
    }
  console.log( ":::>"+JSON.stringify(lst));
  //setInfo (lst);
  disp(setRM(lst));

  } catch (error) {
    console.log( "ERRORER:" + error ) ;
  }
};
useEffect( () => { getData() ;}, []);

let verEpisodios = (d) => {
  //console.log( "Origen: "+d.origin.name+"----- URL"+d.origin.url);
  disp( setEpisodios (d.episode));
  disp( setEpisodios2 (d.name));
  disp( setEpisodiosim (d.image));
}
let verInfo = (d) => {
  console.log( "Origen: "+d.origin.name+"----- URL"+d.origin.url);
  disp( setInfper ("Nombre:"+ d.name+ "----- Origen: "+d.origin.name+"----- URL: "+d.origin.url));
}
return (
<div className='App'>
  <h1 className="heading"> PERSONAJES DE RICK & MORTY </h1><div className='container'>
    <div className="left">
      <div className='image-container'>
        {jInf.map((da, ia) => (
          <div key={ia} className='image-row'>
            {
            da.map((d, i) => (
              <div key={d.id} className='image-item-container'>
                <img src={d.image} className="image-item" alt={"Imagen ${i}"} />
                <div className='details-container'>
                <span className='tamlet' onClick={() =>  {verEpisodios(d)}}> {d.name} </span>
                <span className='tamlet' onClick={() =>  {verInfo(d)}}> {d.status} </span>              
                </div>
                </div>
            ))
          }
              </div> 
            ))}
          </div>
      </div>
  </div>
  </div>
            
);
}
export default App;