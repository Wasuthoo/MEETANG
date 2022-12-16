<template>
    <v-container fluid class="bg-red-lighten-5 pa-12" width="100%">
      <h1>CashBook</h1>
      <hr class="solid">
      <v-container fluid class="my-6">
        <v-row>
          <v-col>
            <!-- SummaryCard -->
            <v-card class="pa-2 px-5 rounded-xl ">
              <h1>Summary</h1>
              <hr class="solid">
              <div class="d-flex">
                <v-img src="/imageDash/Graph.png" height="200" width="200" />
                <div class="pa-3">
                  <v-card class="bg-green-lighten-5 pa-2 ma-3 rounded-lg" width="320">
                    <h3>income</h3>
                    <h1 class="text-end px-2">1,000 Baht</h1>
                  </v-card>
                  <v-card class="bg-red-lighten-5 pa-2 ma-3 rounded-lg" width="320">
                    <h3>expense</h3>
                    <h1 class="text-end px-2">3,000 Baht</h1>
                  </v-card>
                </div>
              </div>
            </v-card>
  
            <!-- AccountCard -->
            <v-card class="mt-6 pa-2 px-5 rounded-xl ">
              <h1>Account</h1>
              <hr class="solid">
              <div class="d-flex justify-space-between my-1">
                <div>
                  <h3>Wallet</h3>
                  <p>Last used:12/03/2022</p>
                </div>
                <h1 class="text-green">15,000 Baht</h1>
              </div>
              <hr class="solid">
              <h3 class="">Saving goal</h3>
              <div class="d-flex justify-space-between">
                <ul class="px-8">
                  <li>Iphone 16 Max Ranger</li>
                  <li>Gucci Belt</li>
                </ul>
                <h1 class="text-green my-n3">500 Baht</h1>
              </div>
            </v-card>
  
            <!-- TodayCard -->
            <v-card class="mt-6 pa-2 px-5 rounded-xl ">
              <div class="d-flex justify-space-between">
                <h1>Today</h1>
                <h2>5 December 2022</h2>
              </div>
              <hr class="solid">
              <v-card class="bg-green-lighten-4 my-3 d-flex justify-space-between">
                <div class="d-flex">
                  <h1 class="text-green px-2">Income</h1>
                  <img class="pa-4 mx-1" src="/imageDash/moneyIncrease.png" height="100" />
                </div>
                
                <h1 class="text-green ">0 Baht</h1>
              </v-card>
              <v-card class="bg-red-lighten-4 my-3 d-flex justify-space-between">
                <div class="d-flex">
                  <h1 class="text-red px-2">Expend</h1>
                  <img class="pa-4 mx-1" src="/imageDash/moneyDecrease.png" height="100" />
                </div>
                
                <h1 class="text-red ">0 Baht</h1>
              </v-card>
            </v-card>
          </v-col>
          
  
          <!-- Income card -->
          <v-col>
            <v-card class="pa-2 px-5 rounded-xl ">
              <h1>Income</h1>
              <hr class="solid">
              <v-card class="my-3 d-flex " flat>
                <img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />
                <div class="pa-2 mr-auto">
                  <h3>ฝากเงิน</h3>
                  <a>wallet</a>
                </div>
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>5,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
                </div>
              </v-card>
  
              <!-- component income card -->
              <v-card class="my-3 d-flex " flat>
                <!-- picture  -->
                <img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />
  
                <div class="pa-2 mr-auto">
                  <h3>ฝากเงิน</h3>
                  <a>wallet</a>
                </div>
  
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>5,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
                </div>
              </v-card>
  
              <!-- component income card -->
              <v-card class="my-3 d-flex " flat>
                <!-- picture  -->
                <img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />
  
                <div class="pa-2 mr-auto">
                  <h3>หนูนาพาโชค</h3>
                  <a>wallet</a>
                </div>
  
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>100,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
                </div>
              </v-card>
  
              <!-- component income card -->
              <v-card class="my-3 d-flex " flat>
                <!-- picture  -->
                <img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />
  
                <div class="pa-2 mr-auto">
                  <h3>หนูนาพาโชค</h3>
                  <a>wallet</a>
                </div>
  
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>100,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
                </div>
              </v-card>
  
  
            </v-card>
  
            <!-- Expense -->
            <v-card class="my-5 pa-2 px-5 rounded-xl">
              <h1>Expense</h1>
              <hr class="solid">
  
              <!-- component income card -->
              <v-card class="my-3 d-flex " flat>
                <!-- picture  -->
                <img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />
  
                <div class="pa-2 mr-auto">
                  <h3>ถอนเงิน</h3>
                  <a>wallet</a>
                </div>
  
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>5,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
                </div>
              </v-card>
  
              <!-- component income card -->
              <v-card class="my-3 d-flex " flat>
                <!-- picture  -->
                <img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />
  
                <div class="pa-2 mr-auto">
                  <h3>ถอนเงิน</h3>
                  <a>wallet</a>
                </div>
  
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>5,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
                </div>
              </v-card>
  
              <!-- component income card -->
              <v-card class="my-3 d-flex " flat>
                <!-- picture  -->
                <img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />
  
                <div class="pa-2 mr-auto">
                  <h3>หนูนาดับโชค</h3>
                  <a>wallet</a>
                </div>
  
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>100,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
                </div>
              </v-card>
  
              <!-- component income card -->
              <v-card class="my-3 d-flex " flat>
                <!-- picture  -->
                <img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />
  
                <div class="pa-2 mr-auto">
                  <h3>หนูนาดับโชค</h3>
                  <a>wallet</a>
                </div>
  
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>100,000</a><br />
                    <a>11/04/22</a>
                  </div>
                  <v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
                </div>
              </v-card> <!-- end of component income card -->
            </v-card>
          </v-col> <!-- end of first col -->
        </v-row> <!-- end of first row -->
      </v-container>
    </v-container>

    <v-btn @click="addForm = !addForm" style="position: fixed; bottom: 5vh; right: 5vw;" icon="mdi-plus" color="primary"
        size="large">
    </v-btn>

    <v-dialog v-model="addForm" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline ma-6">Add a new transaction</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                      <v-col cols="10">
                            <v-text-field id="type" label="Income or Expense" required>
                              <select id="type" class="form-control" required>
                                <option value="" disabled selected>Income or Expense</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                              </select>
                            </v-text-field>
                        </v-col>
                        <v-col cols="10">
                            <v-text-field id="nametransection" label="Name Transection" required></v-text-field>
                        </v-col>
                        <v-col cols="10">
                            <v-text-field id="account" label="Account" required></v-text-field>
                        </v-col>
                        <v-col cols="10">
                            <v-text-field id="date" label="Date" required></v-text-field>
                        </v-col>
                        <v-col cols="10">
                            <v-text-field id="amount" label="Amount" required></v-text-field>
                        </v-col>
                        <v-col cols="10">
                            <v-text-field id="note" label="Note" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="addForm = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="addForm = false">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

  </template>

<script>
import goalCard from "..//..//components//cashbook//cashCard.vue";

export default {
    name: "CashGoal",
    components: {
        cashCard,
    },
    data() {
        return {
            // add a variable to store the data from the database
            
            // type1, type2
            Income: [
                {
                    id: 1,
                    // img: "",
                    type:"income",
                    name: "Saving Goal 1",
                    account: "",
                    amount: 1000,
                    date: "2021-01-01",
                },
                {
                    id: 2,
                    type:"income",
                    name: "Saving Goal 2",
                    account: "",
                    amount: 2000,
                    date: "2021-01-01",
                },
            ],
            addForm: false,
        };
    },
    methods: {
        onClickCard() {
            console.log("card clicked");
        },

        onSaveTransaction() {
            let type = document.getElementById("type").value;
            let name = document.getElementById("nametransection").value;
            let account = document.getElementById("account").value;
            let amount = document.getElementById("amount").value;
            let date = document.getElementById("date").value;
            console.log(name, amount, date, description);
            let newGoal = {
                id: this.Income.length + 1,
                type: type,
                name: name,
                account: account,
                amount: amount,
                date: date,
            };
            this.Income.push(newGoal);

            this.addForm = false;
        }

    }
};
</script>
