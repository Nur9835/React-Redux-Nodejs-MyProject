import { createSlice } from "@reduxjs/toolkit";

const cartSlice =
 createSlice({
  name: "cart",

  
  initialState: {
    products: [],
    // sepetteki ürün sayısı
    quantity: 0,
    // toplam fiyat
    total: 0,
  },

  
  reducers: {
    // sepete ürün ekleme
    addProduct: (state, action) => {
      // miktarı ve toplamı arttır
      state.quantity += 1;
      state.products.push(action.payload);
      // toplam fiyat= ürün fiyatı* ürün adedi
      state.total += action.payload.price * action.payload.quantity;
    },
  },

});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
