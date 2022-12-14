<template>
    <h1>This is SavingGoal</h1>
    <!-- add a horizontal line -->
    <v-divider></v-divider>

    <!-- add a circle button to bottom right-->
    <v-btn @click="addForm = !addForm" style="position: fixed; bottom: 5vh; right: 5vw;" icon="mdi-plus" color="primary" size="large">
    </v-btn>

    <!-- add a form to add a new saving goal -->
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
        handleCardClick() {
            console.log("card clicked");
        },
        // add a method to add a new saving goal
        handleAddSavingGoal() {
            
        }
    }
};
</script>