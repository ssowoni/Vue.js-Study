<template>
    <div class="discount">
    <h4>지금 결제하면 {{할인가격퍼센트}}% 할인</h4>
  </div>
</template>

<script>
export default {

    name : 'Discount',

    data(){
      return{

        //할인가격퍼센트 : 30,
          
      }
    },

    //부모에서 자식에게 데이터를 전달하기 위한 props
    props :{
      할인가격퍼센트 : Number,
    },

  //   mounted(){
  //   setInterval(()=>{
  //     --this.할인가격퍼센트
      
  //   },1000)
  // },


}

</script>

<style>

</style>