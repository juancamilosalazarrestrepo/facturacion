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

          idclientesCP: "",
          idpedidosCP: "",
          idfacturasCP: "",
          numerofactura:"",
          
          clientespedidos: [],

          productos: [],
          nombreproducto: "",
                  descripcion: "",
                  precio: ""
    
    
    
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
        this.apiCall("http://localhost:3000/api/pedidocliente", this.mostrarClientesPedidos);
        this.apiCall("http://localhost:3000/api/productos", this.mostrarProductos);
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

            mostrarClientesPedidos = (data3) => {
              console.log("this is data"+data3)
              this.setState({
                clientespedidos:data3,
                idclientesCP: data3[0].idclientes,
                idpedidosCP: data3[0].idpedidos,
                idfacturas: data3[0].idfacturas,
                numerofactura:data3[0].numerofactura
              })}

              mostrarProductos = (data4) => {
                console.log("this is data"+ data4)
                this.setState({
                  productos: data4,
                  nombreproducto: data4[0].nombreproducto,
                  descripcion: data4[0].descripcion,
                  precio: data4[0].precio
            
            
            
                })}
    

    render() {
          
        let listaFacturas;
        let listaproductos;

        let productos;

        let nombresdeproductos;




        
        
        
        listaFacturas = this.state.facturas.map((factura) => {
          

          listaproductos= this.state.clientespedidos.filter(clientepedido => clientepedido.idclientes === factura.idclientes )
          
          
           

         

           productos= listaproductos.map((producto) => {
            console.log(this.state.productos);
            nombresdeproductos = this.state.productos.filter(product => product.idproductos == producto.pedidos[0].idproductos);
            console.log(nombresdeproductos);
            return (<>{nombresdeproductos[0].nombreproducto}</>)
           })

         
            return (
         <tr  className="columnaProduct">
          <td >{factura.cliente.nombre + " " + factura.cliente.apellido}</td>
          <td >{factura.idpedidos}</td>
          <td> {productos}</td>
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
  