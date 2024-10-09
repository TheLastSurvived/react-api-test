import { configureStore } from '@reduxjs/toolkit'
import getDataReducer from '../features/getData/getDataSlice'

export default configureStore({
  reducer: {
    getData: getDataReducer
  },
})