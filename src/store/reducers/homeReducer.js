import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// get category
export const get_category = createAsyncThunk(
  'product/get_category',
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get('/home/get-category');
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

// get product
export const get_product = createAsyncThunk(
  'product/get_product',
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get('/home/get-product');
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

// to filter the price
export const price_range = createAsyncThunk(
  'product/price_range',
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get('/home/price-range-filter');
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

// to filter the products
export const query_products = createAsyncThunk(
  'product/query_products',
  async (query, { fulfillWithValue }) => {
    try {
      const { data } = await api.get('/home/query-products', {
        params: {
          category: query.category,
          rating: query.rating,
          low: query.low,
          high: query.high,
          sortPrice: query.sortPrice,
          pageNumber: query.pageNumber,
          searchValue: query.searchValue || '',
          state: query.state,
          lga: query.lga,
        },
      });
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const homeReducer = createSlice({
  name: 'home',
  initialState: {
    categories: [],
    products: [],
    totalProduct: 0,
    parPage: 3,
    latest_product: [],
    topRated_product: [],
    discount_product: [],
    priceRange: {
      low: 0,
      high: 100,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_category.fulfilled, (state, { payload }) => {
        state.categories = payload.categories;
      })
      .addCase(get_product.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.latest_product = payload.latest_product;
        state.topRated_product = payload.topRated_product;
        state.discount_product = payload.discount_product;
      })
      .addCase(price_range.fulfilled, (state, { payload }) => {
        state.latest_product = payload.latest_product;
        state.priceRange = payload.priceRange;
      })
      .addCase(query_products.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.totalProduct = payload.totalProduct;
        state.parPage = payload.parPage;
      });
  },
});

export default homeReducer.reducer;
