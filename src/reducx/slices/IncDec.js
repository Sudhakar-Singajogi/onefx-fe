import {createSlice} from "@reduxjs/toolkit"

const IncDec = createSlice({
    name:"IncDec",
    initialState:{
        todolists:[]
    },
    reducers:{
        addTodo:(state, action) => {

            state.todolists = [...state.todolists, action.payload]
        },
        deleteTodo:(state, action) => { 
            state.todolists = state.todolists.filter(
                (item) => item.id !== action.payload
              );
              
        }
    }
})

export const {addTodo, deleteTodo} = IncDec.actions
export default IncDec.reducer;