//store untuk daftar stage managemen
import { configureStore } from '@reduxjs/toolkit'
import { Rx } from './rx'

const orang = new Rx("orang", []);
const user = new Rx('user', {});
const listRenja = new Rx('listRenja', [])
const listStatus = new Rx('listStatus', [])
const renjaOn = new Rx('renjaOn', [])
const muncul = new Rx("muncul", Boolean)
const kesana = new Rx('kesana', Number)

const store = configureStore({
    reducer: {
        orang: orang.reducer,
        user: user.reducer,
        listRenja: listRenja.reducer,
        listStatus: listStatus.reducer,
        muncul: muncul.reducer,
        kesana: kesana.reducer,

        renjaOn: renjaOn.reducer,
    },
})

export { orang, store, user, listRenja, listStatus, muncul, kesana, renjaOn}