<template>
  <p v-if="age > 27">{{msg}}{{age}}</p>
  <p v-else> this your age self 25</p>
</template>

<script>
export default {
  name:"greeting",
  props:[
    "age"
  ],
  data () {
    return {
msg: "Hello Sweet",

    }
  },

}
</script>

     

<style scoped> 
p {
color: red;
}

</style>



