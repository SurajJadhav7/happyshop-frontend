import axios from 'axios';

const state = {
    products: [],
    product: {},
    categories: [],
    query: '',
    category: '',
    sort: '',
    minprice: 50,
    maxprice: 10000,
    page: 1,
    totalPages: 1,
}

const getters = {
    getProducts: state => state.products,
    getProduct: state => state.product,
    getCategories: state => state.categories,
    getQuery: state => state.query,
    getCategory: state => state.category,
    getSort: state => state.sort,
    getMinPrice: state => state.minprice,
    getMaxPrice: state => state.maxprice,
    getPage: state => state.page,
    getTotalPages: state => state.totalPages,
}

const actions = {
    async fetchProducts({ commit }) {
        const params = `query=${state.query}&category=${state.category}&sort=${state.sort}&minprice=${state.minprice}&maxprice=${state.maxprice}&page=${state.page}`
        const response = await axios.get(`http://localhost:3001/products?${params}`);
        const products = response.data.products.map(product => ({ ...product, img: 'http://loremflickr.com/300/300/product' }));
        commit('setProducts', products);
        commit('setTotalPages', 1 + Math.floor((response.data.total - 1) / 24));
    },
    async fetchProduct({ commit }, id) {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        commit('setProduct', response.data);
    },
    async fetchCategories({ commit }) {
        const response = await axios.get('http://localhost:3001/categories');
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
    async changeMinPrice({ commit }, minprice) {
        commit('setPage', 1);
        commit('setMinPrice', minprice);
    },
    async changeMaxPrice({ commit }, maxprice) {
        commit('setPage', 1);
        commit('setMaxPrice', maxprice);
    }
}

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),
    setCategories: (state, categories) => (state.categories = categories),
    setQuery: (state, query) => (state.query = query),
    setCategory: (state, category) => (state.category = category),
    setSort: (state, sort) => (state.sort = sort),
    setMinPrice: (state, minprice) => (state.minprice = minprice),
    setMaxPrice: (state, maxprice) => (state.maxprice = maxprice),
    resetState: () => {
        state.products = []
        state.product = {}
        state.categories = []
        state.query = ''
        state.category = ''
        state.sort = ''
        state.minprice = 50
        state.maxprice = 10000
        state.page = 1
        state.totalPages = 1
    },
    setPage: (state, page) => (state.page = page),
    setTotalPages: (state, totalPages) => (state.totalPages = totalPages)
}

export default {
    state,
    getters,
    actions,
    mutations
}