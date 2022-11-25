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
    3. 원할 때 2번 class 명 부착(모달창이 열렸을 때)
    아래 :class는 object형태인데 만약 "모달창열렸니"가 true이면 end 클래스를 붙는다. 
  -->
  
  <Transition name="fade">
  <!-- <div class="start" :class="{ end : 모달창보이나}"> -->
  <Modal @closeButton ="모달창보이나=false;" 
  :외부데이터="외부데이터" :사용자클릭="사용자클릭" :모달창보이나="모달창보이나"/>
  </Transition>


  <div class="menu">
    <a v-for="(a,i) in 메뉴들" :key="i">
    {{a}}
    </a>
  </div>

 <!-- <Discount :오브젝트="오브젝트" :할인가격="할인가격" v-if="showDiscount == true"/> -->

  <Discount :오브젝트="오브젝트" :할인가격퍼센트="할인가격퍼센트" />

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>
  <button @click="titleSort">타이틀순</button>
  <button @click="show50Below">50만원 이하만</button>



  


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
      showDiscount : true,
      오브젝트 : {name : 'kim', age :20},
      메뉴들 : ['Home', 'Shop', 'About'],
      외부데이터 : [...data],
      원룸들오리지널 : [...data],
      사용자클릭 : 0,
      모달창보이나 : false,
      할인가격퍼센트 : 30,

    }
  },
  methods:{
    priceSort(){
      this.외부데이터.sort(function(a,b){
        return a.price-b.price;
       // return b.price-a.price; 역순
        
        //만약 object에서 object를 빼면 값이 나오지 않는다. 
      })
    },

    sortBack(){
      //array 자료에서 등호는 값을 공유해주세요라는 뜻
      this.외부데이터 = [...this.원룸들오리지널];
      
    },
    titleSort(){
      //this.외부데이터.title.sort();
      this.외부데이터.sort(function(a,b){
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });

    },
    show50Below(){
      this.외부데이터.price < 500000
    }
    
  },

 
  // mounted(){
  //   //App.vue가 mount되고 나서 실행하고 싶음 여기에 작성
  //   //setTimeout(()=>{})
  //   //setTimeout(function(){
  //   setTimeout(()=>{

  //     //저거 배너 닫아주세요.
  //     this.showDiscount = false;
  //   }, 2000);
  // },

  mounted(){
    setInterval(()=>{
      --this.할인가격퍼센트
      
    },1000)
  },

  created(){

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
  opacity: 0;
  /*이 클래스에 있는 애니메이션 변할 때 1초에 걸려 스무스하게 변한다.*/
  transition : all 1s;
}

.end{
  opacity: 1;
}

/*시작스타일*/
.fade-enter-from{
  transform:  translateY(-1000px);
  opacity :0;
}
.fade-enter-active{
  transition: all 1s;
}
/*끝 스타일*/
.fade-enter-to{
  transform:  translateY(0px);
  opacity :1;
}



</style>


