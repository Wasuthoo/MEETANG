<template>
  <v-navigation-drawer class="bg-blue fill-height" style="width:115px;
          background: linear-gradient(180deg, #4181FD 0%, #5A92FF 59.82%, #A3C2FF 100%);" rail permanent>
    <v-list-item class="pa-4 my-3 mx-4" nav prepend-avatar="../m.png"></v-list-item>

    <v-divider></v-divider>
  
    <v-list density="compact" nav>
      <v-list-item value="cashbook" class="text-center my-5" to="/app/dashboard">
        <v-img src="/icon/Chart.png" height="20" class="mt-1">
        </v-img>
        <a class="text-caption">Dashboard</a>
      </v-list-item>
      <v-list-item value="cashbook" class="text-center my-5" to="/app/cashbook">
        <v-img src="/icon/Wallet.png" height="20" class="mt-1">
        </v-img>
        <a class="text-caption">CashBook</a>
      </v-list-item>
      <v-list-item value="savingGoal" class="text-center my-5" to="/app/savinggoal">
        <v-img src="/icon/Award.png" height="20" class="mt-1">
        </v-img>
        <a class="text-caption">SavingGoal</a>
      </v-list-item>
      <v-list-item value="cashbook" class="text-center my-5" to="/app/nearme">
        <v-img src="/icon/Buy.png" height="20">
        </v-img>
        <a class="text-caption">Near-me</a>
      </v-list-item>
    </v-list>

    <div class="text-center my-5">
      <button id="logout-btn" @click="logout" style="margin-top: 230px;">
        <v-icon X-large>
          mdi-logout
        </v-icon>
        <span class="text-caption">Logout</span>
      </button>
    </div>

  </v-navigation-drawer>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { store_account } from "/src/stores/store";

export default {
  name: "sideMenu",
  data() {
    return {
      
    }
  },
  setup() {
    const auth = getAuth();
    const router = useRouter();
    return {
      auth,
      router,
    };
  },

  methods: {
    test() {
      console.log("test");
    },
    logout() {
      signOut(this.auth)
        .then(() => {
          // Sign-out successful.
          console.log("Sign-out successful.");
        })
        .catch((error) => {
          // An error happened.
          console.log("An error happened.");
        });

    },
  },
  mounted() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        this.router.push("/");
      }
    });
  },
};
</script>

<style>
#logout-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 300px;
  border-radius: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: white;
}

#logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);

}
</style>