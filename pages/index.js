import React from 'react'
import Mybar from './componentes/menubar'
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

<Button className='class MuiButton-outlined'>Atualizar</Button>

</div>

      
    }
}

    export default sobre;