
import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUserReducer(state,action) {
             state.push(action.payload);
            //  console.log(action.payload);
             
        },
        removeUserReducer(state,action) {
            // state.pop(action.payload);
            state.splice(action.payload, 1);
            console.log("Deleted-ID" +" "+ action.payload);
        },
        deleteUsersReducer(state,action) {
            
            return [];
            // console.log(" hi user Deletd");
            
        },
    },
});

console.log(userSlice.actions);


export default userSlice.reducer;

export const {addUserReducer, removeUserReducer, deleteUsersReducer} = userSlice.actions;