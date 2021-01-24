async function btc(resquest, response){

    const dynamicDate = new Date();

    const bitcoinResponse = "teste";//await fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
    const bitcoinResponseJson = "teste"//await bitcoinResponse.json();
    //const ultimoPreco = bitcoinResponseJson.ticker.last;
//ts
        response.json({
            date: dynamicDate.toGTMString()
        
        })
}

export default btc;