import {configureStore} from "@reduxjs/toolkit"
import reducer from "./slices/slice"

export const store=configureStore({
    reducer:{reducer}
})

