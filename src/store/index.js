import Vue from "vue";
import Vuex, { Store } from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
const store = new Store({
    state:{
       userInfo:{
        companyId:"2",
        loginType:"account_pwd",
        mobile:"12300000001",
        pwd:"7B6F954B6CB4225D30BBF8267498166A"
       }
    },
    mutations:{
        CHANGE_USERINFO (state,userInfo){
            state.userInfo = userInfo
        }
    },
    actions:{},
    plugins:[createPersistedState({
        storage:{
            getItem:key => sessionStorage.getItem(key),
            setItem:(key,value)=>
                sessionStorage.setItem(key,value),
            removeItem: key => sessionStorage.removeItem(key),
        }
    })]
   
})
export default store