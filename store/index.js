import {createStore} from 'vuex'
import signUpUser from '@/firebase/user/signupUser';
import loginUser from '@/firebase/user/loginUser';

const store = createStore ({
    state:{
        user: null,
    },
    getters: {
        userEmail(state) {
            if(!state.user) return '';
            return state.user
        }
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        }
    },
    actions: {
        async loginUser({commit}, payload ) {
            const {user} = await loginUser(payload);
            commit('setUser', user);
        },
        async  registerUser(_, payload){
            await signUpUser(payload);
        }
    }
})

export default store;