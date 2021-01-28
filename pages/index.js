
import 'fontsource-roboto';
import { Typography,Breadcrumbs,Link,MenuList,MenuItem,GridListTileBar,Button,Container,Grid } from '@material-ui/core';

function sobre() { 
    return (<div>
            
    <GridListTileBar title='Painel de Criptomoedas' titlePosition='top'></GridListTileBar>
    <br></br><br></br><p></p>
    <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Link color="inherit" href="/" >
            Geral
        </Link>
        <Link color="inherit" href="/api/btc" >
            Bitcoin
        </Link>
        <Link color="inherit" href="/api/eth" >
            Ethereum
        </Link>
        <Typography color="textPrimary">Em breve...</Typography>
    </Breadcrumbs>
    
<form>
    <Container><p>
        <input type="text" placeholder="Cotação"/>
        <input type="text" placeholder="Quantidade"/>
        <input type="text" placeholder="Total"/></p>
    </Container>
</form>

<Button className='class MuiButton-outlined'>Atualizar</Button>
<bitcoin teste></bitcoin>

</div>

    )}

    export default sobre