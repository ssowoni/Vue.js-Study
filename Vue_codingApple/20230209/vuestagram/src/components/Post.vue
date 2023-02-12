<template>
  <div class="post"  v-for="(a,i) in 게시글들" :key="i">
    <div class="post-header">
        <!--css 스타일 속성 넣을때 object형으로 넣을 수 있다.
        이게 편한데, 왜냐 backgroundImage는 문자 그 값은 자료형으로 넣어야 되기 때문에 .-->
      <div class="profile" :style="{backgroundImage : `url(${ 게시글들[i].userImage })`}"></div>
      <span class="profile-name">{{게시글들[i].name}}</span>
    </div>
    <div :class="게시글들[i].filter +' post-body'" :style="{backgroundImage : `url(${ 게시글들[i].postImage })`}"
    @click="$store.commit('좋아요수증가')" ></div>
    <div class="post-content">
      <!-- <p>{{게시글들[i].likes}}Likes</p> -->
      <p>{{$store.state.likes}}Likes</p>
      <p><strong>{{게시글들[i].filter}}</strong> {{게시글들[i].content}}</p>
      <p class="date">{{게시글들[i].date}}</p>
    </div>
</div> 
</template>

<script>
export default {
    name : 'Post',
    props :{
        게시글들 : Array
    }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>