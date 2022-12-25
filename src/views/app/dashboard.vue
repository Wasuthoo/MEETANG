<template>
  <v-container fluid class="bg-blue-lighten-5 pa-12" width="100%">

    <h1>Dashboard</h1>
    <hr class="solid">

    <!-- Card -->
    <v-card class="gradient d-flex justify-center pa-4 my-5 rounded-lg">
      <img class="ma-1" src="/icon/user1.png" alt="user 1" height="100" width="100" />
      <div class="ma-1 px-5">
        <h2 class="text-center">สรุปรายการความเคลื่อนไหวบัญชีประจำปี</h2>
        <h3 class="text-center text-white">{{ this.acc.displayName }}</h3>
        <h3 class="text-center text-white">{{ this.acc.email }}</h3>
      </div>
    </v-card>

    <v-row>
      <v-col>
        <v-card class="pa-4  rounded-lg" style="background-color: #58B99C;">
          <h2 class="mb-n4">ยอดเงินเข้ารวม</h2>
          <h1 class="text-end font-weight-bold">4100 บาท</h1>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4  rounded-lg" style="background-color: #B95858;">
          <h2 class="mb-n4">ยอดเงินออกรวม</h2>
          <h1 class="text-end">2050  บาท</h1>
        </v-card>
      </v-col>
    </v-row>

    <!-- SummaryCard -->
    <v-card class="my-6  py-n5 rounded-lg " style="background: rgba(255,255,255,0.3);">
     
      <div class="d-flex justify-end pa-2">
        <v-tooltip text="คลิกที่กราฟเพื่อดูยอดเงินในแต่ละเดือน">
  <template v-slot:activator="{ props }">
    <v-icon v-bind="props">mdi-information-outline</v-icon>

  </template>
</v-tooltip>
      </div>
      <v-img v-if="graphClick === false" @click="graphClick=true" class="d-flex justify-center mx-auto" src="../../../public/imageDash/Yg.png" height="550" width="800" />
      <v-img v-else @click="graphClick=false" class="d-flex justify-center mx-auto" src="../../../public/imageDash/YgH.png" height="550" width="800" />
      <v-img v-else @click="graphClick=false" class="d-flex justify-center mx-auto" src="../../../public/imageDash/YgH.png" height="550" width="800" />
      <v-container v-if="graphClick === true">
        <hr class="solid">
        <v-card class="bg-yellow-darken-2 my-6">
          <h2 class="pa-2 text-center text-blue-darken-4"> สรุปรายการความเคลื่อนไหวบัญชีประจำเดือนเมษายน</h2>
        </v-card>
        <v-row>
      <v-col>
        <v-card class="pa-4 my-2 rounded-lg" style="background-color: #58B99C;">
          <h2 class="my-n2">ยอดเงินเข้ารวม</h2>
          <h2 class="text-end">28000 บาท</h2>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4 my-2 rounded-lg" style="background-color: #B95858;">
          <h2 class="my-n2">ยอดเงินออกรวม</h2>
          <h2 class="text-end">23000  บาท</h2>
        </v-card>
      </v-col>
    </v-row>
     <div>
        
          <v-img class="d-flex justify-center mx-auto" src="../../../public/imageDash/MgMay.png" height="550" width="800" />

     </div>
      </v-container >
    </v-card>
  </v-container>
</template>

<script>
import { store_account } from "../../stores/store";

export default {
  // Declare Vue file (View/Component) is named
  name: "dashboard",

  // Declare local variables (scoped only this file)
  data() {
    return {
      graphClick : false,
      modelStore: store_account(),
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

  // Declare methods (scoped only this file)
  methods: {
    async getAccount() {
      await new Promise(resolve => setTimeout(resolve, 100));
      const res = await this.modelStore.getUser;
      this.acc = res;
      console.log(res);
    },


  },
  mounted() {
    this.getAccount();
    console.log(this.acc);
    this.show = true
  },
  // "Constructur method" for Vue
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Poppins');

.gradient {
  background: rgb(129, 172, 255);
  background: linear-gradient(0deg, rgba(129, 172, 255, 1) 0%, rgba(67, 130, 254, 1) 100%);
}
</style>