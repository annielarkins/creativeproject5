import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        orders: [],
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setOrders(state, orders) {
            state.orders = orders;
        },
    },
    actions: {
        async register(context, data) {
            try {
                let response = await axios.post("/api/users", data);
                context.commit('setUser', response.data);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async login(context, data) {
            try {
                let response = await axios.post("/api/users/login", data);
                context.commit('setUser', response.data);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async logout(context) {
            try {
                await axios.delete("/api/users");
                context.commit('setUser', null);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async getUser(context) {
            try {
                let response = await axios.get("/api/users");
                context.commit('setUser', response.data);
                return "";
            } catch (error) {
                return "";
            }
        },
        async upload(context, data) {
            try {
                await axios.post('/api/orders', data);
                return "";
            } catch (error) {
                return error.response.data.message;
            }
        },
        async getMyOrders(context) {
            try {
                let response = await axios.get("/api/orders");
                context.commit('setOrders', response.data);
                return "";
            } catch (error) {
                return "";
            }
        },

    }
})
