import axios from 'axios';

const state = {
    products: [],
    product: {},
    categories: [],
    q: '',
    category: '',
    sort: '',
    minprice: 50,
    maxprice: 10000,
}

const getters = {
    allProducts: state => state.products,
    selectedProduct: state => state.product,
    allCategories: state => state.categories,
}

const actions = {
    async getProducts({ commit }) {
        const params = `q=${state.q}&category=${state.category}&sort=${state.sort}&minprice=${state.minprice}&maxprice=${state.maxprice}`
        const response = await axios.get(`http://localhost:3001/products?${params}`);
        commit('setProducts', response.data);
    },
    async getProduct({ commit }, id) {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        commit('setProduct', response.data);
    },
    async getCategories({ commit }) {
        const response = await axios.get('http://localhost:3001/categories');
        commit('setCategories', response.data);
    }
}

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product),
    setCategories: (state, categories) => (state.categories = categories),
    setQ: (state, q) => (state.q = q),
    setCategory: (state, category) => (state.category = category),
    setSort: (state, sort) => (state.sort = sort),
    setMinPrice: (state, minprice) => (state.minprice = minprice),
    setMaxPrice: (state, maxprice) => (state.maxprice = maxprice),
}

export default {
    state,
    getters,
    actions,
    mutations
}