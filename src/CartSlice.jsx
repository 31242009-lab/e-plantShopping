import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart', initialState: { items: [] },
  reducers: {
    addItem: (state, action) => { const plant = action.payload; const existing = state.items.find((item) => item.id === plant.id || item.name === plant.name); if (existing) existing.quantity += 1; else state.items.push({ ...plant, quantity: 1 }) },
    removeItem: (state, action) => { const target = action.payload; const id = typeof target === 'object' ? target.id : target; const name = typeof target === 'object' ? target.name : target; state.items = state.items.filter((item) => item.id !== id && item.name !== name) },
    updateQuantity: (state, action) => { const { name, quantity } = action.payload; const item = state.items.find((entry) => entry.name === name); if (item) item.quantity = Math.max(0, quantity); state.items = state.items.filter((entry) => entry.quantity > 0) },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer