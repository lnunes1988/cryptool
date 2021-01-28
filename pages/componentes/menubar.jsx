import React, {Component} from 'react'
import { Typography,Breadcrumbs,Link,GridListTileBar } from '@material-ui/core';

export default class Mybar extends Component {
    render() {
return (<div>
    <GridListTileBar title='Painel de Criptomoedas' titlePosition='top'></GridListTileBar>
    <br></br><br></br><p></p>
    <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Link color="inherit" href="/" >
            Geral
        </Link>
        <Link color="inherit" href="/api/btc" >
            Preço Bitcoin 
        </Link>
        <Link color="inherit" href="/bitcoin" >
            Bitcoin
        </Link>
        <Link color="inherit" href="/api/eth" >
            Ethereum
        </Link>
        <Typography color="textPrimary">Em breve...</Typography>
    </Breadcrumbs>
    </div>)
    };
}

