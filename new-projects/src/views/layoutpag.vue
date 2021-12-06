<template>
<div>
  <v-card class="pa-15">
    <h1 class="text-center  pb-6">Clearance Request</h1>
    <v-row class="elevation-10 pb-12 pl-6">
      <v-col md="12">
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Program
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2" :items="dropdown_edit1" label="Select Your Program" editable item-value="text"></v-overflow-btn>

          </v-col>
        </v-row>
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Department
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2" :items="dropdown_edit2" label="Select Your Department" editable item-value="text"></v-overflow-btn>

          </v-col>
        </v-row>
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Faculty
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2" :items="dropdown_edit3" label="Select Your Faculty" editable item-value="text"></v-overflow-btn>
            <v-btn class="ma-2 text-center" :loading="loading2" :disabled="loading2" color="success" @click="loader = 'loading2'">
              Request
              <template v-slot:loader>
                <span>Loading...</span>
              </template>
            </v-btn>
          </v-col>

        </v-row>
      </v-col>

      <v-col md="12" class="mr-1">
        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-12">
          <template v-slot:top>
            <v-toolbar flat>

              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>

              <v-dialog v-model="dialogDelete" max-width="800px">
                <v-card>
                 
                    <v-toolbar color="blue darken-4" dark>
                      <div class="row">
                        <div class="col-md-6 text-center">NNAMDI AZIKWE UNIVERSITY</div>

                      </div>
                    </v-toolbar>
                    <v-row class="elevation-12">
                      <v-col md="1"></v-col>
                      <v-col md="3">
                        <v-avatar class="profile float-right" color="grey" size="150" tile>
                          <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col md="6" class="pt-6">
                        <v-list v-for="credential in studentCredentials" :key="credential.Reg_No" class="pa-2">
                          <div><strong>Name</strong>: <span>{{credential.Name}}</span></div>
                          <div><strong>Reg Number</strong>: <span>{{credential.Reg_No}}</span></div>
                          <div><strong>Program</strong>: <span>{{credential.Program}}</span></div>
                          <div><strong>Department</strong>: <span>{{credential.Department}}</span></div>
                          <div><strong>Faculty</strong>: <span>{{credential.faculty}}</span></div>
                          <div><strong>Result</strong>: <span>{{credential.Result}}</span></div>
                          <div><strong>Current Level</strong>: <span>{{credential.Current_Level}}</span></div>

                        </v-list>
                      </v-col>
                      <v-col md="12">
                        <v-col md="12">
                        <v-toolbar-title class="text-center">First Year Result</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-data-table :headers="resultHeaders" :items="results" :items-per-page="5" class="elevation-12"></v-data-table>
                      </v-col>
                      <v-col md="12">
                        <v-toolbar-title class="text-center">Second Year Result</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-data-table :headers="resultHeaders" :items="results" :items-per-page="5" class="elevation-12"></v-data-table>
                      </v-col>
                      <v-col md="12">
                        <v-toolbar-title class="text-center">Third Year Result</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-data-table :headers="resultHeaders" :items="results" :items-per-page="5" class="elevation-12"></v-data-table>
                      </v-col>
                      <v-col md="12">
                        <v-toolbar-title class="text-center">Fourth Year Result</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-data-table :headers="resultHeaders" :items="results" :items-per-page="5" class="elevation-12"></v-data-table>
                      </v-col>
                      </v-col>

                    </v-row>
                  

                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">

            <v-icon big @click="deleteItem(item)">
              mdi-account
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-data-table>

      </v-col>
    </v-row>

  </v-card>
</div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,

    headers: [{
        text: 'jamb reg',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'surname',
        value: 'calories'
      },
      {
        text: 'Program ',
        value: 'fat'
      },
      {
        text: 'Department',
        value: 'carbs'
      },
      {
        text: 'Faculty',
        value: 'protein'
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      },
    ],

    resultHeaders: [{
        text: 'First Year Result',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Second Year',
        value: 'calories'
      },
      {
        text: 'Third Year ',
        value: 'fat'
      },
      {
        text: 'Fourth Year',
        value: 'carbs'
      },

    ],

    dropdown_edit1: [{
        text: 'Programs'
      },
      {
        text: 'Programs1'
      },
      {
        text: 'Programs2'
      },
      {
        text: 'Programs3'
      },
      {
        text: 'Programs4'
      },
    ],
    dropdown_edit2: [{
        text: 'Dpartments'
      },
      {
        text: 'Dpartments1'
      },
      {
        text: 'Dpartments2'
      },
      {
        text: 'Dpartments3'
      },
      {
        text: 'Dpartments4'
      },
    ],
    dropdown_edit3: [{
        text: 'Faculty'
      },
      {
        text: 'Faculty1'
      },
      {
        text: 'Faculty2'
      },
      {
        text: 'Faculty3'
      },
      {
        text: 'Faculty4'
      },
    ],

    dropdown_edit1: [{
        text: 'Programs'
      },
      {
        text: 'Programs1'
      },
      {
        text: 'Programs2'
      },
      {
        text: 'Programs3'
      },
      {
        text: 'Programs4'
      },
    ],
    studentCredentials: [{
      Name: 'Chinecherem Benedicta Okoye',
      Reg_No: "20938209EK",
      Program: ' Undergraduate (Regualr)',
      Department: 'Educational Foundations',
      Faculty: 'Arts',
      Result: '1st class',
      Current_Level: '100 Level',
    }],
    dropdown_edit2: [{
        text: 'Dpartments'
      },
      {
        text: 'Dpartments1'
      },
      {
        text: 'Dpartments2'
      },
      {
        text: 'Dpartments3'
      },
      {
        text: 'Dpartments4'
      },
    ],
    dropdown_edit3: [{
        text: 'Faculty'
      },
      {
        text: 'Faculty1'
      },
      {
        text: 'Faculty2'
      },
      {
        text: 'Faculty3'
      },
      {
        text: 'Faculty4'
      },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },

    initialize() {
      this.desserts = [{
          name: '757952222468',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: '657952222468 sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: '357952222468',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: '957952222468',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: '857952222468',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: '257952222468',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: '157952222468',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: '757952222468',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ]
      this.results = [{
          name: 'Frozen',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: 'sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ]
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
