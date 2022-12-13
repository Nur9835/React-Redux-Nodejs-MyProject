import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
name:"product",
initialState :{
    products:[],
    isFetching :false,
    error :false,
},
reducers:{
    // get all

getProductStart :(state) =>{
    state.isFetching =true;
    state.error =false;
},

getPorductSuccess :(state,action) =>{
    state.isFetching=false;
    state.products =action.payload;
},

getProductFailure :(state,action) =>{
    // arıza 
    state.isFetching =false;
    state.error =true;
},

deleteProductStart :(state) =>{
    state.isFetching =true;
    state.error =false;
},

deletePorductSuccess :(state,action) =>{
    state.isFetching=false;
    state.products.splice(
    state.products.findIndex((item)=> item._id === action.payload)   ,
1 );

},

deleteProductFailure :(state,action) =>{
    // arıza 
    state.isFetching =false;
    state.error =true;
},


updateProductStart :(state) =>{
    state.isFetching =true;
    state.error =false;
},

updatePorductSuccess :(state,action) =>{
    state.isFetching=false;
   state.products[
    state.products.findIndex((item)=>
     item._id === action.payload.id)  
   ] =action.payload.product;
},
updateProductFailure :(state,action) =>{
    // arıza 
    state.isFetching =false;
    state.error =true;
},

addProductStart :(state) =>{
    state.isFetching =true;
    state.error =false;
},

addPorductSuccess :(state,action) =>{
    state.isFetching=false;
    state.products.push(action.payload);
},
addProductFailure :(state,action) =>{
    // arıza 
    state.isFetching =false;
    state.error =true;
},






},
});




export const {getProductStart,
    getPorductSuccess,
    getProductFailure,
    deleteProductStart,
    deletePorductSuccess,
    deleteProductFailure,
    addProductStart,
    addPorductSuccess,
     addProductFailure,
     updatePorductSuccess,
     updateProductFailure,
     updateProductStart
}=
productSlice.actions;

export default productSlice.reducer;