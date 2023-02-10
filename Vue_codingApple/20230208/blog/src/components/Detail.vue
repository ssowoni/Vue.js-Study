<template>
    <div class="mt-5">
  <h5>{{블로그글[$route.params.id].title}}</h5>
  <p>{{ 블로그글[$route.params.id].contents }}</p>
  <!--children이 어디서 보여질지 정한다. 
        그럼 만약에 각각 다른 위치에서 보여주고 싶다면,,,?-->
  <router-view></router-view>
</div>
</template>

<script>
export default {
    props:{
        블로그글 : Array,
    }

}
</script>

<style>

</style>