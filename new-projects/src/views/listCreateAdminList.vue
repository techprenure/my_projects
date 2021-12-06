<template>
<v-container>
  <v-card>
    <v-row>

      <v-col md="12">
        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>List Admin</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="100vh">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
                    <v-icon dark>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col md="12" align="center" sm="6">
                          <v-col v-if="valid1">
                            <v-avatar sm="6" md="4" color="indigo">
                              <v-icon dark>
                                mdi-account-circle
                              </v-icon>
                            </v-avatar>
                            <h1>Search Admin</h1>
                            <v-form ref="form" @submit.prevent="submit">
                              <v-text-field v-model="email" type="text" label="Enter Your staffId/Email"></v-text-field>
                              <v-btn small color="indigo" dark class="mr-4 mb-6 mt-6 elevation-10" @click="submit" type="submit">
                                Submit
                              </v-btn>
                            </v-form>
                          </v-col>

                          <v-spacer></v-spacer>
                          <v-col class="elevation-10" v-if="valid">

                            <h1 class="pb-6">Add New Admin</h1>

                            <v-text-field v-model="editedItem.surname" type="text" label="surname"></v-text-field>
                            <v-text-field v-model="editedItem.names" type="text" label="name"></v-text-field>
                            <v-text-field v-model="editedItem.othernames" type="text" label="othername"></v-text-field>
                            <v-text-field v-model="editedItem.staffid" label="staff id" ></v-text-field>
                            
                            <v-select v-model="editedItem.type" :items="items" :error-messages="errors" label="Select Admin Type" data-vv-name="select" required></v-select>
                            <v-text-field v-model="editedItem.status" type="text" label="status"></v-text-field>

                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn color="blue darken-1" text @click="close">
                                Cancel
                              </v-btn>
                              <v-btn color="blue darken-1" text @click="save">
                                Save
                              </v-btn>

                            </v-card-actions>

                          </v-col>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

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
            <!-- <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon> -->
            <v-icon small @click="redirect(item)">
              mdi-cogs
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="redirect">
              Reset
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-card>
</v-container>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data: () => ({
    dialog: false,
    valid: false,
    valid1: true,
    dialogDelete: false,
    headers: [{
        text: 'Surname',
        align: 'start',
        sortable: false,
        value: 'surname',
      },
      {
        text: 'Name',
        value: 'names'
      },

      {
        text: 'OtherNames',
        value: 'othernames'
      },
      {
        text: 'StaffId/Email',
        value: 'staffid'
      },
      
      {
        text: 'Type',
        value: 'type'
      },
      {
        text: 'Status',
        value: 'status'
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      },
    ],
    items: [      
      'Bussary',  
    'Lecturer',
      'Faculty',
      'Admission',
      'Department',      
      'Exams and record',
      'General/Supper Admin',
      'Student Affairs / welfare'
    ],
    desserts: [
      {
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
    editedIndex: -1,
    editedItem: {
      surname: '',
      names: '',
      othernames: '',
      staffid: '',
       type: '',
      status: '',
    },

  }),

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
    redirect(item) {
      this.$router.push(`/settings?id=${item.staffid}`);
    },
    show() {
      this.valid = true
    },
    show1() {
      this.valid1 = false
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
    submit() {
      if (!this.email) {
        Swal.fire('Please Enter a Valid Email/StaffId ', 'error');

      } else {
        this.editedItem.staffid = this.email
        this.show1()
        this.show()
      }
    },
    save() {
      if (!this.editedItem.surname || !this.editedItem.names || !this.editedItem.othernames || !this.editedItem.staffid || !this.editedItem.type || !this.editedItem.status) {
        Swal.fire('Make sure you entered all fields properly to Add New admin', 'error');
        this.valid = false
        this.email = ''
        this.valid1 = true

      } else {
        this.desserts.push(this.editedItem)
        this.email = ''
        this.valid = false
        this.valid1 = true
      }
      this.close()
    },
  },

}
</script>
