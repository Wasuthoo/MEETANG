<template>
    <v-container fluid style="height:100%" class="bg-blue-lighten-5">
        <v-card class="ma-10 pa-5">
            <v-card-title class="pa-5">
                <h1 class="text-center my-5">Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Username" v-model="username" />
                    <v-text-field label="Password" v-model="password" />
                    <v-btn class="" to="/app/dashboard">Login</v-btn>
                </v-form>
            </v-card-text>
        </v-card>

    </v-container>
    <v-container>


    </v-container>

</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
        };
    },
};
</script>