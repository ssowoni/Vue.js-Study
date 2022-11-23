<template>
    <div class="black-bg" v-if="모달창보이나==true">
    <div class="white-bg">
        <p >{{외부데이터[사용자클릭].title}}</p>
        <p>{{외부데이터[사용자클릭].content}}</p>
        <!--input은 숫자로 입력해도 자료형은 문자열로 나올 것이다.
            html요소.addEventListener('click',function(e){})
            여기서 e가 $event와 같은 것 .
            @input은 사용자가 입력할 때마다 month라는 곳에 값을 입력해줘라.-->
        <!-- <input @input="month= $event.target.value"> -->
        <!--v-model은 input, select, textarea 등등 다 가능-->
        <!-- <input v-model.number="month"> -->
        <input v-model="month"> 
        <p> {{month}} 개월 선택함 : {{외부데이터[사용자클릭].price * month}}</p>
        <button @click="$emit('closeButton')">닫기</button>

    </div>
  </div>
</template>



<script>
//모달창에서는 지금 App.vue에서 정의된 데이터를 사용한다. 
//그럼 여기에 데이터를 따로 또 넣어줘야 되나??
// 그거는 좋지 않은 방식이다 데이터는 한 곳에 보관하는 게 좋다. 
//가져다 쓰는 문법이 props문법. 부모/자식컴포넌트라고 칭한다. 
//props : {데이터이름:자료형이름}
export default {

    name : 'Modal',
    data(){
        return{
            month :1,
        }
    },

    watch :{
        //month를 감시하는 함수인 것. 이름은 데이터 이름과 같게 하면 된다.
        month(a){
            //사용자가 month를 글자로 입력하면 경고문 띄워주셈 
            if(a>=13) {
                alert(' 13보다 작아야 됩니다 경고경고!');
                this.month=1;
            }else if(isNaN(a)==true ){ //숫자가 아니라면
                alert('숫자만 입력하세요');
                this.month=1;
            }

            

            
        }
    },

    //data(){}로 만들면 되지 않음? 
    //되긴 되는데 부모도 쓰는 데이터라면 부모컴포넌트에 만들어두자.
    props : {
        외부데이터 : Array,
        모달창보이나 : Boolean,
        사용자클릭 : Number,

    }

}
</script>

<style>

</style>