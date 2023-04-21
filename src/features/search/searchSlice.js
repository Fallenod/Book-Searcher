import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  value: '',
  page: 0,
  pageSize: '30',
  total: 0,
  totalPage: 0,
  orderBy: 'relevance',
  langRestrict: 'ru',
  printType: 'all',
  filter: 'paid-ebooks',
  status: 'idle',
  isLoading: true,
};

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const {
        value,
        page,
        pageSize,
        orderBy,
        langRestrict,
        printType,
        filter,
      } = state.search;
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=${pageSize}&startIndex=${page}&printType=${printType}&langRestrict=${langRestrict}&orderBy=${orderBy}&filter=${filter}`
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.status = 'reset';
    },
    changeValue: (state, action) => {
      state.value = action.payload;
      state.isLoading = true;
    },
    changePage: (state, action) => {
      state.page = +action.payload;
      state.isLoading = true;
    },
    changePageSize: (state, action) => {
      state.pageSize = action.payload;
      state.isLoading = true;
    },
    changeOrderBy: (state, action) => {
      state.orderBy = action.payload;
      state.isLoading = true;
    },
    changeLangRestrict: (state, action) => {
      state.langRestrict = +action.payload;
      state.isLoading = true;
    },
    changePrintType: (state, action) => {
      state.printType = action.payload;
      state.isLoading = true;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = 'loading';
        state.isLoading = false;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoading = true;
        state.data = action.payload.items;
        state.total = action.payload.totalItems;
        state.totalPage = Math.ceil(state.total / state.pageSize);
      });
  },
});

export const { reset } = searchSlice.actions;
export const { changeValue } = searchSlice.actions;
export const { changePage } = searchSlice.actions;
export const { changePageSize } = searchSlice.actions;
export const { changeOrderBy } = searchSlice.actions;

export const { changeLangRestrict } = searchSlice.actions;
export const { changePrintType } = searchSlice.actions;
export const { changeFilter } = searchSlice.actions;

export const selectSearch = (state) => state.search.data;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchIsLoading = (state) => state.search.isLoading;
export const selectSearchValue = (state) => state.search.value;
export const selectSearchPage = (state) => state.search.page;
export const selectSearchPageSize = (state) => state.search.pageSize;
export const selectSearchTotal = (state) => state.search.total;
export const selectSearchTotalPage = (state) => state.search.totalPage;
export const selectSearchOrderBy = (state) => state.search.orderBy;
export const selectSearchLangRestrict = (state) => state.search.langRestrict;
export const selectSearchPrintType = (state) => state.search.printType;
export const selectSearchFilter = (state) => state.search.filter;

export default searchSlice.reducer;
