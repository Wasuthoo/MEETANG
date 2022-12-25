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
    user: {},
  }),

  // Declare Getter method
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getTransaction: (state) => {
      return state.user.cashbook.transactions;
    }
  },

  // Declare actions method 
  actions: {
   
    
    async setUser(uid) {
      if(uid == null || uid == undefined || uid == ""){
        alert("uid is null");
        return 0;
      }
      try {
        const res = await axios.get(apiUrl + subApiAccount + "/" + uid);
        this.user = res.data;
        console.log(this.user);
      } catch (e) {
        console.error(e);
      }
      
    },

    async addUser(account) {
      try {
        const res = await axios.post(apiUrl + subApiAccount, account);
        this.user = res.data;
      } catch (e) {
        console.error(e);
      }
    },

    async googleLogin(user) {
      try {
        const res = await axios.get(apiUrl + subApiAccount + "/" + user.uid);
        this.user = res.data;
        console.log(this.user);
      } catch (e) {
        // if user not found create new user
        const userdata = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          cashbook:{
            cashbook_id: Math.floor(Math.random() * 1000000000)+new Date().getTime(),
            balance: 0,
            transactions: [],
          },
          goals: [],
        }

        this.addUser(userdata);
      }
    },

    //add data to database
    async UpdateDB(payload) {
      try {
        const res = await axios.post(apiUrl + subApiAccount, payload);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
