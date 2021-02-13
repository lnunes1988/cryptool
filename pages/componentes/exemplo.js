import React, {Component} from 'react'
import { Button,Container} from '@material-ui/core';


function bitco() {
    console.log("add")    ;
    } 

export default class Exemplo extends Component {
   

    render() {
return (<div>

<Button onClick={soma} className='class MuiButton-outlined'>Atualizar</Button>
<table></table>
</div>
)};
}

function soma() {
    console.log("Somando")
 
}