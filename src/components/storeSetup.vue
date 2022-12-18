<template>
    <div></div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { store_account } from "/src/stores/store";
export default {
  name: "storeSetup",
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const modelStore = store_account();
    return {
      auth,
      router,
      modelStore,
    };
  },

  async beforeMount() {
    await this.modelStore.getQueryAccount();
    return;
  },

  async mounted() {
    await this.modelStore.setAuth(this.auth);
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log("User is signed in, uid: " + uid);
        this.modelStore.setUser(uid);
        
        // ...
      } else {
        // User is signed out
        // ...
        this.router.push("/login");
      }
    });
  },
};
</script>