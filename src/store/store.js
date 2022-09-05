import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    menuData: []
  },
  actions: {
    fetchMenudata({commit}){
      // 외부에서 json.파일을 불러온다
      axios.get('./data/menu.json')
      .then(response => {
        // console.log('axios : ', response.data);
        // mutations 실행 
        commit('MENU_DATA_INIT', response.data);
      })
      .catch(err => console.log(err));
    }
  },
  mutations: {
    MENU_DATA_INIT(state, payload){
      state.menuData = payload
    }
  },
  getters: {
    getMenuData(state){
      return state.menuData
    }
  }
})