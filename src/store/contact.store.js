import { contactService } from "../services/contact.service.js"

export const contactStore = {
    state: {
        contacts: null,
    },
    getters: {
        contacts({ contacts }) {
            return contacts
        },
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(c=> c._id === contactId)
            state.contacts.splice(idx, 1)
        },
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                const contacts = await contactService.getContacts()
                commit({ type: 'setContacts', contacts })
                // return contacts
            } catch (err) {
                console.log('err:', err)
            }
        },
        async removeContact({ commit }, payload) {
            commit(payload)
            try {
                await contactService.deleteContact(payload.contactId)
            } catch (err) {
                throw err
            }
        },
        // saveProduct({ commit }, { product }) {
        //     const actionType = (product._id) ? 'updateProduct' : 'addProduct'
        //     return productService.save(product)
        //         .then((savedProduct) => {
        //             commit({ type: actionType, product: savedProduct })
        //             return savedProduct
        //         })
        // },
    }
}