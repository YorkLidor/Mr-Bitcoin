import { createStore } from 'vuex'
import { contactStore } from './contact.store.js'
import { bitcoinStore } from './bitcoin.store.js'

export const store = createStore({
    strict: true,
    modules: {
        bitcoinStore,
        contactStore,
    }
})

store.subscribe((cmd, state) => {
    console.log('**** Store state changed: ****')
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
    console.log('*******************************')
})

