import'./App.css';
import {useState,useEffect} from "react";
import Episodios from "./Componentes/Episodios";
import Infoper from "./Componentes/Infoper";
import { useDispatch } from 'react-redux';
import { setIP, setInc } from './action';
import { setEps } from './action';

function App() {
  let disp = useDispatch();
  const [jInfo,setInfo] = useState([]);
     
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
let verInfo = (d) => {
  console.log( "Origen: "+d.origin.name+"----- URL"+d.origin.url);
  disp( setIP ("Origen: "+d.origin.name+"----- URL"+d.origin.url));
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
                <div className='details-container'>
                <button className='tamlet' onClick={() =>  disp(setEps(d.episode))}> {d.name} </button>
                  <button className='tamlet' onClick={() => { verInfo(d); } }> OTRA INFO {d.status} </button>
                  <button className='tamlet' onClick={() =>  disp(setInc(4))}> inc</button>
                  
                </div>
                </div>
            ))
          }
              </div> 
            ))}
          </div>
      </div>

    <div className='right'>
      <div className='arriba'>
        <Episodios />
      </div>
      <div className="abajo">
        <Infoper />
      </div>
    </div>
  </div>
  </div>
            
);
}
export default App;