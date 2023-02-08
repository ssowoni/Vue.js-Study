<template>

    <div>
    <img :src="원룸들.image" class="room-img">
    <!-- <h4 @click="모달창열렸니=true ;사용자가누른상품번호=i">{{ 원룸들[0].title }}</h4> -->
    <h4 @click="$emit('openModal', 원룸들.id)">{{ 원룸들.title }}</h4>
    
    <p>{{원룸들.price}}원</p>
</div>
</template>

<script>
export default {

    name : 'Card',
    props :{
        원룸들 : Object,

    }
}
</script>

<style>

</style>