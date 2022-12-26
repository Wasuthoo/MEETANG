<template>
  <v-container fluid class="bg-blue-lighten-5 pa-12" width="100%" height="100%">
    <h1>CashBook</h1>
    <hr class="solid">
    <v-container fluid class="my-6">
      <v-card class="pa-3 px-5 rounded-lg">
        <div class="d-flex justify-space-between">
          <div class="mx-2 d-flex align-center">
            <h2 class="mr-2">บัญชีรายรับรายจ่าย</h2>
            <v-select v-model="selectedItem" :items="['ทั้งหมด', 'วันนี้', 'กำหนดเอง']" variant="underlined" required
              @update:modelValue="changeDateFilter"></v-select>
          </div>
          <div class="d-flex align-center ">
            <v-btn class="px-0" style="font-size:1rem" @click="onIncomeChange" variant="flat"
              v-bind:color="filter.expense ? 'white' : 'green'">
              <p class="mx-2" v-bind:style="[filter.expense ? { 'color': 'green' } : { 'color': 'white' }]">
                รายรับทั้งหมด :
                {{ numberWithCommas(totalIncome) }}</p>
            </v-btn>
            <v-btn class="px-0" @click="onExpenseChange" variant="flat" v-bind:color="filter.income ? 'white' : 'red'">
              <p class="mx-2" style="font-size:1rem"
                v-bind:style="[filter.income ? { 'color': 'red' } : { 'color': 'white' }]">
                รายจ่ายทั้งหมด : {{ numberWithCommas(totalExpense) }}</p>
            </v-btn>
            <p class="mx-2" style="font-size:1rem">คงเหลือ : {{ numberWithCommas(balance) }}</p>
            <v-icon class="ml-2">mdi-magnify</v-icon>
          </div>
        </div>
        <Datepicker v-model="filter.startDate" :upper-limit="filter.endDate" class="text-field" label="Start Date"
          variant="outlined" placeholder="YYYY-MM-DD" v-if="customDate" />
        <Datepicker v-model="filter.endDate" :lower-limit="filter.startDate" class="text-field" label="End Date"
          variant="outlined" placeholder="YYYY-MM-DD" v-if="customDate" />

        <hr class="solid">
        <div class="parent">
          <v-card class="my-3 d-flex " flat v-for="item in displayTransaction" :key="item.id">
            <img v-if="item.type === 'Income'" class="ma-2 mx-3" src="/imageCash/incomeRise.png" height="50" />
            <img v-else class="ma-2 mx-3" src="/imageCash/expenseFall.png" height="50" />
            <div class="pa-2 mr-auto">
              <h3>{{ item.name }}</h3>
              <a> {{ item.type }}</a>
            </div>
            <div class="align-center d-flex">
              <div class="px-2 " style="text-align: right;">
                <span>{{ numberWithCommas(item.amount) }} บาท</span><br />
                <span>{{ new Date(item.date).toLocaleDateString() }}</span>
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

  <v-btn @click="addForm = !addForm" style="color: white;position: fixed; bottom: 5vh; right: 5vw;" icon="mdi-plus" color="#4181fd"
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
            <v-col class="" cols="12 py-0">
              <v-select :items="transactionsType" v-model="form.type" label="Type" variant="outlined"
                required></v-select>
              <v-select  v-if="form.type === 'Save to Goal'" label="Select your goal" variant="outlined" :items="getGoal" item-title="name" item-value="id" v-model="form.goalId"
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
  setup() {
    return { selectedItem: "ทุกวัน" };
  },
  data() {
    return {
      addForm: false,
      transactionsType: ['Income', 'Expense', 'Save to Goal'],
      accountType: ['Wallet', 'Goal'],
      form: {
        type: 'Income',
        goalId: '',
        title: '',
        amount: 0,
        date: new Date(),
      },

      filter: {
        startDate: new Date(0),
        endDate: new Date(),
        income: true,
        expense: true,
      },
      customDate: false,

      acc: {
        "uid": "",
        "displayName": "",
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
    onIncomeChange() {
      this.filter.income = true;
      this.filter.expense = !this.filter.expense;
    },
    onExpenseChange() {
      this.filter.expense = true;
      this.filter.income = !this.filter.income;
    },
    changeDateFilter(a) {
      switch (a) {
        case 'วันนี้':
          this.customDate = false;
          this.filter = {
            startDate: new Date(),
            endDate: new Date(),
            income: true,
            expense: true,
          }
          break;
        case 'กำหนดเอง':
          let now = new Date();
          this.filter = {
            startDate: new Date(now.getFullYear(), now.getMonth(), 1),
            endDate: new Date(),
            income: true,
            expense: true,
          }
          this.customDate = true;
          break;

        default:
          this.customDate = false;
          this.filter = {
            startDate: new Date(0),
            endDate: new Date(),
            income: true,
            expense: true,
          }
          break;
      }
    },
    onSaveTransaction() {
      let amount = Number(this.form.amount);
      if(this.form.type === 'Expense'&& amount > this.acc.cashbook.balance){
        alert('Balance insufficient');
      }

      if(this.form.title === ''){
        alert('Please enter your title');
        return;
      }

      if(amount < 0){
        alert('Amount must be positive');
        return;
      }

      if(amount === 0) return;

      if(this.form.type === 'Save to Goal'){
        let goal = this.acc.goals.find(goal => goal.id === this.form.goalId);
        goal.saving += amount;
        if(amount < 0) alert('You stole money from your goal!');
      }

      if(amount < 0){
        amount = -amount;
        if(this.form.type === 'Income'){
          this.form.type = 'Expense';
        }else{
          this.form.type = 'Income';
        }
      }

      let newtransaction = {
        id: Date.now(),
        type: this.form.type,
        name: this.form.title,
        amount: amount,
        date: this.form.date.toJSON(),
      };
      this.acc.cashbook.transactions.push(newtransaction);
      if (this.form.type === 'Income') {
        this.acc.cashbook.balance += amount;
      } else {
        this.acc.cashbook.balance -= amount;
      }

      this.form = {
        type: 'Income',
        goalId: '',
        title: '',
        amount: 0,
        date: new Date(),
      }

      this.addForm = false;
    },
    numberWithCommas(x) {
      // phase x to number
      x = Number(x);
      if (x % 1 === 0)
        return x.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      else
        return x.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
    },
  },
  computed: {
    getGoal() {
      return this.acc.goals
      .filter(goal => goal.amount > goal.saving)
      .map(goal => { 
        return {
          name: goal.name,
          id: goal.id,
        }
       });
    },
    getTransactions: function () {
      this.filter.startDate.setHours(0, 0, 0, 0);
      this.filter.endDate.setHours(0, 0, 0, 0);
      return this.acc.cashbook.transactions.filter((transaction) => {
        let date = new Date(transaction.date);
        date.setHours(0, 0, 0, 0);
        return date >= this.filter.startDate && date <= this.filter.endDate;
      })
    },
    displayTransaction: function () {
      let transactions = this.getTransactions;
      return transactions.filter((transaction) => {
        if (this.filter.income && this.filter.expense) return true;
        else if (this.filter.income) return transaction.type === "Income";
        else if (this.filter.expense) return transaction.type === "Expense" || transaction.type === "Save to Goal";
        else return false;
      }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
    totalIncome: function () {
      let total = 0;
      this.getTransactions.forEach((transaction) => {
        if (transaction.type === "Income") {
          total += Number(transaction.amount);
        }
      });
      return total;
    },
    totalExpense: function () {
      let total = 0;
      this.getTransactions.forEach((transaction) => {
        if (transaction.type === "Expense") {
          total += Number(transaction.amount);
        }
      });
      return total;
    },
    balance: function () {
      return this.totalIncome - this.totalExpense;
    }

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
  height: 55vh;
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