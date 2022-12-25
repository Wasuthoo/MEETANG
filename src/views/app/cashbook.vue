<template>
  <v-container fluid class="bg-blue-lighten-5 pa-12" width="100%" height="100%">
    <h1>CashBook</h1>
    <hr class="solid">
    <v-container fluid class="my-6">
      <v-card class="pa-2 px-5 rounded-lg">
        <div>
          <h2>บัญชี รายรับ รายจ่าย</h2>
          <h3>เก่ากว่า 09/11/22</h3>
        </div>
        <hr class="solid">
        <div class="parent">
          <v-card class="my-3 d-flex " flat v-for="item in acc.cashbook.transactions" :key="item.id">
            <img class="ma-2 mx-3" src="/imageCash/incomeRise.png" height="50" />
            <div class="pa-2 mr-auto">
              <h3>{{ item.name }}</h3>
              <a> {{ item.type }}</a>
            </div>
            <div class="align-center d-flex">
              <div class="px-2">
                <a>{{ item.amount }}</a><br />
                <a>{{ new Date(item.date).toLocaleDateString() }}</a>
              </div>
              <v-img v-if="item.type === 'Income'" src="../../../public/imageDash/greenReg.png" height="65"
                width="10" />
              <v-img v-else src="../../../public/imageDash/redReg.png" height="65" width="10" />

            </div>
          </v-card>
        </div>
      </v-card>
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
            <v-col cols="12">
              <label for="date" class="label">Date</label>
              <Datepicker v-model="form.date" class="text-field" label="Date" variant="outlined"
                placeholder="YYYY-MM-DD" />
            </v-col>
            <v-col class="d-flex" cols="12 py-0">
              <v-select :items="transactionsType" v-model="form.type" label="Type" variant="outlined"
                required></v-select>
            </v-col>
            <v-col cols="12 py-0">
              <v-text-field v-model="form.title" label="Title" variant="outlined" required></v-text-field>
            </v-col>
            <v-col cols="12 py-0">
              <v-text-field type="number" v-model="form.amount" label="Amount" prefix="฿" variant="outlined"
                required></v-text-field>
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
import Datepicker from 'vue3-datepicker';
import { store_account } from "../../stores/store";

export default {
  name: "cashbook",
  components: {
    Datepicker
  },
  data() {
    return {
      addForm: false,
      transactionsType: ['Income', 'Expense', 'Save to Goal'],
      accountType: ['Wallet', 'Goal'],
      form: {
        type: 'Income',
        title: '',
        amount: 0,
        date: new Date(),
      },

      acc: {
        "uid": "",
        "Fname": "",
        "Lname": "",
        "email": "",
        "cashbook": {
          "cashbookId": 1,
          "balance": 0,
          "transactions": []
        },
        "goals": []
      },
    };
  },
  methods: {
    onSaveTransaction() {

      let newtransaction = {
        id: Date.now(),
        type: this.form.type,
        name: this.form.title,
        amount: this.form.amount,
        date: this.form.date.toJSON(),
      };
      this.acc.cashbook.transactions.push(newtransaction);
      if (this.form.type === 'Income') {
        this.acc.cashbook.balance += parseInt(this.form.amount);
      } else {
        this.acc.cashbook.balance -= parseInt(this.form.amount);
      }

      this.form = {
        type: 'Income',
        title: '',
        amount: 0,
        date: new Date(),
      }

      this.addForm = false;
    }

  },
  computed: {
    incomes: function () {
      return this.acc.cashbook.transactions.filter((transaction) => {
        return transaction.type === "Income";
      }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
    expenses: function () {
      return this.acc.cashbook.transactions.filter((transaction) => {
        return transaction.type === "Expense" || transaction.type === "Save to Goal";
      }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
    goals: function () {
      return this.acc.cashbook.transactions.filter((transaction) => {
        return transaction.type === "Save to Goal";
      }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
    totalIncome: function () {
      let total = 0;
      this.incomes.forEach((incomes) => {
        total += parseInt(incomes.amount);
      });
      return total;
    },
    totalExpense: function () {
      let total = 0;
      this.expenses.forEach((expense) => {
        total += parseInt(expense.amount);
      });
      return total;
    },
    totalGoal: function () {
      let total = 0;
      this.goals.forEach((goal) => {
        total += parseInt(goal.amount);
      });
      return total;
    },
    // totalGoal: function () {
    //   let total = 0;
    //   this.goal.forEach((goal) => {
    //     if (transaction.account === "Goal") {
    //       total += parseInt(transaction.amount);
    //     }
    //   });
    //   return total;
    // },
    todayIncome: function () {
      let total = 0;
      this.incomes.forEach((incomes) => {
        if (new Date(incomes.date).toDateString() === new Date().toDateString()) {
          total += parseInt(incomes.amount);
        }
      });
      return total;
    },
    todayExpense: function () {
      let total = 0;
      this.expenses.forEach((expense) => {
        if (new Date(expense.date).toDateString() === new Date().toDateString()) {
          total += parseInt(expense.amount);
        }
      });
      return total;
    },
  },
  mounted() {
    const modelStore = store_account();
    this.acc = modelStore.getUser;
    console.log(this.acc);
  },

};

// var date = moment();

// var currentDate = date.format('D/MM/YYYY');
// console.log(currentDate); // "17/06/2022"

</script>

<style>
.parent {
  max-height: 400px;
  overflow-y: auto;
}

.parent::-webkit-scrollbar {
  width: 0px;
}

.text-field {
  box-sizing: border-box;
  border: 1px solid rgb(146, 146, 146);
  border-radius: 5px;
  padding: 10px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;
  color: rgb(0, 0, 0);
  transition: all 0.2s;
  width: 100%;
  margin-bottom: 12px;
}

.text-field:focus {
  border: 2px solid rgb(0, 0, 0);
  outline: none;
}
</style>