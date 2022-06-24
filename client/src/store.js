//store untuk daftar stage managemen
import { configureStore } from '@reduxjs/toolkit'
import { Rx } from './rx'

const orang = new Rx("orang", []);
const user = new Rx('user', {});

const store = configureStore({
    reducer: {
        orang: orang.reducer,
        user: user.reducer
    },
})

export { orang, store, user}