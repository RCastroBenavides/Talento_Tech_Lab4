import { NavLink } from "react-router-dom";

function Menu() {
    return(
<nav> 
   <NavLink className={({isActive}) => (isActive ? "activo" : null )} to="/App"> PERSONAJES </NavLink>
   <NavLink className={({isActive}) => (isActive ? "activo" : null )} to="/epi">EPISODIOS </NavLink>
   <NavLink className={({isActive}) => (isActive ? "activo" : null )} to="/inf">Info Personal</NavLink>
</nav>
);
}
export default Menu;