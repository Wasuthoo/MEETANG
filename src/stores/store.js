import { defineStore } from "pinia";
import axios from "axios";

// ! ----- CONST VARIABLES ----- ! //
const apiUrl = "http://localhost:3000";
const subApiAccount = "/account";


// ! ----- MODEL ----- ! //
export const store_account = defineStore({
  id: "account",
  // Declare variables
  state: () => ({
    auth: {},
    account: [],
    user: {},
  }),

  // Declare Getter method
  getters: {
    getUser(){
      return this.user;
    },
    getTransaction: (state) => {
      return state.user.cashbook.transactions;
    }
  },

  // Declare actions method 
  actions: {
    // updateAcc(){
    //   this.account[this.index] = this.user;
    //   this.UpdateDB(this.account);
    // },
    clearAcc(){
      this.user = "";
      this.uid = "";
    },

    // setAcc(){
    //   for (let i = 0; i < this.account.length; i++) {
    //     if (this.account[i].uid == this.uid) {
    //       this.user = this.account[i];
    //       console.log("User is :" + " "+this.user.Fname);
    //       this.index = i;
    //       return this.user;
    //     }
    //     if (i == this.account.length - 1) {
    //       this.user = "";
    //       alert("User not found in database file ");
    //       return 0;
    //     }

    //   }
    // },
    // setUID(payload){
    //   this.uid = payload;
    //   console.log("User uid is :" + " "+this.uid);
    //   this.setAcc();
    // },

    async setUser(uid) {
      if (this.account.length == 0) {
        console.log("Account is empty");
        return 0;
      }
      
      let qaccount = this.account.filter((acc) => acc.uid == uid);
      console.log(this.account.length)
      console.log(qaccount.length)
      // console.log(uid);
      // console.log(this.account);
      // console.log(qaccount);
      if (qaccount.length == 0) {
        // alert("User not found in database file ");
        // alert("Please register first");
        return 0;
      } else {
        this.user = qaccount[0];
        // alert("User is :" + " "+this.user.Fname);
        console.log("User is :" + " " + this.user.Fname);
        return this.user;
      }
    },

    setAuth(payload) {
      this.auth = payload;
      console.log(this.auth);
    },

    // get data from database and set it as variable
    async getQueryAccount() {
      try {
        const res = await axios.get(apiUrl + subApiAccount);
        this.account = res.data;
        // console.log(
        //   "API: [",
        //   apiUrl + subApiAccount,
        //   "]: \n",
        //   this.account
        // );
        console.log(this.account);
      } catch (e) {
        console.error(e);
      }
    },
    //add data to database
    // async UpdateDB(payload) {
    //   try {
    //     const res = await axios.post(apiUrl + subApiAccount, payload);
    //   } catch (e) {
    //     console.error(e);
    //   }
    //   this.getQueryAccount();
    // },
  },
});
