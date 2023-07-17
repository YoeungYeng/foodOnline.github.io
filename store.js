import { configureStore } from '@reduxjs/toolkit'
import carSlice from './shopping-cart/carSlice'
import cartUiSlice from './shopping-cart/cartUiSlice'

const store = configureStore({
    reducer: {
        cart: carSlice.reducer,
        cartUi : cartUiSlice.reducer
    }
})

export default store