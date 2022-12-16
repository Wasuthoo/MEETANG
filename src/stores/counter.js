// !!!copy ma yang mai dai kae!!!
import { defineStore } from "pinia";
import axios from "axios";

// ! ----- CONST VARIABLES ----- ! //
const apiUrl = "http://localhost:3000";
const subApiFeedback = "/feedback";


// ! ----- MODEL ----- ! //
export const store_feedback = defineStore({
  id: "feedback",
  // Declare variables
  state: () => ({
    feedback : [],
  }),

  // Declare Getter method
  getters: {
    getFeedback() {
      return this.feedback;
    },
  },

  // Declare actions method 
  actions: {

    //get data from database and set it as variable
    async getQueryFeedback() {
      try {
        const res = await axios.get(apiUrl + subApiFeedback);
        this.feedback = res.data;
        console.log(
          "API: [",
          apiUrl + subApiFeedback,
          "]: \n",
          this.feedback
        );
      } catch (e) {
        console.error(e);
      }
    },

    //add data to database
    async addSug(payload) {
      try {
        const res = await axios.post(apiUrl + subApiFeedback, payload);
      } catch (e) {
        console.error(e);
      }
    },
    async updateFeedback() {
      for(let i = 0; i < payload.length; i++){
        try {
          this.feedback[i].timestamp = payload[i].status;
          const res = await axios.put(apiUrl + subApiFeedback + "/" + payload[i].id, payload[i]);
        } catch (e) {
          console.error(e);
        }
      }
      
      try {
        await axios.patch(apiUrl + subApiFeedback + "/"+ payload.id), {
          status: close,
        };
      } catch (e) {
        console.error(e);
      }
    }

  },
});

export const savingGoal = defineStore({
  id:'username',
  state: () => ({
    
  })
})