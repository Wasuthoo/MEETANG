<template>
  <v-container fluid class="bg-blue-lighten-5 pa-12" width="100%" height="100%">
    <h1>Food near me </h1>
    <hr class="solid">
    <v-row col="6">
      <v-col>
        <h2 class="pa-6" style="color: dodgerblue;">
          Meetang
        </h2>
      </v-col>
    </v-row>
    <div>
      <!-- แถว 1 -->
      <v-row>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop1BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              มาดามตามสั่ง - วัดปากลมบน
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะวิทยาศาสตร์
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 8888 7777
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop2BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              ข้าวมันไก่ป้าน้อย
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะวิศวะกรรมศาสตร์
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 7777 6666
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop3BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              ก๊วยเตี๋ยวต้มยำเฮียเล้ง
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะวิทยาศาสตร์
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 6666 5555
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <!-- แถว 2 -->
      <v-row>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop4BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              หมูปิ้งลุงรัง
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะเทคโนโลยีการเกษตร
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 5555 4444
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop5BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              ส้มตำสังค์ทอง
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะเทคโนโลยีสารสนเทศ
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 3333 2222
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop6BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              สเต็กพี่โตเนื้อแน่น
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะบริหารธุรกิจ
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 2222 1111
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <!-- แถวที่ 3 -->
      <v-row>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop7BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              ข้าวแกงกะหรี่พรี่คาซึยะ
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะครุศาสตร์
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 9898 8787
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop8BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              ซูชิไข่เค็ม
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะวิทยาศาสตร์
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 8787 7676
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col>
          <v-card @click="handleCardClick" class="mx-5" max-width="361" to='detailshop'>
            <v-img class="white--text align-end" height="200px" src="/shop/Shop9BG.png">
            </v-img>
            <v-card-title style="font-weight: 700;">
              ชาชักกระรอกบิน
            </v-card-title>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="red">
                mdi-map-marker
              </v-icon>
              โรงอาหารคณะวิศวะกรรมศาสตร์
            </v-card-subtitle>
            <v-card-subtitle class="my-2" style="font-size: 16px;">
              <v-icon color="blue">
                mdi-phone
              </v-icon>
              09 7676 6565
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- จบหน้าร้าน -->
    <div class="justify-center align-center">
      <v-container class="justify-center align-center">
        <v-btn class="justify-center align-center" size="x-large" variant="outlined" color="blue">
          ดูเพิ่มเติม
        </v-btn>
      </v-container>
    </div>

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


<style>
.ct {
  align-items: center;
}
</style>


