import './content.css';
import { Component } from 'react';



class Facturas extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
          idclientes: "",
          idpedidos:"",
          valortotal:"",
    
          facturas: [],

          //inicializacion de estados para clientes

          nombre: "",
          apellido:"",
          cedula:"",
          telefono:"",
    
          clientes: [],
    
    
    
        }
      }

    apiCall(url, consecuencia) {
        fetch(url)
          .then(response => response.json())
          .then(data => consecuencia(data))
          .catch(error => console.log(error))
      }
    
    
      componentDidMount() {
        console.log("me monte");
        this.consumirApi();
    
    
    
    
    
      }
    
      consumirApi() {
        this.apiCall("http://localhost:3000/api/facturas", this.mostrarFacturas);
        this.apiCall("http://localhost:3000/api/", this.mostrarClientes);
      }
    
      mostrarFacturas = (data) => {
        console.log("this is data"+data)
        this.setState({
          facturas: data,
          idclientes: data[0].idclientes,
          idpedidos: data[0].idpedidos,
          valortotal: data[0].valortotal,
        })}

        mostrarClientes = (data2) => {
            console.log("this is data"+data2)
            this.setState({
              clientes: data2,
              nombre: data2[0].nombre,
              apellido: data2[0].apellido,
              cedula: data2[0].cedula,
              celular: data2[0].celular
        
        
        
            })}
    

    render() {
          
        let listaFacturas;
        let listanombres;
        
        
        
        listaFacturas = this.state.facturas.map((factura) => {
          let clienteelegido;
          clienteelegido =this.state.clientes.filter(cliente => cliente.idclientes === 1)
         console.log(factura)
            return (
         <tr  className="columnaProduct">
          <td >{factura.cliente.nombre}</td>
          <td >{factura.idpedidos}</td>
          <td >{factura.valortotal}</td>
          
          <td ><button type="button" className="btn-editar"><ion-icon name="create-outline"></ion-icon></button></td>
          <td ><button type="button" className="btn-eliminar"><ion-icon name="trash-outline"></ion-icon></button></td>
        </tr>
              
               
              
              
             
            )
          });
    
    return (

     
      
        
        <div className="lista">
              <div className="cardHeader">
                <h2>
                  Todos los Clientes
                </h2>
                <a href="/" className='btn'>Ver todos </a>
              </div>
              <table>
                <thead>
                  <tr>
                  <td>Cliente</td>
                    <td>Pedido</td>
                    <td>valor total</td>
                    
                    <td>Editar</td>
                    <td>Eliminar</td>
                  </tr>
                </thead>
                <tbody>
                  
                  {listaFacturas}

                </tbody>
              </table>
            </div>
            
      
    )
  }

}

export default Facturas;
  