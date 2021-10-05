import axios from 'axios';

const state = {
    products: [],
    product: {}
}

const getters = {
    allProducts: state => state.products,
    selectedProduct: state => state.product
}

const actions = {
    async getProducts({ commit }) {
        const response = await axios.get('http://localhost:3001/products');
        commit('setProducts', response.data);
    },
    async getProduct({ commit }, id) {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
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