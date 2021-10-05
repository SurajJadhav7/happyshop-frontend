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
    async getProducts({ commit }) {
        const response = await axios.get('http://localhost:3001/products');
        commit('setProducts', response.data);
    },
    async getProduct({ commit }, id) {
        const response = await axios.get(`http://localhost:3001/products/${id}`);
        commit('setProduct', response.data);
    },
    async getCategories({ commit }) {
        const response = await axios.get('http://localhost:3001/products');
        const categories = [...new Set(response.data.map(product => product.category))];
        commit('setCategories', categories);
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