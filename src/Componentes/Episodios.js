//import {useRef} from "react";

function Episodios(props) {
  const lst = props.ep;
        return(
    <div> 
      <h1>Estoy en episodios </h1>
          <ul>
            {lst.map((d, index) => (
                <li key={index}>
                  <span className="tamlet">{d}</span>
                </li>
            ))} 
            </ul>
          </div>
    );
  }

export default Episodios ;