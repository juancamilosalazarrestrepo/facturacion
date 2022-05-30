import './crearfactura.css';
import { Component } from 'react';



class CrearFactura extends Component {
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
    
    
    
        };
        this.handleChange = this.handleChange.bind(this);
        this.crearfactura = this.crearfactura.bind(this);
      }

    
    
      componentDidMount() {
        console.log("me monte");
        
    
    
    
    
    
      }

     componentDidUpdate() {
        console.log("me monte");
        
    
    
    
    
    
      }
    
      
    
     

                 //--------------- funciones para crear factura-----------------//

                 handleChange(event){
       
                    const target = event.target;
                    const value = target.type === 'checkbox' ? target.checked : target.value;
                    const name = target.name;
                
                    this.setState({
                      [name]: value
                    });
                  }

                async crearfactura(event) {

                
       
                    const nuevafactura = {
                        idclientes:3,
                        idpedidos:5,
                        valortotal:5000,
                        numerofactura:3,
                       
                    }
                    console.log("esta es la nueva factura" + nuevafactura)
            
                     fetch('http://localhost:3000/api/crearfactura',{
                        method:'POST',
                        body:JSON.stringify(nuevafactura),
                        headers:{
                            "Content-type":'application/json'
                        }
                     }).then(res=>res.json())
                     .then(data5 => console.log(JSON.parse(data5)))
                     



                     

                     


                     
                    
                    

            
                    event.preventDefault();
                  }


                  
                  
    

                render() {
          
        



         

         
    return (

     
      
        
        <div className="contenedordefacturas">
             
                  
                 


                  <form onSubmit={this.crearfactura}>
                     <label>cliente</label>
                     <input type="number" /><br/>
                     <label>producto</label>
                     <input type="number" />
                     <label>cantidad</label>
                     <input type="number" />
                     
                     <input type="submit" value="Submit" />

                  </form>

                  

                
            </div>
            
      
    )
  }

}

export default CrearFactura;
  