<template>
  <v-container fluid style="height:100%;" class="bg-blue-lighten-5">
    <img style="position:fixed;top:-300px; left:-470px; height:2500PX; z-index:1;"
      src="..//..//assets//bgLoginSignup.svg">

    <v-card id="register-form" style="z-index: 2;">
      <v-card-title class="pa-5">
        <h1 class="text-center my-5">Create new Account</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="register">
          <!-- <v-text-field label="Username" v-model="form.name" :rules="rules.name" :counter="25" required /> -->
          <v-text-field label="Email" v-model="form.email" :rules="rules.email" required />
          <v-text-field label="Password" v-model="form.password" :rules="rules.password" required />
          <v-text-field label="Confirm Password" v-model="form.confirmPassword" :rules="rules.confirmPassword"
            required />
          <v-btn id="summit-btn" type="submit">Register</v-btn>
        </v-form>
      </v-card-text>
      <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
        <span style="background-color: #FFFFFF; padding: 0 10px;">
          OR<!--Padding is optional-->
        </span>
      </div>
      <div id="another-logins">
        <v-btn class="another-login" variant="outlined" @click="googleLogin">
          <svg style="width:20px; height:20px;" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48">
            <defs>
              <path id="a"
                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
            </defs>
            <clipPath id="b">
              <use xlink:href="#a" overflow="visible" />
            </clipPath>
            <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
            <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
            <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
            <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
          </svg>
          <span> &nbsp;&nbsp; SIGN WITH GOOGLE </span>
        </v-btn>
      </div>
    </v-card>
  </v-container>

</template>

<script>
import { ref } from "vue";
// import form firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useRouter } from 'vue-router';
import { store_account } from '/src/stores/store';

export default {
  name: 'Register',
  data() {

    const DefaultForm = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

    return {
      router: useRouter(),
      valid: true,
      form: Object.assign({}, DefaultForm),
      rules: {
        name: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 25) || 'Name must be less than 25 characters',
        ],
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or greater than 6 characters',
        ],
        confirmPassword: [
          v => (v && v === this.form.password) || 'Confirm password must be equal to password',
        ],
      }
    }
  },
  methods: {

    register() {
      this.$refs.form.validate()

      if (!this.valid) {
        return
      } else {
        this.router.push('/login');
        // createUserWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
        //   .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     console.log(user);
        //     // print uid
        //     console.log(user.uid);
        //     this.router.push('/app/dashboard');
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     const errorCode = error.code;
        //     const errorMessage = error.message;

        //     alert(errorMessage);
        //   });
      }

    },
    googleLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.router.push('/app/dashboard');
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          alert(errorMessage);
        });
    },
  }
};

</script>

<style>
#register-form {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  left: 0;
  right: 0;
  padding: 5px 50px;
}

#summit-btn {
  margin: 20px auto;
  left: 0;
  right: 0;
  width: 40%;
  display: block;
  background-color: #77ADFF;
  color: white;
}

#another-logins {
  display: flex;
}

.another-login {
  margin: 20px auto;
  padding: 10px auto;
  display: block;
  background-color: #77ADFF;
  color: white;
  width: 80%;
}
</style>