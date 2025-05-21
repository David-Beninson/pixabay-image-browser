// redux/imageSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk: Fetch images from server
export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { getState }) => {
    const { category, sort, page } = getState().images;
    let url = `http://localhost:3001/api/images?page=${page}&perPage=9&category=${category}`;
    if (sort) url += `&sort=${sort}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    category: "",
    sort: "",
    page: 1,
    selectedImage: null,
    isModalOpen: false,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    clearSelectedImage: (state) => {
      state.selectedImage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload;
    });
  },
});

export const {
  setCategory,
  setSort,
  setPage,
  openModal,
  closeModal,
  setSelectedImage,
  clearSelectedImage,
} = imageSlice.actions;

export default imageSlice.reducer;
