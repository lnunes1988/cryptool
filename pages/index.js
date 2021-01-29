import React from 'react'
import Mybar from './componentes/menubar'
import Exemplo from './componentes/exemplo'
import 'fontsource-roboto';
import { Button,Container} from '@material-ui/core';
import { Typography,Breadcrumbs,Link,GridListTileBar } from '@material-ui/core';

function sobre() {
{
return <div>



<Mybar></Mybar>
<form>
    <Container><p>
        <input type="text" placeholder="Cotação"/>
        <input type="text" placeholder="Quantidade"/>
        <input type="text" placeholder="Total"/></p>
    </Container>
</form>

<Exemplo></Exemplo>



</div>

      
    }
}

    export default sobre;