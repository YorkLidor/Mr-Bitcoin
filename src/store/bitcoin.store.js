import { bitcoinService } from "../services/bitcoin.service.js"

export const bitcoinStore = {
    state: {
        rate: null,
        data: null,
    },
    getters: {
        rate({ rate }) {
            return rate
        },
        data({ data }) {
            return data
        }
    },
    mutations: {
        setRate(state, { rate }) {
            state.rate = rate
        },
        setData(state, { data }) {
            state.data = data
        },
    },
    actions: {
        async loadRate({ commit }) {
            try {
                const rate = await bitcoinService.getRate()
                commit({ type: 'setRate', rate })
                return rate
            } catch (err) {
                throw err
            }
        },
        async loadData({ commit }) {
            try {
                const data = await bitcoinService.getMarketPriceHistory()
                commit({ type: 'setData', data })
                return data
            } catch (err) {
                throw err
            }
        },
    }
}