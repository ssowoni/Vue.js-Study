<!--vue의 html과 같은 뼈대, App.vue에다가 작성한다. -->
<template>

<!-- 
  동적인 UI 만드는 법
  1. UI의 현재 상태를 데이터로 저장해둔다.
  2. 데이터에 따라 UI가 어떻게보일지 작성한다.
  3. 

 -->

 <!--props로 자식에게 데이터 보내는 법
  1. 데이터 보내고
  2. 등록하고
  3. 쓰면 된다. -->

 <Modal  
 :원룸들="원룸들" :모달창열렸니="모달창열렸니" :사용자가누른상품번호="사용자가누른상품번호"
 @closeModal="모달창열렸니=false"></Modal>

  <div class="menu">
 <!--    <a>Home</a>
    <a>Products</a>
    <a>Sale</a> -->
   <!--  <a v-for="작명 in 반복횟수">Home</a> -->
    <a v-for="a in 메뉴들" :key="a">{{a}}</a>

  </div>

  <Discount v-if="showDiscount==true"></Discount>


  <button @click="priceSort()">가격순 정렬</button>
  <button @click="priceReverseSort()">가격 역순 정렬</button>
  <button @click="titleSort()">이름순 정렬</button>
  <button @click="sortBack()">되돌리기</button>



  <Card @openModal="모달창열렸니=true; 사용자가누른상품번호=$event"
  :원룸들 = "원룸들[i]"  v-for="(a,i) in 원룸들" :key="a"></Card>



</template>

<script>

//document.getElementById().innerHTML = ?? ; 기존 JS에서는 이렇게 해야 값을 집어넣을 수 있엇다. 하지만 뷰에서는 이렇게 길게 코드를 짜지 않는다. 

/* 데이터 바인딩 하는 이유는 ?
1. HTML에 하드코딩해놓으면 나중에 변경이 어렵다.
2. VUE의 실시간 자동 렌더링을 하려고
실시간으로 바뀔 데이터가 아니라면 그냥 하드코딩 해도 된다. 
3. HTML 속성도 데이터 바인딩이 가능한데 그건 v-on을 사용해서 바인딩 한다. 
 */


import data from './assets/data.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';






export default {
  name: 'App',
  data(){
    return{
      price1 : 60,
      price2 : 70,
      스타일 : 'color : red' ,
      products : ['역삼동원룸', '천호동원룸','용현동원룸'],
      메뉴들 : ['HOME', 'SHOP','ABOUT'],
      num :[0,0,0],
      모달창열렸니 : false, //UI가 어떻게 보일지 현재 상태를 기록
      원룸들 : data,
      원룸들오리지널 :[...data],
      사용자가누른상품번호 : 0,
      showDiscount : true,
    }
  },
  methods: {
    increase(){
      this.신고수+=1;
    },
    priceSort(){
      //아래와 같음 문자 정렬이다. 정확한 숫자는 function을 넣어야된다.
      /* this.원룸들.sort() */
      this.원룸들.sort(function(a,b){
        return a.price-b.price
      })
    },
    sortBack(){
      //sort는 원본을 아예 변형시켜버린다. 따라서 원본을 보존하려면 map, filter 이용해야한다.
      this.원룸들 = [...this.원룸들오리지널];

    },
    priceReverseSort(){
      this.원룸들.sort(function(a,b){
        return b.price-a.price;
      })
    },
    titleSort(){
      this.원룸들.sort(function(a,b){
        //  return a.title.localeCompare(b.title)
        if(a.title>b.title) {
          return 1
        }else if(a.title<b.title){
          return -1
        }else{
          return 0
        }
      })
    }
  },
 /*  mounted(){
    setTimeout(()=>{
      this.showDiscount =false;
    },2000);
  } */


  components: {
    Discount : Discount,
    Modal,
    Card
  }
}
</script>

<style>


body{
  margin:0
}
div{
  box-sizing:border-box;
}
.black-bg{
  width:100%; height:100%;
  background:rgba(0,0,0,0.5);
  position :fixed; padding: 20px;
}
.white-bg{
  width:100%; 
  background:white;
  border-radius :8px; padding: 20px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding : 15px;
  border-radius:  5px;
}

.menu a{
  color:white;
  padding: 10px;
}
.room-image{
  width:100%;
}

</style>
