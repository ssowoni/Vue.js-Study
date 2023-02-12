<template>
  <div :class=" filter + ' filter-item'" :style="`background-image:url(${image})`"></div> 
  <button @click="fire">버튼</button>
</template>

<script>
export default {
  name : 'fiterbox',
  props :{
    image : String,
    filter : String,
  },
  methods : {
    fire(){
      this.emitter.emit('적용한필터',this.filter); //다른 컴포넌트로 이벤트 발사하는 방법
      
    }
  }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>