<template>
    <sideMenu/>
    <v-main>
      <RouterView/>
    </v-main>
</template>

<script>
import sideMenu from "../components/sideMenu.vue";
export default {
  name: "HomeView",
  components: {
    sideMenu,
  },
};

</script>




