const { createSlice } = require("@reduxjs/toolkit");


const userSlice = createSlice({
    name : "user",
    initialState: {
        items : null
    },
    reducers :{
        login :(state,action)=>{
            state.items = action.payload
        },
        logout :(state)=>{
            state.items = null
        },
        uploadProfileImage: (state, action) => {
            state.user.image = action.payload;
        }
    }
})

export const {login,logout,uploadProfileImage} = userSlice.actions
export default userSlice.reducer