import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const savingGoalStore = defineStore({
  name:'Goal',
  state: () => ({
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
