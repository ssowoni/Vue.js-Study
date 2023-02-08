<template>
    <div class="mt-5">
  <h5>{{블로그글[$route.params.id].title}}</h5>
  <p>{{ 블로그글[$route.params.id].contents }}</p>
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