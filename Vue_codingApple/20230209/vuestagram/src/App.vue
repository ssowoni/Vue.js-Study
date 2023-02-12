<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right" >
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish">Write</li>

    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>
  <h4>나이 : {{ $store.state.age }}</h4>
  <button @click="$store.commit('나이변경',10)">버튼</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

<!-- 만약 데이터를 변경하려면 아래와 같이 직접 변경하는 게 아니라
    store.js에 상태 바꿔줘! 라고 부탁을하는 코드를 짜야한다. 위와 같이.   
  <button @click="$store.state.name = '박'">버튼</button> -->


  <p>{{ now() }} {{ 카운터 }}</p>
  <button @click="카운터++">버튼</button>

  <Container :게시글들="게시글들" :step="step" :image="image" :적용한필터="적용한필터" @content="작성한글 = $event"/>
  <button @click="more">더보기</button>






  <div class="footer">
    <ul class="footer-button-plus">
      <!-- accept는 이미지만 보여주세요라는 의미 실제로 이미지만 받는다는 의미는 아니다. 즉 근본적인 해결책이 아니다. -->
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

<!-- 
<div v-if="step==0">내용0</div>
<div v-if="step==1">내용1</div>
<div v-if="step==2">내용2</div>
<button @click="step=0">버튼0</button>
<button @click="step=1">버튼1</button>
<button @click="step=2">버튼2</button>


 -->





</template>

<script>

import posts from './assets/posting.js'
import Container from './components/Container';
import axios from 'axios'


export default {
  name: 'App',
  data(){
    return{
        게시글들 : posts,
        count : 0,
        step :0,
        image : '',
        작성한글 : '',
        적용한필터 : '',
        카운터 :0,
    }
  },
  components: {
    Container,
   
  },
  computed : {
    //computed 함수는 사용할 때마다 실행되지 않는다.
    //즉) 처음 실행하고 값을 간직한다. 
    now2(){
      return new Date()
    }
  },

  methods : {
    //methods 함수는 사용할 때마다 실행됨
    now(){
      return new Date()
    },



    more(){
    

      /* axios.post('URL',{name:'kim'}).then().catch(err=>{err}) */

      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      .then(result=>{
        //요청 성공시 실행할 코드~
        console.log(result.data);
        this.게시글들.push(result.data)
      this.count++;

      })
    
    
/*     if(this.count ==2){
      axios.get('https://codingapple1.github.io/vue/more1.json')
      .then(result=>{
        //요청 성공시 실행할 코드~
        console.log(result.data);
        this.게시글들.push(result.data)
      })

    } */
    },
    upload(e){
      let 파일 = e.target.files;
      console.log(파일);

      let url = URL.createObjectURL(파일[0]); //이 데이터의 url을 생성해줌
      console.log(url)
      this.image = url;

      this.step = 1;


      /* 이미지 띄우는 방법
      1. FileReader() : 파일을 글자로 변환해줌, 압축해줌
      2. URL.createObjectURL() : 이미지의 가상 URL을 생성해줌 */

    },
    publish(){
      var 내게시물 ={
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.적용한필터
    };
      this.게시글들.unshift(내게시물); //왼쪽의 array에 자료를 집어넣어준다. 맨 왼쪽에 집어넣음
      this.step=0;
    }
  },
  mounted(){
    this.emitter.on('적용한필터',(a)=>{
      this.적용한필터 = a
      console.log(a); //다른 컴포넌트에서 발사한 데이터가 a
    })
  }
}
</script>

<style>

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
