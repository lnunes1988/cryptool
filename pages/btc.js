import { Typography,Breadcrumbs,Link,MenuList,MenuItem,GridListTileBar,Button,Container,Grid } from '@material-ui/core';

function bitcoin() {

    const dynamicDate = 'new Date();'
    const dynamicDateString = dynamicDate;

    return (
        <div>
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
        </div>
    )
}

export default bitcoin