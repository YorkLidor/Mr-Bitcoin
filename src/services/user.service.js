'use strict'

const user = {
    _id: 4579624,
    name: "Puki Ben David",
    balance: 100,
    transactions: []
}

export const userService = {
    getUser,
}

async function getUser(){
    try {
        return Promise.resolve(user)
    } catch (err) {
        console.log('cannot get user',err)
    }
}