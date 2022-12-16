<template>
	<div class="bg">
		<h1 class="pa-5">Food near me </h1>
		<hr />

		<v-row col="6">

			<v-col>

				<h2 class="pa-6" style="color: dodgerblue;">
					Meetang
				</h2>

			</v-col>

			<v-col>

				<v-form>

					<v-container class="mx-auto">

						<v-text-field solo label="กรุณาระบุตำแหน่งปัจจุบันของคุณ">

							<template v-slot:append>
								<v-icon color="red">mdi-map-marker</v-icon>
							</template>

						</v-text-field>

					</v-container>

				</v-form>

			</v-col>

		</v-row>

		<div>

			<!-- แถว 1 -->
			<v-row>

				<v-col>

					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop1BG.png">
						</v-img>

						<v-card-title>
							มาดามตามสั่ง - วัดปากลมบน
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							4.9
							<v-icon color="black">
								mdi-walk
							</v-icon>
							0.3 km
						</v-card-subtitle>

					</v-card>

				</v-col>

				<v-col>
					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop2BG.png">
						</v-img>

						<v-card-title>
							ข้าวมันไก่ป้าน้อย
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							4.4
							<v-icon color="black">
								mdi-walk
							</v-icon>
							0.5 km
						</v-card-subtitle>

					</v-card>

				</v-col>

				<v-col>

					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop3BG.png">
						</v-img>

						<v-card-title>
							ก๊วยเตี๋ยวต้มยำเฮียเล้ง
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							4.6
							<v-icon color="black">
								mdi-walk
							</v-icon>
							0.8 km
						</v-card-subtitle>

					</v-card>

				</v-col>

			</v-row>

			<!-- แถว 2 -->
			<v-row>

				<v-col>

					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop4BG.png">
						</v-img>

						<v-card-title>
							หมูปิ้งลุงรัง
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							3.9
							<v-icon color="black">
								mdi-walk
							</v-icon>
							1.0 km
						</v-card-subtitle>

					</v-card>

				</v-col>

				<v-col>
					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop5BG.png">
						</v-img>

						<v-card-title>
							ส้มตำสังค์ทอง
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							3.4
							<v-icon color="black">
								mdi-walk
							</v-icon>
							1.3 km
						</v-card-subtitle>

					</v-card>

				</v-col>

				<v-col>

					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop6BG.png">
						</v-img>

						<v-card-title>
							สเต็กพี่โตเนื้อแน่น
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							5.0
							<v-icon color="black">
								mdi-walk
							</v-icon>
							1.4 km
						</v-card-subtitle>

					</v-card>

				</v-col>

			</v-row>

			<!-- แถวที่ 3 -->
			<v-row>

				<v-col>

					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop7BG.png">
						</v-img>

						<v-card-title>
							ข้าวแกงกะหรี่พรี่คาซึยะ
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							4.7
							<v-icon color="black">
								mdi-walk
							</v-icon>
							1.5 km
						</v-card-subtitle>

					</v-card>

				</v-col>

				<v-col>
					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop8BG.png">
						</v-img>

						<v-card-title>
							ซูชิไข่เค็ม
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							4.2
							<v-icon color="black">
								mdi-walk
							</v-icon>
							1.5 km
						</v-card-subtitle>

					</v-card>

				</v-col>

				<v-col>

					<v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>

						<v-img class="white--text align-end" height="200px" src="/shop/Shop9BG.png">
						</v-img>

						<v-card-title>
							ชาชักกระรอกบิน
						</v-card-title>

						<v-card-subtitle>
							<br>
						</v-card-subtitle>

						<v-card-subtitle class="my-2">
							<v-icon color="orange">
								mdi-star
							</v-icon>
							4.8
							<v-icon color="black">
								mdi-walk
							</v-icon>
							1.7 km
						</v-card-subtitle>

					</v-card>

				</v-col>

			</v-row>

		</div>
		<!-- จบหน้าร้าน -->

		<div class="justify-center align-center">

			<v-container class="justify-center align-center">

				<v-btn class="justify-center align-center" size="x-large" variant="outlined" color="blue">
					ดูเพิ่มเติม
				</v-btn>

			</v-container>

		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleCardClick() {
			// add logic to handle card click here
		}
	}
}
</script>

<style>
.bg {
	background-color: #EEF7FF;
}
</style>

<style>
.ct {
	align-items: center;
}
</style>


