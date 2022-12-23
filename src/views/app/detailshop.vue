<template>
  <v-container fluid class="bg-blue-lighten-5 pa-12" width="100%" height="100%">
    <h1 class="d-flex justify-start ml-4">มาดามตามสั่ง - วัดปากลมบน</h1>

    <div class="d-flex justify-start ml-4" max-width="3000000">
      <v-icon color="yellow darken-2">mdi-star</v-icon> 4.9
      <v-icon>mdi-walk</v-icon>
      0.3 km เวลาเปิดให้บริการ 14.00 น. - 18.00 น.
    </div>
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



    <v-tabs fixed-tabs bg-color="indigo-darken-5" class="mb-5">
      <v-tab>
        โปรโมชั่นพิเศษ
      </v-tab>
      <v-tab>
        เมนูแนะนำ
      </v-tab>
      <v-tab>
        เครื่องดื่ม
      </v-tab>
      <v-tab>
        ของหวาน
      </v-tab>
    </v-tabs>

    <!-- โปรโมชั่นพิเศษ -->
    <h1 class="d-flex justify-start ml-4">โปรโมชั่นพิเศษ</h1>
    <v-row>
      <v-col>
        <v-card class="pa-2" max-width="361">
          <v-card-item>
            <div>
              <div class="text-h6 mb-2">
                ข้าวมันไก่+โค๊ก
              </div>
              <v-img class="white--text align-end" height="200px" src="/shop/maxresdefault.jpg">
              </v-img>
              <div class="text-caption d-flex justify-center "> 60 บาท</div>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>

    <!-- เมนูแนะนำ -->
    <h1 class="d-flex justify-start ml-4">เมนูแนะนำ</h1>
    <v-row>
      <v-col>
        <v-card class="pa-2" max-width="361">
          <v-card-item>
            <div>
              <div class="text-h6 mb-2">
                ข้าวมันไก่
              </div>
              <v-img class="white--text align-end" height="200px" src="/shop/maxresdefault.jpg">
              </v-img>
              <div class="text-caption d-flex justify-center "> 50 บาท</div>
            </div>
          </v-card-item>
        </v-card>
      </v-col>


      <v-col>
        <v-card class="pa-2" max-width="361">
          <v-card-item>
            <div>
              <div class="text-h6 mb-2">
                ข้าวมันไก่ทอด
              </div>
              <v-img class="white--text align-end" height="200px" src="/shop/shop2BG.png">
              </v-img>
              <div class="text-caption d-flex justify-center "> 50 บาท</div>
            </div>
          </v-card-item>
        </v-card>

      </v-col>

      <v-col>
        <v-card class="pa-2" max-width="361">
          <v-card-item>
            <div>
              <div class="text-h6 mb-2">
                ข้าวขาหมู
              </div>
              <v-img class="white--text align-end" height="200px" src="/shop/ข้าวขาหมู-ดิ-เอมเมอรัลด์-02.jpg">
              </v-img>
              <div class="text-caption d-flex justify-center "> 50 บาท</div>
            </div>
          </v-card-item>
        </v-card>

      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-2" max-width="361">
          <v-card-item>
            <div>
              <div class="text-h6 mb-2">
                ข้าวกระเพราหมูกรอบ
              </div>
              <v-img class="white--text align-end" height="200px" src="/shop/307f7a8c980b465630deb20e93d4f1c4.jpg">
              </v-img>
              <div class="text-caption d-flex justify-center "> 50 บาท</div>
            </div>
          </v-card-item>
        </v-card>
      </v-col>


      <v-col>
        <v-card class="pa-2" max-width="361">
          <v-card-item>
            <div>
              <div class="text-h6 mb-2">
                ข้าวกระเพราหมูสับ
              </div>
              <v-img class="white--text align-end" height="200px" src="/shop/2e5e936a36586da03e09a4a39375fb0d.jpg">
              </v-img>
              <div class="text-caption d-flex justify-center "> 50 บาท</div>
            </div>
          </v-card-item>
        </v-card>

      </v-col>

      <v-col>
        <v-card class="pa-2" max-width="361">
          <v-card-item>
            <div>
              <div class="text-h6 mb-2">
                ข้าวกระเทียมพริกไทย
              </div>
              <v-img class="white--text align-end" height="200px"
                src="/shop/8Garlic-and-Pepper-Pork-with-Rice-590x418.jpg">
              </v-img>
              <div class="text-caption d-flex justify-center "> 50 บาท</div>
            </div>
          </v-card-item>
        </v-card>

      </v-col>
    </v-row>

    <!-- เครื่องดื่ม -->
    <h1 class="d-flex justify-start ml-4">เครื่องดื่ม</h1>
    <v-card class="pa-2" max-width="361">
      <v-card-item>
        <div>
          <div class="text-h6 mb-2">
            เลือดมาดาม
          </div>
          <v-img class="white--text align-end" height="200px" src="/shop/1590466225.jpg">
          </v-img>
          <div class="text-caption d-flex justify-center"> 20 บาท</div>
        </div>
      </v-card-item>
    </v-card>

    <!-- ของหวาน -->
    <h1 class="d-flex justify-start ml-4">ของหวาน</h1>
    <v-card class="pa-2" max-width="361">
      <v-card-item>
        <div>
          <div class="text-h6 mb-2">
            หัวใจคราเค่น
          </div>
          <v-img class="white--text align-end" height="200px" src="/shop/u2_14.jpg">
          </v-img>
          <div class="text-caption d-flex justify-center"> 20 บาท</div>
        </div>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<style>
.bg {
  background-color: #EEF7FF;
}
</style>
