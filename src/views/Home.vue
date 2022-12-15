<template>
  <v-card fluid class="fill-height bg-blue-lighten-5">
    
    <!-- NavBar -->
    <v-card class="rounded-xl pa-5 ma-10 d-flex justify-space-between" 
      style="border: 3px solid #4198FD; border-radius: 10px;"> 
        <div class="d-flex">
          <v-img src="../../public/m.png" style="height : 50px; width:50px;"/>
          <div>
            <h3 class="pa-3 mx-4">MEETANG</h3>
            <a></a>
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

    


  </v-card>
</template>
