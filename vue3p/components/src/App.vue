<template>
  <header><h1><p>Badest!</p></h1></header>
   
  
  <greeting :age="age"></greeting>
  <user :age="age" @age-change="updateAge"></user>
<footer>footer</footer>
</template>
 
<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
  name: 'App',
   components: {
    Greeting,
    User,
  
  },

  data (){
    return{
        age:'25',
    }
  },
  methods:{
    updateAge(num){
      this.age += num

    }
  }

}
</script>


