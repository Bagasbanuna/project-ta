//pengolahan stage managemen
import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

class Rx{

    init() {
        let Dis = () => useDispatch()
        let Sel = () => useSelector((state) => state[this.name]);
        this.dis = Dis();
        this._val = Sel();
    }

    /**@type {string | {} | [] | boolean | number} */
    get val(){
        return this._val;
    }

    set val(value) {
        setTimeout(() => {
            this.dis(this.state.actions.set(value));
        },1);
    }

    /**
     * @param {string} name 
     * @param {object | string | {} | [] | boolean | number} value
     * */
    constructor(name, value) {
        this.name = name;
        this.state = createSlice({
            name: name,
            initialState: value,
            reducers: {
                set: (state, action) => state = action.payload
            },
        })

        this.reducer = this.state.reducer;

    }
}

export { Rx }

