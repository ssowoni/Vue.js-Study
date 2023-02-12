import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 30,
      more : {},
    }
  },
  





  mutations : {
    이름변경(state){
        state.name = 'park'
    },
    나이변경(state,payload){
        state.age+=payload
    },
    좋아요수증가(state){
        state.likes++
    },
    setMore(state,data){
        state.more =data

    }
 
  },
  actions :{
    getData(context){
        axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
            console.log(a.data);
            context.commit('setMore',a.data)
        })
    }
  }


})

export default store