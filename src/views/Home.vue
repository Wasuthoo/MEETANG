<template>
  <v-card fluid class="fill-height bg-blue-lighten-5">
    <h1 class="pa-10">Home</h1>
    <router-link to="/app">
      <v-btn color="primary">Go to App</v-btn>
    </router-link>
  </v-card>


</template>

<script>
export default {
name: "HomeView",
components: {
  // SideMenu,
},
};

</script>