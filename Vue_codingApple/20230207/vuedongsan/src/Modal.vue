<template>
  <div class="black-bg" v-if="모달창열렸니==true" >
  <div class="white-bg">
    <h4>{{원룸들[사용자가누른상품번호].title  }}</h4>
    <p>{{ 원룸들[사용자가누른상품번호].content }}</p>
    <input v-model.number="month">
    <p>{{ 원룸들[사용자가누른상품번호].price }}원</p>
    <p>{{ month }}개월 선택함 : {{ 원룸들[사용자가누른상품번호].price * month }}</p>
    <button @click="$emit('closeModal')">닫기</button>
  </div>
</div>
</template>

<script>
//자식컴포넌트가 부모가 갖고 있는 데이터 쓰려면 전달해야함.
//자식은 props로 받은 거 등록하면 된다. 
//근데 만약 자식이 값을 변경하려고 한다면 안된다. 

//그럼 만약 처음부터 원룸들, 사용자가누른상품번호 등
//자식 컴포넌트에서 선언한다면? 그럼 이렇게 props로 안 써도 되잖아!
//그렇지만 만약 부모 컴포넌트에서 이 data를 사용한다면 부모 컴포넌트에 정의하자.
export default {
    name : 'Modal',
    data(){
        return{
            month : 1,

        }
    },
    watch :{
        //month라는 이름으로 적으면, 자동적으로 month라는 데이터를 감시하는 watch
        month(input){
            if(input>=13){
                alert('1개월부터 12개월 까지만 가능합니다.');
                this.month=1;
            }else if(isNaN(input)){
                alert('숫자만 입력해 주세요');
                this.month=1;
            }
            
        }
    },
    props:{
        원룸들 : Array,
        사용자가누른상품번호 : Number,
        모달창열렸니 : Boolean,
    },
    updated(){
        if(this.month ==2){
            alert('2는 입력할 수 없습니다. ');
            this.month =1;
        }
    }

}
</script>

<style>

</style>