<template>
    <v-container fluid style="height:100%;" class="bg-blue-lighten-5">
        <img style="position:fixed;top:-300px; left:-470px; height:2500PX; z-index:1;"
            src="..//..//assets//bgLoginSignup.svg">

        <v-card id="register-form" style="z-index: 2;">
            <v-card-title class="pa-5">
                <h1 class="text-center my-5">Login to MEETANG</h1>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" @submit.prevent="login">
                    <v-text-field label="Email" v-model="form.email" required />
                    <v-text-field label="Password" v-model="form.password" required/>
                    <span>forget password</span>
                    <v-btn id="summit-btn" type="submit">LOGIN</v-btn>
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
                    <span> &nbsp;&nbsp; LOGIN WITH GOOGLE </span>
                </v-btn>
                <v-btn class="another-login" variant="outlined">
                    <svg style="width:33px; height:33px;" xmlns="http://www.w3.org/2000/svg" height="800" width="1200"
                        viewBox="-204.79995 -341.33325 1774.9329 2047.9995">
                        <path
                            d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
                            fill="#1877f2" />
                        <path
                            d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
                            fill="#fff" />
                    </svg>
                    <span> &nbsp;&nbsp; LOGIN WITH FACEBOOK </span>
                </v-btn>
            </div>
        </v-card>
    </v-container>

</template>

<script>
import { ref } from "vue";
// import form firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useRouter } from 'vue-router';
export default {
    name: 'Register',
    data() {

        const DefaultForm = {
            email: '',
            password: '',
        }

        return {
            router: useRouter(),
            valid: true,
            form: Object.assign({}, DefaultForm),
        }
    },
    methods: {
        login() {
            signInWithEmailAndPassword(getAuth(), this.form.email, this.form.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    this.router.push('/app/dashboard');
                })
                .catch((error) => {
                    alert("Email or password is incorrect");
                });
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

    },
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
}
</style>