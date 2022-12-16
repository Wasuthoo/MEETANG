<template>
	<v-container fluid style="height:100%" class="bg-blue-lighten-5">
		<h1 class="mt-7 text-center text-blue" style="font-size: 6em;">login</h1>
		<h2 class="text-center text-blue" style="font-size: 1.8em;">Enter your details to login</h2>
		<v-container class="d-flex align-center justify-center ">
			<img src="/login/money-bag.png" class="pa-5" height="400" />
			<div>
				<v-card class="ma-10 pa-10" width="600">
					<v-card-text>
						<v-form>
							<v-text-field label="Username" v-model="username" />
							<v-text-field label="Password" v-model="password" />
							<v-btn class="" to="/app/dashboard">Login</v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</div>
			
		</v-container>



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