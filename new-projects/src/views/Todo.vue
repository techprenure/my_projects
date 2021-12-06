<template>
<v-card class="evation-24 mx-auto mt-12 pt-12 
 " max-width="100vh">
  <v-row>
    <v-col md="12" align="center">
      <v-avatar class="elevation-12" sm="6" md="4" color="indigo">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <h1><strong>Sign In </strong></h1>
    </v-col>
    <v-col md="12" align="center">
      <v-col cols="12" sm="6" md="4">
        <v-form ref="form" v-model="valid" @submit.prevent="submit">
          <v-text-field v-model="email" type="email" :rules="emailRules" label="Enter Your Email"></v-text-field>
          <v-text-field v-model="username" label="Enter Your Usernsname"></v-text-field>
          <v-text-field v-model="password" type="password" label="Enter Your Password"></v-text-field>
          <v-text-field v-model="confirmpassword" type="password" label="Confirm Your Password"></v-text-field>
        </v-form>
      </v-col>
      <v-btn small color="indigo" dark class="mr-4 mb-6 mt-6 elevation-10" @click="submit" type="submit">
        Create Account
      </v-btn>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data: () => ({
    msg: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',

    emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],

   
  }),

  methods: {
   
    submit() {
      if (!this.email || !this.username || !this.password || !this.confirmpassword) {
        Swal.fire('Make sure you entered all fields properly', 'error');
       
        return;
      }
      if (this.password !== this.confirmpassword) {
        Swal.fire('Password not the same', 'error');
        return;
      }

      this.$router.push('/login');
    }
  }
}
</script>
