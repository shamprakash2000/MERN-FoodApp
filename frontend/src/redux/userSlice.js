import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    _id:"",
    image: "",
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            console.log(action.payload.data);
            //state= action.payload.data
            state.firstName=action.payload.data.firstName;
            state.lastName=action.payload.data.lastName;
            state._id=action.payload.data._id;
            state.image=action.payload.data.image;
            state.email=action.payload.data.email;
        },

        logoutRedux:(state,action)=>{
            state.firstName="";
            state.lastName="";
            state._id="";
            state.image="";
            state.email="";

        }
    }
})

export const {loginRedux,logoutRedux} = userSlice.actions
export default userSlice.reducer