
<script>
import goalCard from "..//..//components//savinggoal//goalCard.vue";
import { store_account } from "../../stores/store";
import Datepicker from 'vue3-datepicker';
export default {
    name: "SavingGoal",
    components: {
        goalCard,
        Datepicker
    },
    data() {
        return {
            acc: {
                "uid": "",
                "Fname": "",
                "Lname": "",
                "email": "",
                "cashbook": {
                    "cashbookId": 1,
                    "balance": 0,
                    "transactions": []
                },
                "goals": []
            },

            form: {
                name: "",
                amount: "",
                date: null,
                description: "",
            },

            Goals: [
                {
                    id: 1,
                    name: "Saving Goal 1",
                    saving: 100,
                    amount: 1000,
                    date: "2021-01-01",
                    description: "This is a description",
                },
                {
                    id: 2,
                    name: "Saving Goal 2",
                    saving: 0,
                    amount: 2000,
                    date: "2021-01-01",
                    description: "This is a description",
                },
                {
                    id: 3,
                    name: "Saving Goal 3",
                    saving: 3000,
                    amount: 3000,
                    date: "2021-01-01",
                    description: "This is a description",
                },
            ],
            addForm: false,
        };
    },
    methods: {
        onSaveGoal() {
            console.log(this.form);
            let newGoal = {
                id: this.Goals.length + 1,
                name: this.form.name,
                amount: this.form.amount,
                date: this.form.date,
                description: this.form.description,
            };
            this.Goals.push(newGoal);
            this.addForm = false;
        }

    },
    mounted() {
        const modelStore = store_account();
        this.acc = modelStore.getUser;
        console.log(this.acc);
    },
};
</script>

<template>
    <h1 class="pa-5">Saving Goal</h1>
    <hr />
    <v-divider></v-divider>

    <!-- <v-card @click="onClickCard" v-for="goal in savingGoal" :key="goal.id">
        <v-card-title>{{ goal.name }}</v-card-title>
        <v-card-subtitle>{{ goal.amount }}</v-card-subtitle>
        <v-card-text>{{ goal.description }}</v-card-text>
    </v-card> -->

    <goalCard v-if="this.Goals.length > 0" :savingGoal="this.Goals"></goalCard>
    <div v-else class="bg-purple-darken-2"
        style="display:absolute; margin:auto; top:0px; bottom:0px; left:0px; right:0px;">
        <h1 class="pa-5 text-medium-emphasis ">No aGoals</h1>
    </div>


    <!-- add a circle button to bottom right-->
    <v-btn @click="addForm = !addForm" style="position: fixed; bottom: 5vh; right: 5vw;" icon="mdi-plus" color="primary"
        size="large">
    </v-btn>

    <v-dialog v-model="addForm" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline ma-6">Add a new saving goal</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field id="name" label="Name" required variant="outlined"
                                v-model="form.name"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field id="amount" label="Amount" required variant="outlined"
                                v-model="form.amount"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <label for="date" class="label">Date end</label>
                            <Datepicker v-model="form.date" class="text-field" label="Date" variant="outlined"
                                placeholder="YYYY-MM-DD" />
                        </v-col>
                        <v-col cols="12">
                            <v-textarea clearable label="discription" variant="outlined"
                                v-model="form.description"></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="addForm = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="onSaveGoal">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style>
.text-field {
    box-sizing: border-box;
    border: 1px solid rgb(146, 146, 146);
    border-radius: 5px;
    padding: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 16px;
    color: rgb(0, 0, 0);
    transition: all 0.2s;
    width: 100%;
}

.text-field:focus {
    border: 2px solid rgb(0, 0, 0);
    outline: none;
}
</style>