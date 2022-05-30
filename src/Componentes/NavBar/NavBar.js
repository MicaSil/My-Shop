import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return ( 
        <div className="contenedor">
            <nav className="navBar">
                <h1 className="logo">INFINITE</h1>
                <ul>
                <li><a href="#0">Damas</a></li>
                <li><a href="#0">Hombres</a></li>
                <li><a href="#0">Niños</a></li>
                </ul>
                <CartWidget className="carrito"/>
            </nav>
            
        </div>
    )
}

export default NavBar