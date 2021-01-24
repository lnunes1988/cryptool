async function bitcoin(resquest, response){

    const dynamicDate = new Date();

    const bitcoinResponse = await fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
    const bitcoinResponseJson = await bitcoinResponse.json();
    const ultimoPreco = bitcoinResponseJson.last;
//ts
        response.json({
            date: dynamicDate.toGTMString(),
            valor: ultimoPreco
        });
}