async function btc(resquest, response){

    const dynamicDate = new Date();

    const bitcoinResponse = await fetch("https://www.mercadobitcoin.net/api/BTC/ticker/");
    const bitcoinResponseJson = await bitcoinResponse.json();
    const ultimoPreco = bitcoinResponseJson.ticker.last;
//ts
        response.json({
            textdate: "dynamicDate",
            Preço: ultimoPreco
        })
}

export default btc;