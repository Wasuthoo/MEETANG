<template>
	<v-container fluid class="bg-red-lighten-5 pa-12" width="100%">
		<h1>CashBook</h1>
		<hr class="solid">
		<v-container fluid class="my-6">
			<v-row>
				<v-col>
					<!-- AccountCard -->
					<v-card class="mb-6  pa-2 px-5 rounded-xl ">
						<h1>Account</h1>
						<hr class="solid">
						<div class="py-6 d-flex justify-space-between my-1">
							<div>
								<h3>Wallet</h3>
								<p>Last used:12/03/2022</p>
							</div>
							<h1 class="text-green">15,000 Baht</h1>
						</div>
						<hr class="solid">
						<div class="py-6">
							<h3 class="">Saving goal</h3>
							<div class="d-flex justify-space-between">
								<ul class="px-8">
									<li>Iphone 16 Max Ranger</li>
									<li>Gucci Belt</li>
								</ul>
								<h1 class="text-green my-n3">500 Baht</h1>
							</div>
						</div>

					</v-card>
					<!-- Income card -->
					<v-card class="pa-2 px-5 rounded-xl ">
						<h1>Income</h1>
						<hr class="solid">
						<v-card class="my-3 d-flex " flat>
							<img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />
							<div class="pa-2 mr-auto">
								<h3>ฝากเงิน</h3>
								<a>wallet</a>
							</div>
							<div class="align-center d-flex">
								<div class="px-2">
									<a>5,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
							</div>
						</v-card>

						<!-- component income card -->
						<v-card class="my-3 d-flex " flat>
							<!-- picture  -->
							<img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />

							<div class="pa-2 mr-auto">
								<h3>ฝากเงิน</h3>
								<a>wallet</a>
							</div>

							<div class="align-center d-flex">
								<div class="px-2">
									<a>5,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
							</div>
						</v-card>

						<!-- component income card -->
						<v-card class="my-3 d-flex " flat>
							<!-- picture  -->
							<img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />

							<div class="pa-2 mr-auto">
								<h3>หนูนาพาโชค</h3>
								<a>wallet</a>
							</div>

							<div class="align-center d-flex">
								<div class="px-2">
									<a>100,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
							</div>
						</v-card>

						<!-- component income card -->
						<v-card class="my-3 d-flex " flat>
							<!-- picture  -->
							<img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />

							<div class="pa-2 mr-auto">
								<h3>หนูนาพาโชค</h3>
								<a>wallet</a>
							</div>

							<div class="align-center d-flex">
								<div class="px-2">
									<a>100,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/greenReg.png" height="65" width="10" />
							</div>
						</v-card>
					</v-card>





				</v-col>


				<v-col>

					<!-- TodayCard -->
					<v-card class="pa-2 px-5 rounded-xl ">
						<div class="d-flex justify-space-between">
							<h1>Today</h1>
							<h2>5 December 2022</h2>
						</div>
						<hr class="solid">
						<v-card class="bg-green-lighten-4 my-3 d-flex justify-space-between">
							<div class="d-flex">
								<h1 class="text-green px-2">Income</h1>
								<img class="pa-4 mx-1" src="/imageDash/moneyIncrease.png" height="100" />
							</div>

							<h1 class="text-green ">0 Baht</h1>
						</v-card>
						<v-card class="bg-red-lighten-4 my-3 d-flex justify-space-between">
							<div class="d-flex">
								<h1 class="text-red px-2">Expend</h1>
								<img class="pa-4 mx-1" src="/imageDash/moneyDecrease.png" height="100" />
							</div>

							<h1 class="text-red ">0 Baht</h1>
						</v-card>
					</v-card>



					<!-- ExpenseCard -->
					<v-card class="my-5 pa-2 px-5 rounded-xl">
						<h1>Expense</h1>
						<hr class="solid">

						<!-- component income card -->
						<v-card class="my-3 d-flex " flat>
							<!-- picture  -->
							<img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />

							<div class="pa-2 mr-auto">
								<h3>ถอนเงิน</h3>
								<a>wallet</a>
							</div>

							<div class="align-center d-flex">
								<div class="px-2">
									<a>5,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
							</div>
						</v-card>

						<!-- component income card -->
						<v-card class="my-3 d-flex " flat>
							<!-- picture  -->
							<img class="ma-2 mx-3" src="/imageDash/hand-money.png" height="50" />

							<div class="pa-2 mr-auto">
								<h3>ถอนเงิน</h3>
								<a>wallet</a>
							</div>

							<div class="align-center d-flex">
								<div class="px-2">
									<a>5,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
							</div>
						</v-card>

						<!-- component income card -->
						<v-card class="my-3 d-flex " flat>
							<!-- picture  -->
							<img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />

							<div class="pa-2 mr-auto">
								<h3>หนูนาดับโชค</h3>
								<a>wallet</a>
							</div>

							<div class="align-center d-flex">
								<div class="px-2">
									<a>100,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
							</div>
						</v-card>

						<!-- component income card -->
						<v-card class="my-3 d-flex " flat>
							<!-- picture  -->
							<img class="ma-2 mx-3" src="/imageDash/bingo.png" height="50" />

							<div class="pa-2 mr-auto">
								<h3>หนูนาดับโชค</h3>
								<a>wallet</a>
							</div>

							<div class="align-center d-flex">
								<div class="px-2">
									<a>100,000</a><br />
									<a>11/04/22</a>
								</div>
								<v-img src="../../../public/imageDash/redReg.png" height="65" width="10" />
							</div>
						</v-card> <!-- end of component income card -->
					</v-card>
				</v-col> <!-- end of first col -->
			</v-row> <!-- end of first row -->
		</v-container>
		<v-btn @click="" style="position: fixed; bottom: 5vh; right: 5vw;" icon="mdi-plus" color="primary"
        size="large">
    </v-btn>
	</v-container>
</template>
