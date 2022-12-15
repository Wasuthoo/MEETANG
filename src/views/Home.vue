<template>
  <v-container fluid class="fill-height bg-blue-lighten-5">

    <!-- NavBar -->
    <v-card class="rounded-xl pa-5 ma-10 d-flex justify-space-between"
      style="border: 3px solid #4198FD; border-radius: 10px;">
      <div class="d-flex">
        <v-img src="../../public/m.png" style="height : 50px; width:50px;" />
        <div>
          <h3 class="px-3 mx-4">MEETANG</h3>
          <a class="mx-7 mt-">ระบบจัดการบัญชี</a>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div id="buttons" class="py-2">
        <v-btn col class="mx-2" to="/">
          Home
        </v-btn>
        <v-btn class="mx-2" to="/about">
          About
        </v-btn>
        <v-btn class="mx-2" color="#77ADFF" style="color:#FFFFFF;" to="/login">
          Log in
        </v-btn>
        <v-btn class="mx-2" color="#274DD5" style="color:#FFFFFF;" to="/login">
          Sign up
        </v-btn>
      </div>
    </v-card>
    <!-- end of NavBar -->
  <v-container fluid>
    <div class="d-flex justify-center">
      <v-img class="mx-16" src="../../public/big-wallet.png" style="height : 500px; width:500px;" ></v-img>
      <div>
        <h1>วางแผนและจัดการรายรับ-รายจ่าย</h1>
        <h1>ในชีวิตประจำวันด้วย MEETANG </h1>
        <a>อำนวยความสะดวกในการจัดทำรายการบัญชีรายรับ-รายจ่าย</a><br/>
        <a>และเป็นตัวช่วยในการตั้งเป้าหมายในการออมเงินของผู้ใช้ </a><br/>
        <a>โดยมีจุดมุ่งหมายสูงสุดคือการช่วยส่งเสริมให้ผู้ใช้มีระเบียบวินัย </a><br/>
        <a>ในการใช้จ่ายต่างๆในชีวิตประจำวัน </a><br/>


      </div>
    </div>


  </v-container>





  </v-container>
</template>
