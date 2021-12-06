<template>
<v-row>
  <v-col md="3"></v-col>
  <v-col md="6" class="elevation-12 pa mt-15" align="center">
    <v-col md="12" align="center">

      <h1><strong>Post Assignment </strong></h1>
    </v-col>
    <v-form ref="form" v-model="validate" lazy-validation @submit.prevent="submit">
      <v-textarea v-model="description" solo name="input-7-4" label="Enter a Description"></v-textarea>
      <v-file-input v-model="upload" label="Upload" outlined dense></v-file-input>

      <v-container fluid>
        <v-select v-model="selectedProgram" :items="program" label="Program" multiple>

          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle">
              <v-list-item-action>
                <v-icon :color="selectedProgram.length > 0 ? 'indigo darken-4' : ''">
                  {{ icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Select All
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
          <template v-slot:append-item>
            <v-divider class="mb-2"></v-divider>
            <v-list-item disabled>
              <v-list-item-avatar color="grey lighten-3">
                <v-icon>
                  mdi-food-apple
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content v-if="allProgram">
                <v-list-item-title>
                  Holy smokes, someone call the fruit police!
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-content v-else-if="someProgram">
                <v-list-item-title>
                  Fruit Count
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ selectedProgram.length }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content v-else>
                <v-list-item-title>
                  How could you not like Course?
                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>
          </template>
        </v-select>
        <v-select v-model="selectedCourse" :items="courses" label="Course" multiple>

          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle1">
              <v-list-item-action>
                <v-icon :color="selectedCourse.length > 0 ? 'indigo darken-4' : ''">
                  {{ icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Select All
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
          <template v-slot:append-item>
            <v-divider class="mb-2"></v-divider>
            <v-list-item disabled>
              <v-list-item-avatar color="grey lighten-3">
                <v-icon>
                  mdi-food-apple
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content v-if="allCourse">
                <v-list-item-title>
                  Holy smokes, someone call the fruit police!
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-content v-else-if="someCourse">
                <v-list-item-title>
                  Fruit Count
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ selectedCourse.length }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content v-else>
                <v-list-item-title>
                  How could you not like Course?
                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>
          </template>
        </v-select>
        <v-select v-model="selectedDepartment" :items="department" label="Department" multiple>

          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle2">
              <v-list-item-action>
                <v-icon :color="selectedDepartment.length > 0 ? 'indigo darken-4' : ''">
                  {{ icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  Select All
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
          <template v-slot:append-item>
            <v-divider class="mb-2"></v-divider>
            <v-list-item disabled>
              <v-list-item-avatar color="grey lighten-3">
                <v-icon>
                  mdi-food-apple
                </v-icon>
              </v-list-item-avatar>

              <v-list-item-content v-if="allDepartment">
                <v-list-item-title>
                  Holy smokes, someone call the fruit police!
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-content v-else-if="someDepartment">
                <v-list-item-title>
                  Fruit Count
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ selectedDepartment.length }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-content v-else>
                <v-list-item-title>
                  How could you not like fruit?
                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>
          </template>
        </v-select>
      </v-container>

      <v-row>

        <v-col cols="2">
          <v-subheader>
            Date Range
          </v-subheader>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="from" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="from" label="From:" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="from" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(from)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-menu ref="menuu" v-model="menuu" :close-on-content-click="false" :return-value.sync="to" transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="to" label="To:" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="to" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary pt-6" @click="menuu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menuu.save(to)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>

      </v-row>

      <v-btn color="success" class="mr-4" @click="submit">
        POST ASSIGNMENT
      </v-btn>
    </v-form>
  </v-col>
</v-row>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data: () => ({
    description: '',
    upload: '',
    selectedProgram: '',
    selectedCourse: '',
    selectedDepartment: '',
    from: '',
    to: '',
    program: [
      'Architecture',
      'Boimedical',
      'Accounting',
      'Engneering',
      'Anthropology',
    ],
    courses: [ 
      'Science',
      'Engine',
      'political science',
      'philosophy',
      'psycology',
    ],
    department: [
      'Art',
      'English',
      'Biostatictics',
      'chemistry',
      'Bioscience',
    ],
    selectedProgram: [],
    selectedCourse: [],
    selectedDepartment: [],
  }),

  computed: {
    allProgram() {
      return this.selectedProgram.length === this.program.length
    },
    allCourse() {
      return this.selectedCourse.length === this.courses.length
    },
    allDepartment() {
      return this.selectedDepartment.length === this.department.length
    },

    someProgram() {
      return this.selectedProgram.length > 0 && !this.allProgram
    },
    someCourse() {
      return this.selectedCourse.length > 0 && !this.allCourse
    },
    someDepartment() {
      return this.selectedDepartment.length > 0 && !this.allDepartment
    },
    icon() {
      if (this.allProgram) return 'mdi-close-box'
      if (this.someProgram) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
    icon() {
      if (this.allCourse) return 'mdi-close-box'
      if (this.someCourse) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
    icon() {
      if (this.allDepartment) return 'mdi-close-box'
      if (this.someDepartment) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
  },

  methods: {

    toggle() {
      this.$nextTick(() => {
        if (this.allProgram) {
          this.selectedProgram = []
        } else {
          this.selectedProgram = this.program.slice()
        }
      })
    },
    toggle1() {
      this.$nextTick(() => {
        if (this.allCourse) {
          this.selectedCourse = []
        } else {
          this.selectedCourse = this.courses.slice()
        }
      })
    },
    toggle2() {
      this.$nextTick(() => {
        if (this.allDepartment) {
          this.selectedDepartment = []
        } else {
          this.selectedDepartment = this.department.slice()
        }
      })
    },
    submit() {
      if (!this.description || !this.upload || !this.selectedProgram || !this.selectedCourse || !this.selectedDepartment || !this.from || !this.to) {
        Swal.fire('Fill All Fields Properly', 'no dey fuck up');

        return;
      }
      if (Swal.fire('SUCCESS', 'Assignment Created')) {
        this.description = '', this.upload = '', this.selectedProgram = '', this.selectedCourse = '', this.selectedDepartment = '', this.from = '', this.to = '';

        return;
      }

    }
  },
}
</script>
