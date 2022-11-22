<template>

  


  <div class="black-bg" v-if="모달창보이나==true">
    <div class="white-bg">
        <p>{{외부데이터[사용자클릭].title}}</p>
        <p>{{외부데이터[사용자클릭].content}}</p>
        <button @click="모달창보이나=false">닫기</button>

    </div>
  </div>


  <div class="menu">
    <a v-for="(a,i) in 메뉴들" :key="i">
    {{a}}
    </a>
  </div>



  <Discount></Discount>


  <div v-for="(a,i) in 외부데이터" :key="i">
    <!--속성 값은 :를 붙여 v-bind로 값을 넣어줘야 한다. -->
    <img :src="외부데이터[i].image" />
    <p @click="모달창보이나=true">{{a.title}}</p>
    <p>{{a.content}}</p>
    <p>{{a.price}}</p>

  </div>

</template>

<script>


import data from './assets/data.js'

export default {
  data :function(){
    return {
      메뉴들 : ['Home', 'Shop', 'About'],
      외부데이터 : data,
      사용자클릭 : 0,
      모달창보이나 : false,

    }
  },
  
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background-color: darkslateblue;
  padding:15px;
  border-radius:15px;
}

.menu a{
  color :white;
  padding : 10px;
}

body{
  margin: 0
}

div{
  box-sizing:border-box;
}

.discount{
  background-color: gray;
  padding: 10px;
  margin: 10px;
  border-radius : 5px;
}
.black-bg{
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding:20px;
}

.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
   padding:20px;
}
</style>


