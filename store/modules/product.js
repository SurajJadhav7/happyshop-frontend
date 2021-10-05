import axios from 'axios';

const state = {
    products: [],
    product: {}
}

const getters = {
    getProducts: state => state.products,
    getProduct: state => state.product
}

const actions = {
    async fetchProducts({ commit }) {
        const response = await axios.get('/api/products');
        commit('setProducts', response.data);
    },
    async fetchProduct({ commit }, id) {
        const response = await axios.get(`/api/products/${id}`);
        commit('setProduct', response.data);
    },
}

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.product = product)
}

export default {
    state,
    getters,
    actions,
    mutations
}