import Gun from 'gun'
import fs from 'fs'
import SEA from 'gun/sea.js'

export const gun = Gun()
export default Gun
export const user = gun.user()
export let alias = user?.is?.alias
export let pair

gun.on('auth', ack => {
    pair = ack.sea
})

export const signup = (alias, password) => {
    user.create(alias, password, ack => {
        if (ack.err) console.error(ack.err)
        else user.auth(alias, password, ack => {
            if (ack.err) console.error(ack.err)
        })
    })
}

export const signin = (alias, password) => {
    user.auth(alias, password, ack => {
        if (ack.err) console.error(ack.err)
    })
}

export const signout = () => user.leave()


export const wait_for_it = count => setTimeout(() => count++, 2000)