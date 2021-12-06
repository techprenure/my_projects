<template>
<v-card>
  <v-toolbar flat dark color="primary">

    <v-toolbar-title>Admin Menu</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>

    </v-toolbar-items>

  </v-toolbar>
  <v-row>
    <v-col md="5">
      <v-row class="pl-6 pr6">
        <v-col md="6" style:"text-align:left;">
          <v-avatar class="profile float-right" color="grey" size="150" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col md="12" class="mr-6">
          <v-list v-for="credential in studentCredentials" :key="credential.Reg_No" class="pa-2">
            <div><strong>Surname</strong>: <span>{{credential.surname}}</span></div>
            <div><strong> Name</strong>: <span>{{credential.names}}</span></div>
            <div><strong>Othernames</strong>: <span>{{credential.othernames}}</span></div>
            <div><strong>Email</strong>: <span>{{credential.staffid}}</span></div>

          </v-list>
        </v-col>
      </v-row>

    </v-col>
    <v-col md="7">
      <v-card>
        <v-tabs background-color="white" color="deep-purple accent-4" right>
          <v-tab>Add Admin menu </v-tab>
          <v-tab>Add Admin Department</v-tab>
          <v-tab>Add Admin Faculty</v-tab>
          <v-tab>Add Admin programs</v-tab>
          <v-tab-item v-for="n in 4" :key="n">
            <v-container fluid>
              <v-treeview v-if="n==1" v-model="selections" :items="itemz1" :selection-type="selectionType" selectable return-object open-all>

              </v-treeview>

              <v-treeview v-if="n==2" v-model="selections" :items="itemz2" :selection-type="selectionType" selectable return-object open-all></v-treeview>
              <v-treeview v-if="n==3" v-model="selections" :items="itemz3" :selection-type="selectionType" selectable return-object open-all></v-treeview>
              <v-treeview v-if="n==4" v-model="selections" :items="itemz4" :selection-type="selectionType" selectable return-object open-all></v-treeview>
             
            </v-container>
             
          </v-tab-item>
         
        </v-tabs>
      </v-card>
       <v-btn class="white--text" color="green darken-1" depressed>
                Save
                <v-icon right>
                  mdi-content-save
                </v-icon>
              </v-btn>

      <!--   

 <v-card>
        <v-tabs v-model="tab" background-color="primary" dark>
          <v-tab v-for="item in items" :key="item.tab">
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item of itemz" :key="item.tab">
            <v-card flat>
              <v-treeview v-model="selections" :items="itemz" :selection-type="selectionType" selectable return-object open-all></v-treeview>

            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>

         <v-subheader>
        <h3>Add Admin To Program</h3>
      </v-subheader>
      <v-row class="ml-6" md="3">
        <v-treeview v-model="selections" :items="itemz" :selection-type="selectionType" selectable return-object open-all></v-treeview>

      </v-row>
      <v-row class="ml-6" md="3">
        <v-col class="pa-6" cols="6">
          <template v-if="!selections.length">
            No nodes selected.
          </template>
          <template v-else>
            <span v-for="nodes in selections" :key="nodes.id">
              {{ nodes }}
            </span>
          </template>
        </v-col>
      </v-row>
      <v-row class="ml-6" md="3">
        <v-col class="pa-6" cols="6">
          <template v-if="!selection.length">
            No nodes selected.
          </template>
          <template v-else>
            <span v-for="(node, index) in selection" :key="node.id">
              {{ node }}-{{index}}
            </span>
          </template>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-treeview v-model="selection" :items="itemzz" :selection-type="selectionType" selectable return-object open-all></v-treeview>
      <v-divider></v-divider>

      <div style="flex: 1 1 auto;"></div> -->
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {

  methods: {
    findAdmin() {
      const pass = this.$route.query.id
      const data = this.desserts.find(el => el.staffid == pass);

      console.log(data)

      this.studentCredentials.push(data);
    }
  },
  data() {
    return {
      name: null,
      tab: null,
      items: [{
          tab: 'Add Admin menu ',
          content: 'tab 1 content'

        },
        {
          tab: 'Add Admin Faculty',
          content: 'Tab 2 Content'
        },
        {
          tab: 'Add Admin department',
          content: 'Tab 3 Content'
        },
        {
          tab: 'Admin',
          content: 'Tab 4 Content'
        },

      ],
      desserts: [{
          surname: 'Frozen Yogurt',
          names: 159,
          othernames: 6.0,
          staffid: 'raph@gmail.com',
          type: 4.0,
          status: 4.0,
        },
        {
          surname: 'Ice cream sandwich',
          names: 237,
          othernames: 9.0,
          staffid: 37,
          type: 4.0,
          status: 4.0,
        },

        {
          surname: 'Eclair',
          names: 262,
          othernames: 16.0,
          staffid: 23,
          type: 4.0,
          status: 4.0,
        },
      ],

      //  studentCredentials: [{
      //     Name: 'Chinecherem Benedicta Okoye',
      //     Reg_No: "20938209EK",
      //     Program: ' Undergraduate (Regualr)',
      //     Department: 'Educational Foundations',
      //     Faculty: 'Arts',
      //     Result: '1st class',
      //     Current_Level: '100 Level',
      //   }],
      studentCredentials: [],
      itemz1: [{
        id: 1,
        name: 'Add Admin Menu :',
        children: [{
            id: 2,
            name: 'undergraduates'
          },
          {
            id: 3,
            name: 'postgraduates'
          },

        ],
      }, ],
      itemz2: [{
        id: 4,
        name: 'Add Admin Department :',
        children: [{
            id: 5,
            name: 'list students'
          },
          {
            id: 6,
            name: 'view courses'
          },
          {
            id: 7,
            name: 'donepay'
          },
        ],
      }, ],
      itemz3: [{
        id: 8,
        name: 'Add Admin Faculty :',
        children: [{
            id: 9,
            name: 'Faculty'
          },
          {
            id: 10,
            name: 'Faculty1'
          },
          {
            id: 11,
            name: 'Faculty2'
          },
        ],
      }, ],

      itemz4: [{
          id: 12,
          name: 'Add Admin Menu :',
          children: [{
              id: 13,
              name: 'Menu'
            },
            {
              id: 14,
              name: 'Menu1'
            },
            {
              id: 15,
              name: 'Menu2'
            },
          ],
        },

      ],

    }

  },
  created() {
    this.findAdmin();
  }
}
</script>

<style scoped>
.list_style {
  border-radius: 20px;
  background-color: lightgray;
  padding: 7px 12px;
  margin-left: 3px;
}
</style>
