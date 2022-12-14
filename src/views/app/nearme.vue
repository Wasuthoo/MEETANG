<template>
    <h1 class="pa-5">Food near me </h1>
    <hr/>
    <h2 class="pa-5">Meetang 
        <v-row>

        <v-col
            cols="12"
            sm="6"
        >

        <v-text-field
            solo
            label="Append"
            append-icon="mdi-map-marker"
        ></v-text-field>

        </v-col>
        </v-row>
    </h2>

  <div>
        <v-card @click="handleCardClick" class="mx-5" max-width="361" to = 'detailshop'>
        
        <v-img
            class="white--text align-end"
            height="200px"
            src="/shop/Shop1BG.png"
        >
        </v-img>

        <v-card-title>
            มาดามตามสั่ง - วัดปากลมบน
        </v-card-title>

        <v-card-subtitle>
            \n
        </v-card-subtitle>

        <v-card-subtitle class="my-2">
            <v-icon>
                mdi-star
            </v-icon>
            4.9
            <v-icon>
                mdi-walk
            </v-icon>
            0.3 km
        </v-card-subtitle>

        </v-card>

        <v-card @click="handleCardClick" class="mx-5" max-width="361" to = 'detailshop'>
        
        <v-img
            class="white--text align-end"
            height="200px"
            src="/shop/Shop1BG.png"
        >
        </v-img>

        <v-card-title>
            มาดามตามสั่ง - วัดปากลมบน
        </v-card-title>

        <v-card-subtitle>
            \n
        </v-card-subtitle>

        <v-card-subtitle class="my-2">
            <v-icon>
                mdi-star
            </v-icon>
            4.9
            <v-icon>
                mdi-walk
            </v-icon>
            0.3 km
        </v-card-subtitle>

        </v-card>
    </div>

    <div>
        <v-card @click="handleCardClick" class="mx-auto" max-width="361" to = 'detailshop'>
        
        <v-img
            class="white--text align-end"
            height="200px"
            src="/shop/Shop1BG.png"
        >
        </v-img>

        <v-card-title>
            มาดามตามสั่ง - วัดปากลมบน
        </v-card-title>

        <v-card-subtitle>
            \n
        </v-card-subtitle>

        <v-card-subtitle class="my-2">
            <v-icon>
                mdi-star
            </v-icon>
            4.9
            <v-icon>
                mdi-walk
            </v-icon>
            0.3 km
        </v-card-subtitle>

        </v-card>
    </div>

    <v-container class="d-flex justify-end mb-6">
        <v-btn to = 'detailshop'>มาดามตามสั่ง</v-btn>
    </v-container>
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