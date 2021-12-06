<template>
<div class="pa-12">
  <h1 class="text-center">Email Validation</h1>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent ="validate">

    <v-text-field v-model="otp" :rules="emailRules" label="Otp" required></v-text-field>
    <v-btn color="success" @click="validate">
      Validate
    </v-btn>
  </v-form>
</div>
</template>

<script>
import swal from 'sweetalert';
 

export default {

data:() => ({
  otp: '',
  }),

  methods: {

    validate() {
      if (!this.otp) {
        Swal.fire('Make sure you fill fields properly', 'error');

        return;
      }
     
        Swal.fire('Validation Complete!!!', 'success');
     

      this.$router.push('/login');
    }
  }
}
</script>
