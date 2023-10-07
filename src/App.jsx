import './App.css'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Footer from './Components/Footer/Footer'

import { useState, React } from 'react'
import CurrencyContext from './Context/Context'

function App () {

  let currencyData;

  async function getDataFromAPI () {

    const [data] = useState (currencyData);

    let url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_SBt6oPcIwI9e7c9CmIXmrsbF7LSRvC8zZkxTWDER";

    fetch (url)

      .then ((response) => {

        return response.json();

      })

      .then((rawData) => {

        currencyData = rawData.data
        console.log(currencyData)
        return currencyData;

      })

  }

  getDataFromAPI ()

    const [data] = useState (currencyData);

  return (

    <CurrencyContext.Provider value={{data}}>
      <Header />
      <Landing />
      <Footer />
    </CurrencyContext.Provider>


  )
}

export default App