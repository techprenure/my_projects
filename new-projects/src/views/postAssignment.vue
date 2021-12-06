<template>
<div>
  <v-card class="mx-auto mt-10 elevation-10" max-width="100vh">
    <v-row align="center" justify="space-around" class="mt-10">
      <v-avatar color="grey lighten-1" size="62">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
    </v-row>
    <v-card-text class="text-center">
      Create Account
    </v-card-text>
    <v-form ref="form" v-model="valid" lazy-validation class="mr-4 ml-4" @submit.prevent="submit">
      <v-text-field v-model="surname" :rules="surenameRules" label="Surename" required></v-text-field>
      <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="number" :rules="numberRules" label="Phone No" type="numeber" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-text-field v-model="password" :counter="10" :rules="passwordRules" label="Password" type="password" required></v-text-field>

      <v-text-field v-model="repeatpassword" :counter="10" :rules="RepeatpasswordRules" label="Password Repeat" type="password" required></v-text-field>
      <v-row align="center" justify="space-around">
        <v-btn :disabled="!valid" color="success" class="mr-4 mb-6 mt-6 elevation-10" @click="submit" type="submit">
          Create Account
        </v-btn>

        <v-btn color="error" class="mr-4 mb-6 mt-6 elevation-10" @click="reset">
          Reset Form
        </v-btn>
      </v-row>
      <router-link to="/login" style="text-decoration: none; color: gray;">
        <v-card-text class="text-center">
          Already Have an Account <strong style="color: blue lighten-1;">Login</strong>
        </v-card-text>
      </router-link>
    </v-form>
  </v-card>
</div>
</template>
