<template>
  <b-container style="background: #e9eef0" class="pt-4 pb-4 pl-4 pr-4">
    <b-row>
      <b-col class="col-12 md-12 sm-12 p-3" style="text-align: left"
        ><strong>Courses</strong></b-col
      >
    </b-row>
    <b-card>
      <b-row class="mt-3 mb-3 p-3">
        <b-col class="col-3 col-md-3 col-sm-3" name="Top Left">
          <b-dropdown
            class="mx-1"
            variant="primary"
            right
            text="Carry Over Courses"
          >
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
        </b-col>
        <b-col class="col-6 col-md-6 col-sm-6" name="Top Center">
          <strong>2021/2022 Session Courses</strong>
        </b-col>
        <b-col class="col-3 col-md-3 col-sm-3" name="Top Right">
          <b-button variant="primary">
            <b-icon
              icon="bi-stack"
              font-scale="1.5"
              style="color: #5cb9e1"
              class="p-2"
            ></b-icon
            >Change Of Courses
          </b-button>
        </b-col>
      </b-row>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div>
            <b-card no-body class="mb-1">
              <b-card-header
                header-tag="header"
                class="text-left p-1"
                role="tab"
              >
                <b-row block v-b-toggle.accordion-1>
                  <b-col class="col-10 pt-2 pb-2" style="text-align: left"
                    >200 level Computer Science</b-col
                  >
                  <b-col class="col-2">
                    <b-icon
                      icon="chevron-down"
                      font-scale="1.5"
                      class="pt-2"
                    ></b-icon>
                  </b-col>
                </b-row>
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body style="background: #f7f8f9">
                  <div class="row crow mb-3 p-2">
                    <div class="col-1">
                      <b-icon
                        icon="folder"
                        font-scale="2.5"
                        style="background: #d7ecf5; color: #5cb9e1"
                        class="rounded-circle p-2"
                      ></b-icon>
                    </div>
                    <div class="col-8 mb-2" style="text-align: left">
                      <div class="mtxt">
                        <strong>Introduction To Database</strong><br /><span
                          >oct 21st 20233468008761</span
                        >
                      </div>
                    </div>
                    <div class="col-3">
                      <div>
                        <button class="action abtn btn">Add</button>
                      </div>
                    </div>
                  </div>

                  <div class="row crow mb-3 p-2">
                    <div class="col-1">
                      <b-icon
                        icon="folder"
                        font-scale="2.5"
                        style="background: #fce6d3; color: #f4b175"
                        class="rounded-circle p-2"
                      ></b-icon>
                    </div>
                    <div class="col-8 mb-2" style="text-align: left">
                      <div class="mtxt">
                        <strong>Introduction To Database</strong><br /><span
                          >oct 21st 20233468008761</span
                        >
                      </div>
                    </div>
                    <div class="col-3">
                      <div>
                        <button class="action rbtn btn">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div class="row crow mb-3 p-2">
                    <div class="col-1">
                      <b-icon
                        icon="folder"
                        font-scale="2.5"
                        style="background: #d7ecf5; color: #5cb9e1"
                        class="rounded-circle p-2"
                      ></b-icon>
                    </div>
                    <div class="col-8 mb-2" style="text-align: left">
                      <div class="mtxt">
                        <strong>Introduction To Database</strong><br /><span
                          >oct 21st 20233468008761</span
                        >
                      </div>
                    </div>
                    <div class="col-3">
                      <div>
                        <button class="action abtn btn">Add</button>
                      </div>
                    </div>
                  </div>

                  <div class="row crow mb-3 p-2">
                    <div class="col-1">
                      <b-icon
                        icon="folder"
                        font-scale="2.5"
                        style="background: #fce6d3; color: #f4b175"
                        class="rounded-circle p-2"
                      ></b-icon>
                    </div>
                    <div class="col-8 mb-2" style="text-align: left">
                      <div class="mtxt">
                        <strong>Introduction To Database</strong><br /><span
                          >oct 21st 20233468008761</span
                        >
                      </div>
                    </div>
                    <div class="col-3">
                      <div>
                        <button class="action rbtn btn">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div class="row crow mb-3 p-2">
                    <div class="col-1">
                      <b-icon
                        icon="folder"
                        font-scale="2.5"
                        style="background: #d7ecf5; color: #5cb9e1"
                        class="rounded-circle p-2"
                      ></b-icon>
                    </div>
                    <div class="col-8 mb-2" style="text-align: left">
                      <div class="mtxt">
                        <strong>Introduction To Database</strong><br /><span
                          >oct 21st 20233468008761</span
                        >
                      </div>
                    </div>
                    <div class="col-3">
                      <div>
                        <button class="action abtn btn">Add</button>
                      </div>
                    </div>
                  </div>

                  <div class="row crow mb-3 p-2">
                    <div class="col-1">
                      <b-icon
                        icon="folder"
                        font-scale="2.5"
                        style="background: #fce6d3; color: #f4b175"
                        class="rounded-circle p-2"
                      ></b-icon>
                    </div>
                    <div class="col-8 mb-2" style="text-align: left">
                      <div class="mtxt">
                        <strong>Introduction To Database</strong><br /><span
                          >oct 21st 20233468008761</span
                        >
                      </div>
                    </div>
                    <div class="col-3">
                      <div>
                        <button class="action rbtn btn">Remove</button>
                      </div>
                    </div>
                  </div>
                </b-card-body>
              </b-collapse>
              <div class="row">
                <b-col class="col-12" name="Top Left">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-row block v-b-toggle.accordion-3>
                        <b-col class="col-10 pt-2 pb-2" style="text-align: left"
                          >New Department Courses</b-col
                        >
                        <b-col class="col-2">
                          <b-icon
                            icon="chevron-down"
                            font-scale="1.5"
                            class="pt-2"
                          ></b-icon>
                        </b-col>
                      </b-row>
                    </b-card-header>
                    <b-collapse
                      id="accordion-3"
                      accordion="my-accordion"
                      role="tabpanel"
                    >
                      <b-card-body>
                        <b-card-text>hello</b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </b-col>
              </div>
            </b-card>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="">
            <b-row>
              <b-col class="col-12 scos pb-2 pt-2"> Selected Courses </b-col>
              <b-col class="col-12 col-sm-12 col-md-12">
                <div>
                  <b-row>
                    <b-col
                      class="col-12 col-sm-12 col-md-12"
                      style="background: #f7f8f9"
                    >
                      <div class="mx-3">
                        <div class="row crow mb-3 p-2 mt-2">
                          <div class="col-1">
                            <b-icon
                              icon="folder"
                              font-scale="2.5"
                              style="background: #d7ecf5; color: #5cb9e1"
                              class="rounded-circle p-2"
                            ></b-icon>
                          </div>
                          <div class="col-8 mb-2" style="text-align: left">
                            <div class="mtxt">
                              <strong>Introduction To Database</strong
                              ><br /><span>oct 21st 20233468008761</span>
                            </div>
                          </div>
                          <div class="col-3">
                            <div>
                              <button class="action abtn btn">Add</button>
                            </div>
                          </div>
                        </div>

                        <div class="row crow mb-3 pt-2 p-2">
                          <div class="col-1">
                            <b-icon
                              icon="folder"
                              font-scale="2.5"
                              style="background: #d7ecf5; color: #5cb9e1"
                              class="rounded-circle p-2"
                            ></b-icon>
                          </div>
                          <div class="col-8 mb-2" style="text-align: left">
                            <div class="mtxt">
                              <strong>Introduction To Database</strong
                              ><br /><span>oct 21st 20233468008761</span>
                            </div>
                          </div>
                          <div class="col-3">
                            <div>
                              <button class="action abtn btn">Add</button>
                            </div>
                          </div>
                        </div>

                        <div class="row crow mb-3 p-2">
                          <div class="col-1">
                            <b-icon
                              icon="folder"
                              font-scale="2.5"
                              style="background: #d7ecf5; color: #5cb9e1"
                              class="rounded-circle p-2"
                            ></b-icon>
                          </div>
                          <div class="col-8 mb-2" style="text-align: left">
                            <div class="mtxt">
                              <strong>Introduction To Database</strong
                              ><br /><span>oct 21st 20233468008761</span>
                            </div>
                          </div>
                          <div class="col-3">
                            <div>
                              <button class="action abtn btn">Add</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-col>
                    <b-col class="col-12 mt-4"> </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col class="col-12 mt-5">
                <div class="row">
                  <b-col class="col-2"></b-col>
                  <b-col class="col-8">
                    <b-button
                      v-b-modal.modal-multi-1
                      style="background: #20618c; color: #fff; width: 100%"
                      size="lg"
                      >Next</b-button
                    >
                  </b-col>
                  <b-col class="col-2"></b-col>

                  <b-modal
                    id="modal-multi-1"
                    size="lg"
                    :hide-header="true"
                    :hide-footer="true"
                  >
                    <div
                      class="col-12 text-center pt-2 pb-2"
                      style="background: #d7ecf5; color: #09709a"
                    >
                      <strong>Preview</strong>
                    </div>

                    <b-row>
                      <b-col>
                        <b-row>
                          <b-col class="col-12 text-center pt-2 pb-2">
                            <strong>200 Level Courses Registration</strong
                            ><br /><span>
                              Review the selected courses and click CONTINUE to
                              proceed
                            </span>
                          </b-col>
                          <b-col class="col-12">
                            <b-card>
                              <div>
                                <b-table
                                  sticky-header
                                  :items="items"
                                  head-variant="dark"
                                ></b-table>
                              </div>
                            </b-card>
                          </b-col>
                          <b-col class="col-12 mt-4">
                            <b-card style="background: #f7f8f9">
                              <b-row>
                                <b-col class="col-12">
                                  <div class="row pt-1 pb-1">
                                    <div
                                      class="col-9 ml-2"
                                      style="text-align: left"
                                    >
                                      Max Credit
                                    </div>
                                    <div class="col-3">21</div>
                                  </div>
                                </b-col>
                                <b-col class="col-12">
                                  <div class="row pt-1 pb-1">
                                    <div
                                      class="col-9 ml-2"
                                      style="text-align: left"
                                    >
                                      Number Of Selected Courses
                                    </div>
                                    <div class="col-3">4</div>
                                  </div>
                                </b-col>
                                <b-col class="col-12">
                                  <div class="row pt-1 pb-1">
                                    <div
                                      class="col-9 ml-2"
                                      style="text-align: left"
                                    >
                                      Selected Credit Level
                                    </div>
                                    <div class="col-3">10</div>
                                  </div>
                                </b-col>
                              </b-row>
                            </b-card>
                          </b-col>
                          <b-col>
                            <div class="mt-3 text-center">
                              <button
                                class="cancel"
                                style="
                                  margin-right: 20px;
                                  background: #dcecf5;
                                  color: #006794;
                                "
                              >
                                Cancel
                              </button>
                              <button
                                class="cancel"
                                style="background: #006794; color: #fff"
                                v-b-modal.modal-multi-2
                              >
                                Proceed
                              </button>
                            </div>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-modal>

                  <b-modal
                    id="modal-multi-2"
                    centered
                    title="Second Modal"
                    ok-only
                    :hide-header="true"
                    :hide-footer="true"
                  >
                    <b-row>
                      <b-col class="col-12 text-center">
                        <b-icon-exclamation-triangle-fill
                          variant="warning"
                          font-scale="4"
                        ></b-icon-exclamation-triangle-fill>
                      </b-col>
                      <b-col class="col-12 text-center"
                        ><strong
                          >You are about to register these selected
                          courses</strong
                        ><br /><span
                          >click submit to register or cancel to edit them</span
                        ></b-col
                      >
                      <b-col class="col-12">
                        <div class="mt-3 text-center">
                          <button
                            class="cancel"
                            style="
                              margin-right: 20px;
                              background: #dcecf5;
                              color: #006794;
                            "
                            @click="hide('modal-multi-2')"
                          >
                            Cancel
                          </button>
                          <button
                            class="cancel"
                            style="background: #006794; color: #fff"
                          >
                            Submit
                          </button>
                        </div>
                      </b-col>
                    </b-row>
                  </b-modal>

                  <b-modal
                    id="modal-multi-3"
                    size="sm"
                    title="Third Modal"
                    ok-only
                  >
                    <p class="my-1">Third Modal</p>
                  </b-modal>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
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

.abtn {
  background: #e6f9eb;
  color: #63bb7d;
  border-color: #e6f9eb;
}
.rbtn {
  background: #faeeee;
  color: #dd888a;
  border-color: #faeeee;
}
.crow {
  background: #fff;
  border-radius: 10px;
}

.scos {
  text-align: left;
  border: 4px solid #15a0fb;
  border-radius: 10px;
}

@media() {
}

@media (max-width: 450px) {
  body {
    font-size: 12px;
  }

  .btn {
    font-size: 12px;
    float: left;
  }

  .divbtn {
    margin-left: 15px;
  }

  .mtxt {
    margin-left: 15px;
  }
}
</style>
