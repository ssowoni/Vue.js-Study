<template>
  <div v-for="(a,i) in 블로그글" :key="i">
    <h4>{{a.title}}</h4>
    <p>{{a.content}}</p>
  </div>
  <!-- <div>
    <h4>{{블로그글[1].title}}}</h4>
    <p>{{블로그글[1].content}}</p>
  </div>
  <div>
    <h4>{{블로그글[2].title}}}</h4>
    <p>{{블로그글[2].content}}</p>
  </div> -->
  <!-- <div>
    <h4>블로그 글 제목</h4>
    <p>블로그 글 날짜</p>
  </div>
  <div>
    <h4>블로그 글 제목</h4>
    <p>블로그 글 날짜</p>
  </div> -->
</template>

<script>
export default {
  props : {
    블로그글 : Object,
  }

}
</script>

<style>

</style>