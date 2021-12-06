<template>
  <a href="www.facebook.com">{{msg }}</a>
  

<span>age is {{age}}</span>
<button type="button" @click="onClickAge" >change</button>
<p>{{ageDoubled}}</p>
</template>

<script>
export default {
  name:'user',
   props:["age"],
   emit:['age-change'],
   computed: {
      ageDoubled(){
        return this.age * 2
      }
   },
   methods: {
onClickAge(){
  this.$emit('age-change', +3)
} 
  },
data () {
  return{
    msg:`You will be the death of me PROGRAMMING(will breake walls 4 u my love)
    quick money `,

  }
  
}
}
</script>

<style>
a {
  color:green;
}
</style>