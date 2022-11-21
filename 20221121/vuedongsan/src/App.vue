<template>

  <div class="menu">
    <!--비슷한 a태그가 여러개 있다면 여기에 반복문을 사용하자. 
        <a v-for="작명 in 몇회, 데이터도 가능(데이터 넣으면 데이터 개수만큼 반복문이 돌아간다.)" :key="작명">Home</a>   key 안 쓰면 에러난다.-->
    <!-- <a>HOME</a>
    <a>Products</a>
    <a>About</a> -->
    <!-- <a v-for="작명 in 3" :key="작명">Home</a> -->
    <!--1. 자료안의 데이터 갯수만큼 반복됨, 2. 작명한 변수는 데이터안의 자료가 됨, 3. {{}} 데이터 반인딩으로 출력 가능
        key는 반복문으로 생성한 요소들을 각각 구분하기 위한 속성이다. unique한 문자나 숫자를 넣어주면 된다.
        in 왼쪽에 작명을 2개까지 할 수 있다.  -->
    <a v-for="a in 메뉴들" :key="a">{{a}}</a>
    <!-- <a v-for=" (a,i) in 메뉴들" :key="i">{{i}}</a> -->


  </div>




  <!--데이터 바인딩 {{데이터바인딩}} : js데이터를 html 에 꽂아 넣는 문법
      만약 사용하지 않았으면 document.getElementById().innerHTML = ??
      vue로 데이터를 넣으려면 데이터 보관통이 있어야 된다.
      데이터 바인딩 쓰는 이유는 ?? 
      1.html을 하드코딩해놓으면 나중에 변경이 어려움 (가변적인 데이터는 밑에 데이터로 저장해두는 게 낫다)
      2.뷰가 제공하는 실시간 렌더링 기능을 쓰려고(vue는 data를 변경하면 data와 관련된 HTML에도 실시간으로 반영된다.)
      홈페이지 로고나 크게 변경되지 않는 데이터는 그냥 하드코딩하면 된다. ex들어 --만원 중 --은 데이터 바인딩, 만원은 하드 코딩
      -->
      
  <!-- <div>
    만약 태그안 속성 값을 데이터로 저장하고 싶은거라면 v-bind를 쓴다. 이는 :로 줄여도 된다. ex) v-bind:style="스타일"  :style="스타일"
    <div v-for="(a,i) in products" :key="i">{{a}}
    <p>{{price[i]}}만원</p>
  </div>
  <hr> -->
  <div>
    {{products[0]}}
    <p>{{price1}}만원</p>
    <!--onClick=""  원래 html,   @click하면 v-on:click 줄임말
      만약 아래 코드를 쌩 js로 작성하려면 1. 버튼 누르면 숫자 찾아서 +1을 한다. 2. 그리고 +1이 된걸 HTML에 반영해줘라-->
    <!-- <button @mouseover="신고수++">허위매물신고</button><span> {{신고수}} </span> 이와 같이 여러가지 이벤트 가능 -->
      <!--함수명은 increase()처럼 작성하지 말고 increase로 잡기-->
    <button v-on:click="increase">허위매물신고</button><span> {{신고수}} </span>
  </div>
  <div>
    {{products[1]}}
    <p>{{price2}}만원</p>
  </div>
  <div>
    {{products[2]}}
    <p>{{price2}}만원</p>
  </div>
</template>

<script>



export default {
  name: 'App',
  data(){
    //데이터는 object 자료로 저장 {자료이름:자료내용}
      return{
        price1 : 60,
        price2 : 70,
        신고수 : 0, //진짜 숫자
        스타일 : 'color:red',
        메뉴들 : ['Home','Shop','About'],
        price : ['50','60','90'],
        products : ['역삼동 원룸', '천호동원룸','용현동원룸'],

      }
    },
      methods : {
        increase(){
          this.신고수 +=1;
        }

      },
 
  components: {
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
</style>
