
<template>
  <v-container fluid class="bg-blue-lighten-5 pa-12" width="100%">
      <h1>Dashboard</h1>
      <hr class="solid">

      <!-- Card -->
      <v-card class="gradient d-flex justify-center pa-6 my-5" >
          <img class="ma-1" src="/icon/user1.png" alt="user 1" height="120" width="120" />
          <div class="ma-1 px-5">
              <h1 class="text-center">สรุปรายการความเคลื่อนไหวบัญชีประจำปี</h1>
              <h2 class="text-center text-white">คุณธนวรรณ ณ กรุงเทพมหานคร</h2>
              <h2 class="text-center text-white">64050138@kmitl.ac.th</h2>
          </div>
      </v-card>
      <!-- end of card -->

      <v-row>
          <v-col>
              <v-card>
                  1
              </v-card>
          </v-col>
          <v-col>
              <v-card>
                  2
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<style scoped>
.gradient {
  background: rgb(129,172,255);
  background: linear-gradient(0deg, rgba(129,172,255,1) 0%, rgba(67,130,254,1) 100%);
}
</style>