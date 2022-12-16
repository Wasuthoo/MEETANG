// !!!copy ma yang mai dai kae!!!
import { defineStore } from "pinia";
//import axios from "axios";

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

export const savingGoalStore = defineStore({
  name:'Goal',
  state: () => ({
    name: null,
    amount: 0,
    dateStart: 0,
    dateEnd:0,
    description: null
  }),
  actions: {
    editName() {
      this.name = document.getElementById("name").value;
    },
    editAmount(){
      this.amount = document.getElementById("amount").value;
    },
    editDate(){
      this.dateStart = document.getElementById("dateStart").value;
    },
    editDescription(){
      this.description = document.getElementById("description").value;
    }
  },
  getters: {
    getname: (state) => {
      return this.name
    },
    getamount: (state) => {
      return this.amount
    },
    getdate: (state) => {
      return this.dateStart
    },
    getdescription: (state) => {
      return this.description
    }
  }
})