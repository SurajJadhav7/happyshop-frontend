import axios from 'axios';

// const baseURL = "https://happyshop-backend.herokuapp.com/";
const baseURL = "http://localhost:3000/";

const state = {
    products: [],
    product: {},
    categories: [],
    query: '',
    category: '',
    sort: '',
    priceFilter: '',
    page: 1,
    totalPages: 1,
    minprices: [0, 40, 60, 100, 300],
    maxprices: [40, 60, 100, 300, 1000000],
}

const getters = {
    getProducts: state => state.products,
    getProduct: state => state.product,
    getCategories: state => state.categories,
    getQuery: state => state.query,
    getCategory: state => state.category,
    getSort: state => state.sort,
    getPriceFilter: state => state.priceFilter,
    getCurrentPage: state => state.currentPage,
    getTotalPages: state => state.totalPages,
    getMinPrices: state => state.minprices,
    getMaxPrices: state => state.maxprices,
}

const actions = {
    async fetchProducts({ commit }) {
        let minprice = 0;
        let maxprice = 10000;
        if (state.priceFilter !== '') {
            minprice = state.minprices[parseInt(state.priceFilter)];
            maxprice = state.maxprices[parseInt(state.priceFilter)];
        }
        const params = `query=${state.query}&category=${state.category}&sort=${state.sort}&minprice=${minprice}&maxprice=${maxprice}&page=${state.currentPage}`
        const response = await axios.get(`${baseURL}/products?${params}`);
        commit('setProducts', response.data.products);
        commit('setTotalPages', 1 + Math.floor((response.data.total - 1) / 24));
    },
    async fetchProduct({ commit }, id) {
        const response = await axios.get(`${baseURL}/products/${id}`);
        commit('setProduct', { ...response.data, img: 'http://loremflickr.com/300/300/product' });
    },
    async fetchCategories({ commit }) {
        const response = await axios.get(`${baseURL}/categories`);
        commit('setCategories', response.data);
    },
    async callResetState({ commit }) {
        commit('setPage', 1);
        commit('resetState');
    },
    async changePage({ commit }, page) {
        commit('setPage', page);
    },
    async changeQuery({ commit }, query) {
        commit('setPage', 1);
        commit('setQuery', query);
    },
    async changeCategory({ commit }, category) {
        commit('setPage', 1);
        commit('setCategory', category);
    },
    async changeSort({ commit }, sort) {
        commit('setPage', 1);
        commit('setSort', sort);
    },
    async changePriceFilter({ commit }, priceFilter) {
        commit('setPage', 1);
        commit('setPriceFilter', priceFilter);
    }
}

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),
    setCategories: (state, categories) => (state.categories = categories),
    setQuery: (state, query) => (state.query = query),
    setCategory: (state, category) => (state.category = category),
    setSort: (state, sort) => (state.sort = sort),
    setPriceFilter: (state, priceFilter) => (state.priceFilter = priceFilter),
    resetState: () => {
        state.products = []
        state.product = {}
        state.categories = []
        state.query = ''
        state.category = ''
        state.sort = ''
        state.priceFilter = ''
        state.currentPage = 1
        state.totalPages = 1
    },
    setPage: (state, page) => (state.currentPage = page),
    setTotalPages: (state, totalPages) => (state.totalPages = totalPages)
}

export default {
    state,
    getters,
    actions,
    mutations
}