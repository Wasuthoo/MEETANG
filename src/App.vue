<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { store_account } from "/src/stores/store.js";

export default {
  name: 'App',

  data: () => ({
    modelStore: store_account(),
  }),
  methods: {
    QueryAcc() {
      this.modelStore.getQueryAccount();
    },
  },

  mounted() {
    this.QueryAcc();
  },
}
</script>
