import { NavLink } from "react-router-dom"
import './content.css';
import { Component } from 'react';



class Sidebar extends Component {

    render() {
    
        return (


<div className='navigation'>
          <ul>
            <li className=''>
              <a href="/">
                <span className='icon'><img className="logoNavbar" src="http://localhost:3000/img/altisport-logo.png" alt="" /></span>
                <span className="title altisport">Altisports</span>
                
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                <span className="title">Panel Administrativo</span>
              </a>
            </li>
            <li>
            <a >
            <span className='icon'><ion-icon name="people-outline"></ion-icon></span>

             <NavLink className={({isActive})=>isActive ? 'active' : ""} to="/createclient">Crear Cliente</NavLink>
              </a>
              
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="bicycle-outline"></ion-icon></span>
                <span className="title">Lista de Productos</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="person-add-outline"></ion-icon></span>
                <span className="title">Agregar Usuario</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="basketball-outline"></ion-icon></span>
                <span className="title">Agregar Producto</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
                <span className="title">Salir</span>
              </a>
            </li>


          </ul>
        </div>
        )
    }


}



export default Sidebar;