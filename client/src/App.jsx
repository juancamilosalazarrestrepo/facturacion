import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Component } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

import NavBar from './components/NavBar';

import UserPage from './pages/UserPage';




class App extends Component {

  consumirApi() {
    this.apiCall("http://localhost:3000/api", this.mostrarGif);
    this.apiCall("http://localhost:3000/api/users", this.mostrarUsuarios);

  }

  mostrarGif = (data) => {

    this.setState({
      productos: data,
      nombre: data[0].name,

      lastProduct: data

    })
    console.log(this.state.nombre);



    console.log(this.state.productos)
    console.log("soy el primer usuarii0" + this.state.nombre)
    
  }


  mostrarUsuarios = (data2) => {
    console.log(data2)
    this.setState({
      usuarios: data2,
      nombredeuser: data2[0].name

    })


  }


  render() {

    let listProducts;
    let imagen;

    listProducts = this.state.productos.map((producto) => {
      console.log(producto.name);
     
      return (
        <tr  className="columnaProduct">
          <td ><div className="thumContainer"><img className="thumProduct" src={imagen} alt="" /></div></td>
          <td >{producto.name}</td>
          <td >${producto.price}</td>
          <td >{producto.categoryProductsId}</td>
          <td ><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
          <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>
      )
    });

  


    return(
        <BrowserRouter>
           <NavBar/>

           
         <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/users' element={<UsersPage/>} />
          <Route path='/user/:id' element={<UserPage/>} />
          <Route path='*' element={<NotFoundPage/>} />

         </Routes>
    
        </BrowserRouter>
    )

}

}

export default App;