import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {

    const [data, setData] = useState ({});

    useEffect ( () => {

        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        // https://api.currencyapi.com/v3/latest?apikey=fca_live_GKZ4tm7XzxoEf4M8pJJonsM8irHvYk5tjOux4UYe&currencies=CLP%2CEUR%2CMXN%2CUYU%2CCOP%2CARS%2CVEF
        fetch (url)

            .then ((response) => response.json())
            .then ((response) => setData(response[currency]))

    }, [currency])

    // console.log (data)
    return data;
}

export default useCurrencyInfo