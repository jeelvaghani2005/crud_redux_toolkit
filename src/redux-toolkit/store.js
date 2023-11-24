import userreducer from './reducer/reducer'
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        userreducer: userreducer
    }
})

export default store