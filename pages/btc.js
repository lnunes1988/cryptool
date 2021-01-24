function btc() {

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGTMString();

    return (
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}

export default btc