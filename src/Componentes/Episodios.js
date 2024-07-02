import { getValue } from "@testing-library/user-event/dist/utils";
import { useSelector } from "react-redux";

function Episodios() {
  const jInf = useSelector( state => state.holaApp.episodios );
  const nm = useSelector( state => state.holaApp.nmm );
  const im2 = useSelector( state => state.holaApp.imgg );
       return(
    <div className="App"> 
      <h1 className="heading">LOS EPISODIOS DEL PERSONAJE </h1>
      <img src={im2}  alt={"Imagen ${i}"} />
      
          <ul><h1>LISTA CAPITULOS DEL PERSONAJE: "{nm}"</h1>
            {jInf.map((d, index) => (
                
                <li key={index}>
                  <span className="tamlet">{d}</span>
                </li>
            ))} 
            </ul>
          </div>
    );
  }
export default Episodios ;