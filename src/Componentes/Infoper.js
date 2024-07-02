import { useSelector } from "react-redux";

function Infoper() {
  const lst = useSelector( state => state.holaApp.infper);
  const dat1 = lst.split("-----")
return(
     <div className="App">
      <h1 className="heading">INFORMACIÓN DEL PERSONAJE </h1>
      <h1> </h1>
        <ul>{dat1[0]} </ul>
        <ul>{dat1[1]} </ul>
        <ul>{dat1[2]} </ul>
      </div>
      );
    }
    export default Infoper;