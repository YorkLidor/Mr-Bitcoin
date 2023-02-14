'use strict'

import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    // getAvgBlockSize,
}

async function getRate() {
    try {
        // const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        // return rate.data
        return 0.00004568
    } catch (err) {
        console.log('cannot get rate', err)
    }
}

getMarketPriceHistory()
async function getMarketPriceHistory() {
    try {
        const marketData = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        const data = marketData.data.values
        let dates = []
        let prices = []

        for (const obj of data) {
            let date = new Date(obj['x']*1000);
            date = (date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear());
            dates.push(date)
            prices.push(obj['y'])
        }
        return {dates , prices}
    } catch (err) {
        console.log('cannot get data', err)

    }
}