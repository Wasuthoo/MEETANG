<script>
import Datepicker from 'vue3-datepicker';
export default {
    name: "goalCard",
    props: {
        savingGoal: {
            type: Array,
            required: true,
        },
    },
    components: {
        Datepicker
    },
    methods: {
        onClickCard(goal) {
            this.selectedGoal = { ...goal }
            this.showdialog = true;
        },
        onSaveGoal() {
            let index = this.savingGoal.findIndex(goal => goal.id === this.selectedGoal.id);
            this.savingGoal[index] = { ...this.selectedGoal };
            this.editMode = false;
            this.showdialog = false;
        },
        onCancelGoal() {
            this.editMode = false;
            this.showdialog = false;
        },
        onDeleteGoal() {
            let index = this.savingGoal.findIndex(goal => goal.id === this.selectedGoal.id);
            this.savingGoal.splice(index, 1);
            this.editMode = false;
            this.showdialog = false;
        },
    },
    data() {
        return {
            showdialog: false,
            editMode: false,
            selectedGoal: {},
            form: {
                name: "",
                amount: "",
                date: null,
                description: "",
            },
        };
    },
};
</script>

<template>
    <v-card style="margin:20px 100px; border:1px solid black; " outlined max-width="1200px" @click="onClickCard(goal)"
        v-for="goal in savingGoal" :key="goal.id">
        <v-card-title>{{ goal.name }}</v-card-title>
        <v-card-text class="mx-2"> {{ goal.saving }} / {{ goal.amount }}</v-card-text>
        <v-card-subtitle class="mx-2">{{ Math.floor((new Date(goal.date) - new Date()) / (1000 * 3600 * 24)) }} days left.
            End in {{ new Date(goal.date).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}
        </v-card-subtitle>
        <v-card-text class="mx-2">{{ goal.description }}</v-card-text>
    </v-card>


    <v-dialog v-model="showdialog" max-width="500px">
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

            <v-card-actions v-if="editMode">
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="onDeleteGoal">DELETE</v-btn>
                <v-btn color="blue darken-1" text @click="onCancelGoal">CANCLE</v-btn>
                <v-btn color="blue darken-1" text @click="onSaveGoal">SAVE</v-btn>
            </v-card-actions>

            <v-card-actions v-else>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="editMode = true">EDIT</v-btn>
                <v-btn color="blue darken-1" text @click="showdialog = false">CLOSE</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>


</template>

