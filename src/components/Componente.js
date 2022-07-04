import React, { Component } from "react";
/*OP1
class Componente extends Component {
    render(){
        return <h2>Hola soy un Componente</h2>
    }
}
*/
/*OP2
class Componente extends Component {
    render(){
        return <h2>{this.props.msg}</h2>
    }
}
*/
/*OP3
function Componente(props){
    return <h2>{props.msg}</h2>
}
*/
const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;