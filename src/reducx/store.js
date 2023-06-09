import {configureStore} from "@reduxjs/toolkit"
import IncDecReducer from "./slices/IncDec"
import SignUpReducer from "./slices/SignUpSlice";
const store = configureStore({
    reducer:{
        todo_list:IncDecReducer,
        signup:SignUpReducer
    }
})

export default store;