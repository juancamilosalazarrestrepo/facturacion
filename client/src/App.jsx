import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Component } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

import NavBar from './components/NavBar';


import UserPage from './pages/UserPage';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import CreateClient from './components/CreateClient';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
      nombre: "",
     
     
      clientes: [],
     
   

    }
  }




  apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error))
  }


  componentDidMount () {
    console.log("me monte");
    this.consumirApi();
    
   
    


  }

  consumirApi() {
    this.apiCall("http://localhost:3000/api", this.mostrarGif);
   

  }

  mostrarGif = (data) => {

    this.setState({
      clientes: data,
      nombre: data[0].nombre,

      

    })
   

    
 
    
  }


  





 

  render() {

    

    let listaClientes;

    listaClientes = this.state.clientes.map((cliente) => {
    
   
      return (
        
         
          <span>{cliente.nombre}</span>
        
       
      )
    }

    
    )
  


    return(
        <BrowserRouter>
           

           <Sidebar/>


           
          
           


           
         <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/users' element={<UsersPage/>} />
          <Route path='/user/:id' element={<UserPage/>} />
          <Route path='/createclient/' element={<CreateClient/>} />
          
          <Route path='*' element={<NotFoundPage/>} />




         </Routes>

         
         <p>hola</p>

     <div>{listaClientes}</div>


       <Content/>
    
        </BrowserRouter>
    )

}

}

export default App;