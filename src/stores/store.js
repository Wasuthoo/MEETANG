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
    account : [],
    user: {},
    uid: "",
    index: "",

  }),

  // Declare Getter method
  getters: {
    getUser: (state) => {
      return state.user;
    }
  },

  // Declare actions method 
  actions: {
    updateAcc(){
      this.account[this.index] = this.user;
      this.UpdateDB(this.account);
    },
    clearAcc(){
      this.user = "";
      this.uid = "";
    },

    setAcc(){
      for (let i = 0; i < this.account.length; i++) {
        if (this.account[i].uid == this.uid) {
          this.user = this.account[i];
          console.log("User is :" + " "+this.user.Fname);
          this.index = i;
          return this.user;
        }
        else 
          return alert("I am an alert box!");
      }
    },
    setUID(payload){
      this.uid = payload;
      console.log("User uid is :" + " "+this.uid);
      this.setAcc();

    },

    // get data from database and set it as variable
    async getQueryAccount() {
      try {
        const res = await axios.get(apiUrl + subApiAccount);
        this.account = res.data;
        console.log(
          "API: [",
          apiUrl + subApiAccount,
          "]: \n",
          this.account
        );
      } catch (e) {
        console.error(e);
      }
    },
    //add data to database
    async UpdateDB(payload) {
      try {
        const res = await axios.post(apiUrl + subApiAccount, payload);
      } catch (e) {
        console.error(e);
      }
      this.getQueryAccount();
    },
  },
});
