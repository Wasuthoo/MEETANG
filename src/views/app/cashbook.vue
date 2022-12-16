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
            <div class="parent">
              <v-card class="my-3 d-flex " flat v-for="item in incomes" :key="item.id">
                <img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />
                <div class="pa-2 mr-auto">
                  <h3>{{ item.name }}</h3>
                  <a> {{ item.type }}</a>
                </div>
                <div class="align-center d-flex">
                  <div class="px-2">
                    <a>{{ item.amount }}</a><br />
                    <a>{{ item.date }}</a>
                  </div>
                  <v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
                </div>
              </v-card>
            </div>

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
            <v-col class="d-flex" cols="10">
              <v-select :items="transactionsType" id="type" label="Type" required></v-select>
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
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="addForm = false">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="onSaveTransaction">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
export default {
  name: "cashbook",
  data() {
    return {
      addForm: false,
      transactionsType: ['Income', 'Expense'],
      transactions: [
        {
          id: 1,
          type: "Income",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: 100000,
          date: "11/04/22",
        },
        {
          id: 2,
          type: "Expense",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: -50000,
          date: "11/04/22",
        },
        {
          id: 3,
          type: "Expense",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: -50000,
          date: "11/04/22",
        },
        {
          id: 4,
          type: "Expense",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: -50000,
          date: "11/04/22",
        },
        {
          id: 5,
          type: "Income",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: 100000,
          date: "11/04/22",
        },
        {
          id: 6,
          type: "Income",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: 100000,
          date: "11/04/22",
        },
        {
          id: 7,
          type: "Income",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: 100000,
          date: "11/04/22",
        },
        {
          id: 8,
          type: "Expense",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: -100000,
          date: "11/04/22",
        },
        {
          id: 9,
          type: "Income",
          name: "หนูนาดับโชค",
          account: "wallet",
          amount: 100000,
          date: "11/04/22",
        },
      ]
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
      console.log(type, name, account, amount, date);
      let newtransaction = {
        id: this.transactions.length + 1,
        type: type,
        name: name,
        account: account,
        amount: amount,
        date: date,
      };
      this.transactions.push(newtransaction);

      this.addForm = false;
    }

  },
  computed: {
    incomes: function () {
      return this.transactions.filter((transaction) => {
        return transaction.type === "Income";
      });
    }
  }
};
</script>

<style>
.parent {
  max-height: 320px;
  overflow-y: auto;
}

.parent::-webkit-scrollbar {
  width: 0px;
}
</style>