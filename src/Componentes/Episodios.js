import { useSelector } from "react-redux";

function Episodios(props) {
    const lst1 = props.ep;
    let c = useSelector( state => state.cont) ;
    let lst = useSelector( state => state.epsdios) ;
   return(
    <div> 
      <h1>Estoy en episodios - {c} </h1>
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