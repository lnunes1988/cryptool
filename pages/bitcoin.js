import React from 'react'
import Mybar from './componentes/menubar'
import 'fontsource-roboto';
import { Button,Container} from '@material-ui/core';
import dadosbit from './api/btc';


function sobre() {
{
return <div>



<Mybar></Mybar>

{dadosbit}
<br/>
<table>

<tr><td>{dadosbit}</td><td>10</td><td>1</td><td>1</td></tr>
<tr><td>2</td><td>10</td><td>1</td><td>1</td></tr>
<tr><td>2</td><td>10</td><td>1</td><td>1</td></tr>
<tr><td>2</td><td>10</td><td>1</td><td>1</td></tr>

</table>

<Button className='class MuiButton-outlined'>Atualizar</Button>

</div>

      
    }
}

    export default sobre;