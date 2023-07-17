import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const carSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    // ============ Add Item ==============
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        //====== note: if you use just redux you should not mute
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image1: newItem.image1,
          price: newItem.price,
          quality: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quality++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quality),
        //initial value should be 0
        0
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
    // ============ Remove Items ===========
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quality === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quality--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quality),
        0
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
    //========= delete items ===========
    deleteItems(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quality;
      }
      //
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quality),
        0
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
      localStorage.setItem(
        "totalAmount",
        JSON.stringify(state.cartItems.map((item) => item))
      );
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.cartItems.map((item) => item))
      );
      // --------------
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const cartActions = carSlice.actions;
export default carSlice;
