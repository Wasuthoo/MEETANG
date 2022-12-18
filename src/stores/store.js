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
  }),

  // Declare Getter method
  getters: {
    getAcc(){
      console.log(this.account)
      return this.account[0]
    },
  },

  // Declare actions method 
  actions: {
    
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

    // //add data to database
    // async addSug(payload) {
    //   try {
    //     const res = await axios.post(apiUrl + subApiFeedback, payload);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
    // async updateFeedback() {
    //   for(let i = 0; i < payload.length; i++){
    //     try {
    //       this.feedback[i].timestamp = payload[i].status;
    //       const res = await axios.put(apiUrl + subApiFeedback + "/" + payload[i].id, payload[i]);
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   }
      
    //   try {
    //     await axios.patch(apiUrl + subApiFeedback + "/"+ payload.id), {
    //       status: close,
    //     };
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }

  },
});