<template>
   <v-container fluid class="bg-pink-lighten-4">
      <h1>Dashboard</h1>
      <br />
      <v-row>
         <v-col>
            <v-card class="ma-5 pa-5">
               <h1>Summary</h1>
               <div class="d-flex" > 
                  <img class="Oo-1" src="/icon/o.png" alt="O" height="200" /> 
                     <v-card class="ml-lg-auto bg-green lighten-3" height="60" to width="120px">
                        <div class="ml-2" >
                           <h5> Income </h5>
                              <div class="ml-lg-auto"> 
                                 <h3> 15,000 baht </h3> 
                              </div>
                        </div>
                     </v-card>
                     <br/>
                  <v-card class="ml-lg-auto bg-red lighten-3" height="60" to width="120px">
                        <div class="ml-2" >
                           <h5> Expense </h5>
                              <div class="ml-lg-auto"> 
                                 <h3> 3,000 baht </h3> 
                              </div>
                        </div>
                     </v-card>
                  </div>
            </v-card>
         </v-col>

         <v-col>
            <v-card class="ma-2 pa-5">
               <h1>Income</h1>

            </v-card>
         </v-col>
      </v-row>

      <v-row>

         <v-col>
            <v-card class="ma-2 pa-5">
               <h1>Accounts</h1>

            </v-card>
         </v-col>

         <v-col>
            <v-card class="ma-2 pa-5">
               <h1>Expense</h1>

            </v-card>
         </v-col>

      </v-row>
      <v-card class="mt-5 mx-2 pa-5">
               <h1>Today</h1>

            </v-card>

   </v-container>
</template>