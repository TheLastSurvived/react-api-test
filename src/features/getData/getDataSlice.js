import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getDataSlice = createSlice({
    name: 'data',
    initialState: {
      value: [],
    },
    reducers: {
      getData: (state) => {
      const  response = axios
      .get("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15")
      .then((response) => {
        state.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
      },
 
    },
  })
  
  // Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
  export const { getData } = getDataSlice.actions
  
  export default getDataSlice.reducer