<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<router-link to="/list">목록페이지 </router-link>

<!--라우터로 설정한 컴포넌트를 보여줄 자리-->
<!-- <router-view :블로그글="블로그글[i]" v-for="(a,i) in 블로그글" :key="a"></router-view> -->
<router-view :블로그글="블로그글"></router-view>
<!-- <List :블로그글="블로그글[i]" v-for="(a,i) in 블로그글" :key="a"></List> -->
</template>                                         
    
<script>

/* import List from './components/List.vue'; */
import blogInfo from './assets/blog.js';

export default {
  name: 'App',
  data(){
    return{
      블로그글 : blogInfo,
    }
  },
  components: {
    /* List, */
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
</style>
