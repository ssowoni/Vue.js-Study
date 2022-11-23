<template>

  


  <!-- <div class="black-bg" v-if="모달창보이나==true">
    <div class="white-bg">
        <p>{{외부데이터[사용자클릭].title}}</p>
        <p>{{외부데이터[사용자클릭].content}}</p>
        <Discount />
        <button @click="모달창보이나=false">닫기</button>

    </div>
  </div> : v-bind-->


  <!--css로 애니메이션 주려면
    1. 시작전 class명
    2. 애니메이션 끝난 후 class 명
    3. 원할 때 2번 class 명 부착-->
  <div class="start">
  <Modal @closeButton ="모달창보이나=false;" 
  :외부데이터="외부데이터" :사용자클릭="사용자클릭" :모달창보이나="모달창보이나"/>
  </div>
  


  <div class="menu">
    <a v-for="(a,i) in 메뉴들" :key="i">
    {{a}}
    </a>
  </div>
<!-- 
  <Discount :이름="오브젝트.name" :나이="오브젝트.age"/>
  <Discount v-bind="오브젝트"/> -->
  <Discount :오브젝트="오브젝트"/>
  

 <!-- <Modal :외부데이터="외부데이터"/> -->
  <!-- <Modal @openModal = "$event"  $event는 자식이 보낸 데이터를 받는 것.--> 
  <Card  @openModal = "모달창보이나 = true; 사용자클릭=$event" 
  :외부데이터="외부데이터" />
  

<!--컴포넌트 문법 쓰는 이유, 재사용 쉽고, 코드 보기 편함-->
  
    
  <!-- <div v-for="(a,i) in 외부데이터" :key="i">
    속성 값은 :를 붙여 v-bind로 값을 넣어줘야 한다.
    <img :src="외부데이터[i].image" />
    <p @click="모달창보이나=true">{{a.title}}</p>
    <p>{{a.content}}</p>
    <p>{{a.price}}</p>
    

  </div> -->

</template>

<script>

//축약해둔 컴포넌트 쓰는 법
//1. vue 파일 import 해오고 2. 등록하고 3. 쓰고
//데이터 바인딩이 어려워 데이터 관리가 조금 복잡해져서 이게 단점이다. 

import data from './assets/data.js'
import Discount from './Discount.vue'
import Modal from './Modal.vue'
import Card from './Card.vue'



export default {
  data :function(){
    return {
      오브젝트 : {name : 'kim', age :20},
      메뉴들 : ['Home', 'Shop', 'About'],
      외부데이터 : data,
      사용자클릭 : 0,
      모달창보이나 : false,

    }
  },
  components : {
    // 디스카운트 : Discount,
    Discount,
    Modal,
    Card,
    
  }
 
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

.start{
  opacity: ;
}
</style>


