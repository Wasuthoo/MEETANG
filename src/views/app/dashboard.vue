<template>
  <v-container fluid class="bg-blue-lighten-5 pa-12" width="100%">
    <h1>Dashboard</h1>
    <hr class="solid">

    <!-- Card -->
    <v-card class="gradient d-flex justify-center pa-6 my-5 rounded-lg">
      <img class="ma-1" src="/icon/user1.png" alt="user 1" height="120" width="120" />
      <div class="ma-1 px-5">
        <h1 class="text-center">สรุปรายการความเคลื่อนไหวบัญชีประจำปี</h1>
        <h2 class="text-center text-white">คุณธนวรรณ ณ กรุงเทพมหานคร</h2>
        <h2 class="text-center text-white">64050138@kmitl.ac.th</h2>
      </div>
    </v-card>


    <v-row>
      <v-col>
        <v-card class="pa-6 bg-green-lighten-4 rounded-lg">
          <h1 class="my-n2">ยอดเงินเข้ารวม</h1>
          <h1 class="text-end">326,000 บาท</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-6 bg-red-lighten-4 rounded-lg">
          <h1 class="my-n2">ยอดเงินออกรวม</h1>
          <h1 class="text-end">326,000 บาท</h1>
        </v-card>
      </v-col>
    </v-row>
    <!-- SummaryCard -->
    <v-card class="my-6 pa-4 px-5 rounded-lg ">
      <h1>สรุปรายการความเคลื่อนไหวบัญชีประจำเดือนธันวาคม</h1>
      <hr class="solid">
      <div class="d-flex pa-4">
        <v-img src="/imageDash/Graph1.png" height="500" width="200" />
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
    <v-btn @click="test" >push me</v-btn>
  </v-container>
</template>

<script>
import { store_account } from "../../stores/store";

export default {
  // Declare Vue file (View/Component) is named
  name: "dashboard",

  // Declare local variables (scoped only this file)
  data: () => ({
    modelStore: store_account(),
    acc: [],

  }),

  // Declare computed for get reactive data/variables
  // In this case, use to get data from pinia
  computed: {
    getAccList() {
      return this.modelStore.getAcc;
    },
  },

  // Declare method/function
  methods: {
    QueryAcc() {
      this.modelStore.getQueryAccount();
      this.acc = this.getAccList;
    },
  },

  // In my understand this is like "Constructur method in java :)
  mounted() {
    this.QueryAcc();

  },
};
</script>
<style scoped>
.gradient {
  background: rgb(129, 172, 255);
  background: linear-gradient(0deg, rgba(129, 172, 255, 1) 0%, rgba(67, 130, 254, 1) 100%);
}
</style>