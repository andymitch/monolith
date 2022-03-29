import GUN from 'gun'
import SEA from 'gun/sea'
import { writable } from 'svelte/store'

export const db = GUN()

export const user = db.user()//.recall({sessionStorage: true})

export const username = writable('');

let pair

user.get('alias').on(v => username.set(v))

db.on('auth', async ack => {
    console.log(ack)
    const alias = await user.get('alias')
    console.log(alias)
    username.set(alias)
    pair = ack.sea
    alert(`signed in as ${alias}`)
});

export const signup = (alias, password, login = false) => {
    user.create(alias, password, ack => {
        if (ack.err) alert(ack.err)
        else if (login) user.auth(alias, password, ack => {if (ack.err) alert(ack.err)})
    })
}

export const signin = (alias, password, force = false) => {
    user.auth(alias, password, ack => {
        if (ack.err === 'Wrong user or password.' && force) signup(alias, password, false)
        else if (ack.err) alert(ack.err)
    })
}

export const encrypt = async (message, key) => {
    return await SEA.encrypt(message, key)
}

export const encrypt_for = async (message, to_epub) => {
    return await encrypt(message, await SEA.secret(to_epub, pair))
}

export const decrypt = async (secret, key) => {
    return await SEA.decrypt(secret, key)
}

export const decrypt_from = async (secret, from_epub) => {
    return await decrypt(secret, await SEA.secret(from_epub, pair))
}