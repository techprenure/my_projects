<template>
<div>
  <v-row>
    <v-col md="3"></v-col>
    <v-col md="6" class="elevation-12 mt-15" align="center">
      <v-col md="12" align="center">
        <v-avatar class="elevation-12" sm="6" md="4" color="indigo">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
        <h1><strong>SignIn </strong></h1>
      </v-col>

      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">
        <v-text-field  v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-if="email" v-model="password" :rules="passwordRules" type="password" label="password" required></v-text-field>
        <v-btn v-if="password" color="success" class="mr-4" @click="login">
          Login
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</div>
</template>

<script>
import swal from 'sweetalert2';
export default {
  data:() => ({
  email: '',
  password: '',

  email: '',
  emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ],
  password: '',
  passwordRules:[
    v => !!v || 'password is required',
    v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) || 'password must be aleast 8 characters which contain only upper and lower case, numeric digits and underscore  '
  ],
  }),
   methods: {
   
    login() {
      if (!this.email || !this.password ) {
        swal.fire('Make sure you entered all fields properly', 'error');
        return;
      }
      swal.fire('Login Was Successful ', 'error');
        
      

     
    }
  }

}
 
</script>
