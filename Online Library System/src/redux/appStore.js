import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

const appStore = configureStore({
    reducer : {
        cart : booksReducer,
    }
});

export default appStore;