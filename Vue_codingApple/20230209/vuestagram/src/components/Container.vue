<template>
  <div>

  <Post v-if="step==0" :게시글들="게시글들"></Post>

  <!-- 필터선택페이지 -->
  <div v-if="step==1" >
    <div  :class=" 적용한필터 + ' upload-image'" :style="[`background-image : url(${image})`]"></div>
    <div class="filters" >
        <FilterBox :image="image" :filter="i" v-for="i in filter" :key="i"></FilterBox>
       <!--  <div class="filter-1"></div> -->
    </div>
  </div>

<!-- 글작성페이지 -->
<div v-if="step==2">
  <div :class=" 적용한필터 +' upload-image'" :style="[`background-image : url(${image})`]"></div>
  <div class="write">
    <textarea class="write-box" @input="$emit('content',$event.target.value)">write!</textarea>
  </div>
</div>

</div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default {
    name : 'Container',
    data(){
      return{
        filter : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
      }
    },
    components : {
        Post,
        FilterBox,

    },
    props :{
        게시글들 : Array,
        step : Number,
        image : String,
        적용한필터: String
    }
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>