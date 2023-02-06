<template>
   <div v-for="(a,i) in 외부데이터" :key="i">
    <!--속성 값은 :를 붙여 v-bind로 값을 넣어줘야 한다. -->
    <img :src="외부데이터[i].image" />
    <!--props는 즉 부모에게 받아온 데이터는 자식이 수정할 수 없다. read-only
    custom event를 사용한다. -->
    <!-- <p @click="모달창보이나=true">{{a.title}}</p> -->
    <!-- $는 vue의 문법, $emit('작명', 데이터) 부모까지 메시지를 전달할 수 있다.
    만약 부모에서 데이터를 받으려면 @작명한거=""-->
    <p @click="$emit('openModal',외부데이터[i].id)">{{a.title}}</p>
    <p>{{a.content}}</p>
    <p>{{a.price}}</p>
    <!-- id = {{외부데이터[i].id}}
    {{외부데이터}} -->
  </div>


</template>

<script>
export default {
    name : 'Card',
    props : {
        외부데이터 : Array,
    }

}
</script>

<style>

</style>