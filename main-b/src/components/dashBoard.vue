<template>
  <!-- eslint-disable -->
<b-container style="background: #e9eef0" class="pt-4 pb-4 pl-4 pr-4">
  <div>
    <div style="text-align: left"><strong>Courses</strong></div>
    <div class="p-4">
      <b-card>
        <div class="pb-4" style="text-align: left">
          2021/2022 Session Courses Registered
        </div>
        <div>
          <b-table sticky-header :items="items" head-variant="dark"></b-table>
        </div>
      </b-card>
    </div>
    <div class="p-4">
      <b-card>
        <b-row>
          <b-col class="col-12 col-md-12 col-sm-12">
            <div class="row pt-3 pb-3">
              <div class="col-11 ml-2" style="text-align: left">
                Max
                Credit........................................................................................................................................................................................................................................
              </div>
              <div class="col-1" style="text-align: left">21</div>
            </div>
          </b-col>
          <b-col class="col-12 col-md-12 col-sm-12">
            <div class="row pt-3 pb-3">
              <div class="col-11 ml-2" style="text-align: left">
                Number Of Selected
                Courses.......................................................................................................................................................................................................
              </div>
              <div class="col-1" style="text-align: left">4</div>
            </div>
          </b-col>
          <b-col class="col-12 col-md-12 col-sm-12">
            <div class="row pt-3 pb-3">
              <div class="col-11 ml-2" style="text-align: left">
                Selected Credit
                Level....................................................................................................................................................................................................................
              </div>
              <div class="col-1" style="text-align: left">10</div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="p-4">
      <div class="row">
        <b-col class="col-3">
          <b-button v-b-modal.modal-multi-1 style="background: #20618c; color: #fff; width: 100%" size="lg">Next</b-button>
        </b-col>

        <b-modal id="modal-multi-1" centered title="Second Modal" ok-only :hide-header="true" :hide-footer="true">
          <b-row>
            <b-col class="col-12">
              <div class="row" style="background: #d7ecf5">
                <div class="col-2">
                  <b-icon-exclamation-triangle-fill variant="warning" font-scale="3"></b-icon-exclamation-triangle-fill>
                </div>
                <div class="col-10 mt-3" style="text-align: left; font-size: 20px">
                  Lorem ipsum header
                </div>
              </div>
            </b-col>
            <b-col class="col-12 text-center pt-3"><span>You are about to rest your registered courses, if</span><br /><span>you do not register it again you will not have
              </span>
              <br /><span>a result </span></b-col>
            <b-col class="col-12">
              <b-row>
                <b-col>
                  <div class="mt-3 text-center">
                    <button class="cancel" style="
                          margin-right: 20px;
                          background: #dcecf5;
                          color: #006794;
                        ">
                      Cancel
                    </button>
                    <button class="cancel" style="background: #006794; color: #fff" v-b-modal.modal-multi-2>
                      Continue
                    </button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-modal>

        <b-modal ref="my-modal" id="modal-multi-2" centered title="Second Modal" ok-only :hide-header="true" :hide-footer="true">
          <b-row>
            <form ref="form" v-model="valid" lazy-validation @submit.prevent="rest">
              <b-col class="col-12 text-center" style="background: #d7ecf5; color: #006794">
                <h5>CONTINUE</h5>
              </b-col>
              <b-col class="col-12 text-center py-4">Kindly enter your password to reset your password</b-col>
              <div class="col-12">

                <b-form-input v-model="password" type="password" id="input-default" placeholder="Enter your password"></b-form-input>
                <div class="mt-2">Value: {{ text }}</div>

              </div>
              <b-col class="col-12">
                <div class="mt-3 text-center">
                  <button class="cancel" @click="rest" style="background: #006794; color: #fff">
                    CONTINUE
                  </button>

                </div>
              </b-col>
            </form>
          </b-row>
        </b-modal>
      </div>
    </div>
  </div>
</b-container>
</template>

<script>
import Swal from "sweetalert2";
/* eslint-disable */
export default {
  data() {
    return {
      password: '',
      items: [{
          SN: "1",
          Course_Title: "Human Anatomy",
          Course_code: "Bio 114",
          Units: "3 units",
        },
        {
          SN: "2",
          Course_Title: "Introduction to computer",
          Course_code: "Csc 116",
          Units: "2 units",
        },
        {
          SN: "3",
          Course_Title: "Operation Research",
          Course_code: "Csc 113",
          Units: "4 units",
        },
        {
          SN: "4",
          Course_Title: "Introduction to Database",
          Course_code: "224",
          Units: "3 units",
        },
        {
          SN: "5",
          Course_Title: "Chemistry",
          Course_code: "Chm 112",
          Units: "3 units",
        },
        {
          SN: "6",
          Course_Title: "Strength of marterial",
          Course_code: "eng 116",
          Units: "2 units",
        },
        {
          SN: "7",
          Course_Title: "Farm Practice",
          Course_code: "Agr 114",
          Units: "2 units",
        },
        {
          SN: "8",
          Course_Title: "Chemistry",
          Course_code: "Chm 112",
          Units: "3 units",
        },
        {
          SN: "table cell",
          Course_Title: "table cell",
          Course_code: "table cell",
          Units: "table cell",
        },
        {
          SN: "table cell",
          Course_Title: "table cell",
          Course_code: "table cell",
          Units: "table cell",
        },
        {
          SN: "table cell",
          Course_Title: "table cell",
          Course_code: "table cell",
          Units: "table cell",
        },
        {
          SN: "table cell",
          Course_Title: "table cell",
          Course_code: "table cell",
          Units: "table cell",
        },
      ],
    };
  },
  method: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    rest() {
      if (this.password == '') {
        Swal.fire('Hey user!', 'You are the rockstar!', 'info');
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Confirmed...',
          text: 'Good to go!',

        })
      }

    },
  },
};
</script>

<style>
.cancel {
  width: 155px;
  height: 45px;
  border: none;
  color: #fff;
  /* outline */
}

.action {
  width: 90px;
  height: 50px;
}
</style>
