<template>
  <div class="mt-4">
    <h5 @click="$router.push('/detail/0')">{{ 블로그글[0].title }}</h5>
    <p>{{ 블로그글[0].content }}</p>
    <p>{{ 블로그글[0].date }}</p>
  </div>
  <div class="mt-4">
    <h5>{{ 블로그글[1].title }}</h5>
    <p>{{ 블로그글[1].content }}</p>
    <p>{{ 블로그글[1].date }}</p>
  </div>
  <div class="mt-4">
    <h5>{{ 블로그글[2].title }}</h5>
    <p>{{ 블로그글[2].content }}</p>
    <p>{{ 블로그글[2].date }}</p>
  </div>

</template>

<script>
export default {
    name : 'List',
    props : {
        블로그글 : Object,
    }
}
</script>

<style>

</style>