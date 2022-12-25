import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia} from 'pinia'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUtTNn-_y221p9ib8bR1pe954462pgX3A",
  authDomain: "meetang-4812c.firebaseapp.com",
  projectId: "meetang-4812c",
  storageBucket: "meetang-4812c.appspot.com",
  messagingSenderId: "365757557534",
  appId: "1:365757557534:web:647d94449f2d1acaba370f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .mount('#app')
