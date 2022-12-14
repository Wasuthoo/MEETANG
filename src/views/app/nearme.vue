<template>
    <h1 class="pa-5">Food near me </h1>
    <hr/>
    <h2 class="pa-5">Meetang

        <v-form>

        <v-container>           

        <v-text-field
            solo
            label="กรุณาระบุตำแหน่งปัจจุบันของมึง"
            append-icon="mdi-map-marker"
        ></v-text-field>

        </v-container>

        </v-form> 

    </h2>

  <div>

    <v-row>

        <v-col>

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
        
        </v-col>

        <v-col>
            <v-card @click="handleCardClick" class="mx-5" max-width="361" to = 'detailshop'>
        
        <v-img
            class="white--text align-end"
            height="200px"
            src="/shop/Shop2BG.png"
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

        </v-col>

        <v-col>
            
        <v-card @click="handleCardClick" class="mx-5" max-width="361" to = 'detailshop'>
    
        <v-img
            class="white--text align-end"
            height="200px"
            src="/shop/Shop3BG.png"
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

        </v-col>

    </v-row>

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