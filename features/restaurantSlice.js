import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    // initally our based of food is empty
  restaurant: {

    id:null,
    imgUrl:null,
    title:null,
    rating:null,
    genre:null,
    address:null,
    short_description:null,
    dishes:null,

  },
}

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  // mkae changes to global store
  reducers: {
    setRestaurant:(state,action)=>{
        state.restaurant=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

// making selector to access itmes
export const selectRestaurant=(state)=>state.restaurant.restaurant;


export default restaurantSlice.reducer;