//store untuk daftar stage managemen
import { configureStore } from '@reduxjs/toolkit'
import { Rx } from './rx'

const orang = new Rx("orang", []);
const user = new Rx('user', {});
const listRenja = new Rx('listRenja', [])
const muncul = new Rx("muncul", Boolean)
const kesana = new Rx('kesana', Number)

const store = configureStore({
    reducer: {
        orang: orang.reducer,
        user: user.reducer,
        listRenja: listRenja.reducer,
        muncul: muncul.reducer,
        kesana: kesana.reducer
    },
})

export { orang, store, user, listRenja, muncul, kesana}