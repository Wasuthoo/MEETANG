<template>
    <h1>This is SavingGoal</h1>
    <!-- add a horizontal line -->
    <v-divider></v-divider>

    <v-card @click="onClickCard" v-for="goal in savingGoal" :key="goal.id">
        <v-card-title>{{ goal.name }}</v-card-title>
        <v-card-subtitle>{{ goal.amount }}</v-card-subtitle>
        <v-card-text>{{ goal.description }}</v-card-text>
    </v-card>

    <!-- add a circle button to bottom right-->
    <v-btn @click="addForm = !addForm" style="position: fixed; bottom: 5vh; right: 5vw;" icon="mdi-plus" color="primary" size="large">
    </v-btn>

    <v-dialog v-model="addForm" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Add a new saving goal</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field id="name" label="Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field id="amount" label="Amount" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field id="date" label="Date" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field id="description" label="Description" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="addForm = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="addForm = false">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "SavingGoal",
    data() {
        return {
            // add a variable to store the data from the database
            savingGoal: [
                {
                    id: 1,
                    name: "Saving Goal 1",
                    amount: 1000,
                    date: "2021-01-01",
                    description: "This is a description",
                },
                {
                    id: 2,
                    name: "Saving Goal 2",
                    amount: 2000,
                    date: "2021-01-01",
                    description: "This is a description",
                },
                {
                    id: 3,
                    name: "Saving Goal 3",
                    amount: 3000,
                    date: "2021-01-01",
                    description: "This is a description",
                },
            ],
            
            addForm: false,

        };
    },
    methods: {
        onClickCard() {
            console.log("card clicked");
        }
        
    }
};
</script>