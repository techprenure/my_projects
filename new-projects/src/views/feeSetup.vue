<template>
<div>
  <v-row>
    <v-col md="12">
      <form ref="form" @submit.prevent="search">
        <v-row>

          <v-col md="2"></v-col>
          <v-col cols="2">

            <v-subheader>
              Program
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2" v-model="program" :items="programs" label="Select Your Program" editable item-value="text"></v-overflow-btn>

          </v-col>
        </v-row>
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Fee Name
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2" v-model="feeName" :items="feeNames" label="Select Your Fee Name" editable item-value="text"></v-overflow-btn>

          </v-col>
        </v-row>
        <v-row>
          <v-col md="2"></v-col>
          <v-col cols="2">
            <v-subheader>
              Status
            </v-subheader>
          </v-col>
          <v-col cols="6">
            <v-overflow-btn class="my-2" v-model="status" :items="progra" label="Select Your Staus" editable item-value="text"></v-overflow-btn>
            <v-btn class="ma-2 text-center" color="success" @click="search">
              Search

            </v-btn>

          </v-col>

        </v-row>
      </form>
    </v-col>

    <v-col md="2"></v-col>

    <v-col md="8" class="elevation-12 mt-15" align="center">
      <div style="background:#607D8B; padding:10px;color:#fff">Fee Table</div>
      <v-col md="12" align="center">

        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Fee Setup
               </v-toolbar-title>
               
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="700px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" fab dark class="mb-2" v-bind="attrs" v-on="on">
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn> 
                  <span>
                    Create Fee
                  </span>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                    <v-spacer></v-spacer>
                   
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>

                        <v-col cols="12" sm="6" md="12">
                          <v-overflow-btn class="my-2" v-model="editedItem.cdes" :items="programs" label="Select Your Program" editable item-value="text"></v-overflow-btn>
                        </v-col>
                        <v-col cols="12" v-if="editedItem.cdes" sm="6" md="12">
                          <v-text-field v-model="editedItem.ctitle" :rules="feeName" label="Fee Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" v-if="editedItem.cdes" sm="6" md="12">

                          <v-textarea v-model="editedItem.comp" :rules="feeDescription" solo name="input-7-4" label="Fee Description"></v-textarea>
                        </v-col>
                        <v-col cols="12" v-if="editedItem.cdes" sm="6" md="4" class="ma-2 text-center">
                          <v-btn small color="indigo" dark class="mr-4 mb-6 mt-6 elevation-10" @click="save" type="submit">
                            Add Fee
                          </v-btn>

                        </v-col>

                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
            <v-icon small  @click="redirect()">
              mdi-cogs
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>

    </v-col>
  </v-row>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    program: '',
    feeName: '',
    status: '',
    feeName: [
      v => !!v || 'Fee name is required',
      v => (v && v.length <= 50) || 'Fee name must be less than 50 characters',
    ],
    feeDescription: [
      v => !!v || 'Fee description is required',
      v => (v && v.length <= 200) || 'Fee description must be less than 200 characters',
    ],
    programs: [
      'Undergraduate',
      'Postgraduate',
      'JUPEB',
      'CEP',
    ],
    progra: [
     'Active',
      'Not active',
    ],
    feeNames: [
      'Faculty Fee',
      'Departmental Fee',
      'Undergraduate Fee',
      'Postgraduate Fee',
      'JUPEB Fee',
      'CEP Fee',
    ],
   

    headers: [{
        text: 'Fee code',
        value: 'ccode'
      },
      {
        text: 'Fee Name',
        align: 'start',
        sortable: false,
        value: 'ctitle',
      },
      {
        text: 'Program',
        value: 'cdes'
      },
      {
        text: 'Fee Description ',
        value: 'comp'
      },

      {
        text: 'Status',
        value: 'stat'
      },
      {
        text: 'Date Created',
        value: 'date'
      },
      {
        text: 'Action',
        value: 'actions'
      },
    ],
    desserts: [{

      ctitle: 'Introduction To Computer Science',
      ccode: 'CSC101',
      cdes: "2",
      comp: 'lsk',
      stat: 'stats'
    }, ],
    editedIndex: -1,
    editedItem: {
      ctitle: '',
      ccode: '',
      cdes: '',
      comp: '',
      stat: '',
      date: '',
    },
    defaultItem: {
      ctitle: '',
      ccode: '',
      cdes: '',
      comp: '',
      stat: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add Fee' : 'Edit Fee'
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

  methods: {
     redirect() {
      this.$router.push('/feeSetUp1');
    },
    search() {
      if (!this.program || !this.feeName || !this.status) {
        Swal.fire('Make sure you entered all fields properly', 'error');

        return;
      }
      if (Swal.fire('Search Successful', 'Done')) {
        this.program = '', this.feeName = '', this.status = '';
        return;
      }

      this.$router.push('/login');
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
      if (!this.editedItem.cdes || !this.editedItem.ctitle || !this.editedItem.comp) {
        Swal.fire('Make sure you entered all fields properly', 'error');
        return;
      }
     // this.$router.push('/feeSetUp1')
      const item = {
        ctitle: this.editedItem.ctitle,
        ccode: 'Bio103',
        cdes: this.editedItem.cdes,
        comp: this.editedItem.comp,
        stat: 'active',
        date: '2020-02-07',
      };
      if (this.editedIndex > -1) {

        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(item)
      }
      
      this.close()
    },
  },
}
</script>
