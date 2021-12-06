<template>
<v-card >
  <div>
  <v-row>
    <v-col md="3"></v-col>
    <v-col md="6" class="elevation-12 mt-15" align="center">
      <v-col md="12" align="center">
        
        <h1><strong>Validate Otp </strong></h1>
      </v-col>

      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="validate">
        <v-text-field v-model="otp"  label="Otp" required></v-text-field>
       <v-btn color="success" class="mr-4" @click="validate">
          Validate
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</div>

</v-card>
</template>
<script>


export default {
  validate() {
     if (!this.otp ) {
        Swal.fire('Make sure you enter a valid otp', 'error');
        this.validate();
        return;
      }
      {
        Swal.fire('Password not the same', 'error');
        return;
      }
    
  },
}
</script>



