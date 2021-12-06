<template>
  <v-app id="inspire">
   <v-navigation-drawer 
   v-model="drawer"
   app
   >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vuetify Todo
          </v-list-item-title>
          <v-list-item-subtitle>
            Best Todo Ever!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

   <v-app-bar
      app
      color="primary"
      dark
      prominent     
      src="header1.jpg~"
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Vuetify Todo</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-format-list-checks', to: '/todo' },
          { title: 'login', icon: 'mdi-format-list-checks', to: '/login' },
          { title: 'postAssignment', icon: 'mdi-format-list-checks', to: '/postAssignment' },
          { title: 'settings', icon: 'mdi-format-list-checks', to: '/settings' },
          { title: 'listCreateAdminList', icon: 'mdi-format-list-checks', to: '/listCreateAdminList' },
           { title: 'postUtmeReg', icon: 'mdi-format-list-checks', to: '/postUtmeReg' },
           { title: 'subassgin', icon: 'mdi-angular', to: '/subassgin' },
            { title: 'feeSetup', icon: 'mdi-angular', to: '/feeSetup' },
             { title: 'feeSetUp1', icon: 'mdi-angular', to: '/feeSetUp1' },
          { title: 'linkreg', icon: 'mdi-cast-education', to: '/linkreg' },                 
          { title: 'otp', icon: 'mdi-help-box', to: '/otp' },
          { title: 'preloader', icon: 'mdi-help-box', to: '/preloader' },
          { title: 'postUtme2021', icon: 'mdi-help-box', to: '/postUtme2021' },         
           { title: 'layoutpag', icon: 'mdi-alpha-c-circle-outline', to: '/layoutpag' },
        ], 
      }),
  }
</script>

