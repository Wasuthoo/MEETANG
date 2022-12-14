<template>
  <v-card fluid class="fill-height bg-blue-lighten-5">
    <div id="nevbar" class="roundconner">
        <h1> MEETANG </h1>
        <div id="buttons">
            <v-btn col>
                Home
            </v-btn>
            <v-btn>
                About
            </v-btn>
            <v-btn color="#77ADFF" style="color:#FFFFFF;" to="/login">
                Log in
            </v-btn>
            <v-btn color="#274DD5" style="color:#FFFFFF;" to="/login">
                Sign up
            </v-btn>
        </div>
    </div>
    <router-link to="/app">
      <v-btn color="primary" elevation="3" >
        เริ่มต้นใช้งาน
      </v-btn>
    </router-link>
  </v-card>
</template>

<style> 
  #nevbar {
    position: fixed;
    padding: 6px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    margin: 50px auto;
    left: 0;
    right: 0;
  }
  
.roundconner {
    border: 3px solid #4198FD;
    border-radius: 10px;
}
</style>