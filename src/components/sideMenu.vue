<template>
    <!-- <v-card fluid class="fill-height bg-blue-lighten-5"> -->
        <!-- <v-layout class="fill-height"> -->
            <v-navigation-drawer class="bg-blue fill-height" style="width:115px;
          background: linear-gradient(180deg, #4181FD 0%, #5A92FF 59.82%, #A3C2FF 100%);" rail permanent>
                <v-list-item class="pa-4 my-3 mx-4" nav prepend-avatar="../m.png"></v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item value="cashbook" class="text-center my-5" to="/app/dashboard" >
                        <v-img src="/icon/Chart.png" height="20" class="mt-1">
                        </v-img>
                        <a class="text-caption">Dashboard</a>
                    </v-list-item>
                    <v-list-item value="cashbook" class="text-center my-5" to="/app/cashbook" >
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
            </v-navigation-drawer>
            <!-- <v-main></v-main> -->
        <!-- </v-layout> -->
    <!-- </v-card> -->
</template>
