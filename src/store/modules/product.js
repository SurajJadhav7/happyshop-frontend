import axios from 'axios';

const state = {
    products: [],
    product: {},
    categories: [],
}

const getters = {
    allProducts: state => state.products,
    selectedProduct: state => state.product,
    allCategories: state => state.categories,
}

const actions = {
    async getProducts({ commit }, { q = '', category = '', sort = '', minprice = 50, maxprice = 10000 }) {
        const params = `q=${q}&category=${category}&sort=${sort}&minprice=${minprice}&maxprice=${maxprice}`
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
}

export default {
    state,
    getters,
    actions,
    mutations
}