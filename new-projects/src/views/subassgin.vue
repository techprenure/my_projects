<template>
<div>
  <v-card class="pa-15">
    <h1 class="text-center  pb-6">Submited Assignment</h1>
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
            <v-overflow-btn class="my-2" v-model="prog" :items="dropdown_edit3" label="Select Your Program" editable item-value="text"></v-overflow-btn>

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
            <v-overflow-btn class="my-2" v-model="fac" :items="faculty" label="Select Your Faculty" editable item-value="text"></v-overflow-btn>

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
            <v-overflow-btn class="my-2" v-model="dep" :items="department" label="Select Your Department" editable item-value="text"></v-overflow-btn>

          </v-col>
        </v-row>
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Courses
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2"  :items="courses" label="Select Your Courses" editable item-value="text"></v-overflow-btn>

          </v-col>
        </v-row>
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Date Range
            </v-subheader>
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="From:" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <v-menu ref="menuu" v-model="menuu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="To:" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menuu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menuu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>

        </v-row>

        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Assignment
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2" :items="dropdown_edit3" label="Assignment" editable item-value="text"></v-overflow-btn>
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
                <v-card style="overflow: hidden">

                  <v-toolbar color="success" dark>
                    <div class="row">
                      <div class="col-md-6 text-center">Answer</div>

                    </div>
                  </v-toolbar>
                  <v-card class="pb-12">

                    <v-card-text>
                      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-row align="center" justify="space-around">
                        <v-btn tile color="success">
                          <v-icon left>
                            mdi-check-outline
                          </v-icon>

                        </v-btn>
                        <v-btn color="error">
                          <v-icon left>
                            mdi-close-outline
                          </v-icon>

                        </v-btn>

                      </v-row>
                    </v-card-actions>
                  </v-card>

                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">

            <v-icon big @click="deleteItem(item)">
              mdi-spellcheck
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

    menu: false,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
     msg: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',

    headers: [{
        text: 'Regnumber',
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
        text: 'Course',
        value: 'protein'
      },
      {
        text: 'Assignment Title',
        value: 'protein'
      },
      {
        text: 'Date submited',
        value: 'protein'
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      },
    ],

    Programs: [{
        text: 'Architecture'
      },
      {
        text: 'Boimedical'
      },
      {
        text: 'Accounting'
      },
      {
        text: 'Engneering'
      },
      {
        text: 'Anthropology'
      },
    ],
    department: [{
        text: 'Art'
      },
      {
        text: 'English'
      },
      {
        text: 'Biostatictics'
      },
      {
        text: 'chemistry'
      },
      {
        text: 'Bioscience'
      },
    ],
    faculty: [{
        text: 'Science'
      },
      {
        text: 'Engine'
      },
      {
        text: 'political science'
      },
      {
        text: 'philosophy'
      },
      {
        text: 'psycology'
      },
    ],

    Courses: [{
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
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date)
    },
  },

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
