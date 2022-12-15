<template>
  <v-container fluid class="bg-red-lighten-5 pa-12" width="100%">
    <h1>Dashboard</h1>
    <hr class="solid">
    <v-container fluid class="my-6">
      <v-row>
        <v-col>
          <!-- SummaryCard -->
          <v-card class="pa-2 px-5 rounded-xl ">
            <h1>Summary</h1>
            <hr class="solid">
            <div class="d-flex">
              <v-img src="/imageDash/Graph.png" height="200" width="200" />
              <div class="pa-3">
                <v-card class="bg-green-lighten-5 pa-2 ma-3 rounded-lg" width="320">
                  <h3>income</h3>
                  <h1 class="text-end px-2">1,000 Baht</h1>
                </v-card>
                <v-card class="bg-red-lighten-5 pa-2 ma-3 rounded-lg" width="320">
                  <h3>expense</h3>
                  <h1 class="text-end px-2">3,000 Baht</h1>
                </v-card>
              </div>
            </div>
          </v-card>

          <!-- AccountCard -->
          <v-card class="mt-6 pa-2 px-5 rounded-xl ">
            <h1>Account</h1>
            <hr class="solid">
            <div class="d-flex justify-space-between my-1">
              <div>
                <h3>Wallet</h3>
                <p>Last used:12/03/2022</p>
              </div>
              <h1 class="text-green">15,000 baht</h1>
            </div>
          </v-card>
        </v-col>
        <!-- end of AccountCard -->

        <!-- Income card -->
        <v-col>
          <v-card class="pa-2 px-5 rounded-xl ">
            <h1>Income</h1>
            <hr class="solid">

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
            <!-- end of component income card -->
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
            <!-- end of component income card -->
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
            <!-- end of component income card -->
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
            <!-- end of component income card -->

          </v-card>
        </v-col>
        <!-- end of first col -->
      </v-row>
      <!-- end of first row -->

      <!-- start 2 row -->
      <v-row>
        <!-- start row 2 col 1 -->
        <v-col>

        </v-col>
      </v-row>


    </v-container>



  </v-container>

</template>