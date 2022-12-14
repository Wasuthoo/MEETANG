<template>
    <h1 class="pa-5">food near me </h1>
  <v-row class="pa-5">
    <v-col class="text-center ma-2 pa-2 height-100">
      <router-link to="/classroom/teacher">
        <v-card class="pa-5 bg-blue-lighten-5"> 
          <h2 class="pa-5">Teacher</h2>
          <img src="../public/teacher.jpg" alt="Teacher Mo" width="200" height="300">
        </v-card>
      </router-link>
    </v-col>
    <v-col class="text-center  ma-2 pa-2">
      <router-link to="/classroom/student">
        <v-card class="pa-5 bg-red-lighten-5" height="430"> <h2 class="pa-5">Student</h2> 
          <img src="../public/BEBE.png" alt="Student" width="200" height="230">
        </v-card>
        
      </router-link>
    </v-col>
  </v-row>
</template>