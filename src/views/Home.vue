<template>
  <div class="container-center-horizontal">
    <div class="d-1-home">
      <div class="overlap-group5">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div class="ellipes-23"></div>
        <img class="d3" src="/home/d3.png" alt="D3" />
        <img class="d2" src="/home/d2.png" alt="D2" />
        <img class="d3-1" src="/home/d3-1.png" alt="D3-1" />
        <div class="text7">
          <div class="text-6">- แสดงรายละเอียดเป้าหมายการออม</div>
          <div class="text-5">- สร้างและแก้ไขเป้าหมายการออม</div>
        </div>
        <div class="text6">
          <h1 class="title">Savings goal</h1>
        </div>
        <div class="text5">
          <div class="text-8">- สรุปความเคลื่อนไหวบัญชีประจำเดือน</div>
          <div class="text-7">- สรุปความเคลื่อนไหวบัญชีประจำปี</div>
        </div>
        <div class="text4">
          <div class="cashbook">Cashbook</div>
        </div>
        <div class="text3">
          <div class="text-9">ตัวช่วยวางแผนสำหรับคุณ</div>
        </div>
        <router-link class="routerLink" to="/login">
          <img class="btn-start" src="/home/btnstart.png" alt="btnStart" />
        </router-link>
        <div class="text2">
          <div class="text-13">อำนวยความสะดวกในการจัดทำรายการบัญชีรายรับ-รายจ่าย</div>
          <div class="text-12">และเป็นตัวช่วยในการตั้งเป้าหมายในการออมเงินของผู้ใช้</div>
          <div class="text-11">โดยมีจุดมุ่งหมายสูงสุดคือการช่วยส่งเสริมให้ผู้ใช้มีระเบียบ</div>
          <div class="text-10">วินัยในการใช้จ่ายต่างๆในชีวิตประจำวัน</div>
        </div>
        <div class="text1">
          <div class="text-14">วางแผนและจัดการรายรับ-รายจ่าย</div>
          <div class="meetang">
            <span class="span0">ในชีวิตประจำวันด้วย </span>
            <!-- <span class="span"></span> -->
            <span class="span2">MEETANG</span>
          </div>
        </div>
        <img class="wallet-2" src="/home/wallet-2.png" alt="wallet 2" />
      </div>
      <div class="nav">
        <div class="overlap-group2">
          <img class="logo" src="/home/logo.png" alt="logo" />
          <img class="line" src="/home/line.png" alt="line" />
          <div class="overlap-group3">
            <div class="text">ระบบจัดการบัญชี</div>
            <div class="name">MEETANG</div>
          </div>
          <div class="place">Home</div>
          <div class="about">About</div>
          <router-link class="routerLink" to="/login">
            <div class="overlap-group1">
              <div class="login">log in</div>
            </div>
          </router-link>
          <router-link class="routerLink" to="/register">
            <div class="overlap-group">
              <div class="signup">sign up</div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex-row">
        <div class="flex-col">
          <div class="text8">
            <div class="dashboard">Dashboard</div>
          </div>
          <div class="text9">
            <div class="text-4">- แสดงสรุปรายรับ-รายจ่ายของบัญชี</div>
            <div class="text-3">- เพิ่มข้อมูลรายรับ-รายจ่ายของบัญชี</div>
          </div>
          <img class="d5" src="/home/d5.png" alt="D5" />
        </div>
        <div class="flex-col-1">
          <div class="overlap-group6">
            <img class="d4" src="/home/d4.png" alt="D4" />
            <img class="d4-2" src="/home/d4-2.png" alt="D4-2" />
            <img class="d4-1" src="/home/d4-1.png" alt="D4-1" />
          </div>
          <div class="text10">
            <div class="near-me">Near me</div>
          </div>
          <div class="text11" poppins-medium-white-20px>
            <div class="text-2">- แสดงร้านอาหารที่อยู่ใกล้เคียง</div>
            <div class="text-1">- ดูราคาของแต่ละเมนูในร้านอาหาร</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.d-1-home {
  background-color: #EEF7FF;
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 2979px;
  width: 100vw;
}

.overlap-group5 {
  background-color: #EEF7FF;
  height: 1924px;
  position: relative;
  width: 1440px;
  z-index: 1;
}

.bg1 {
  background-color: #EEF7FF;
  height: 1042px;
  left: 0;
  right: 0;
  margin: a;
  position: absolute;
  top: 0;
  width: 1440px;
}

.bg2 {
  background-color: #77ADFF;
  height: 882px;
  left: 0;
  position: absolute;
  top: 1042px;
  width: 1440px;
}

.ellipes-23 {
  background-color: #77ADFF;
  border-radius: 720px/142px;
  height: 284px;
  left: 0;
  position: absolute;
  top: 900px;
  width: 1440px;
}

.d3 {
  height: 355px;
  left: 140px;
  object-fit: cover;
  position: absolute;
  top: 1514px;
  width: 500px;
}

.d2 {
  height: 355px;
  left: 800px;
  object-fit: cover;
  position: absolute;
  top: 1090px;
  width: 500px;
}

.d3-1 {
  height: 138px;
  left: 604px;
  object-fit: cover;
  position: absolute;
  top: 1692px;
  width: 107px;
}

.text7 {
  display: flex;
  flex-direction: column;
  height: 60px;
  left: 840px;
  position: absolute;
  top: 1689px;
  width: 305px;
}

.text-6 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 301px;
}

.text-5 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 275px;
}

.text6 {
  display: flex;
  height: 54px;
  left: 840px;
  position: absolute;
  top: 1635px;
  width: 243px;
}

.title {
  font-size: 36px;
  color: #274DD5;
  font-weight: 800;
  height: 54px;
  line-height: normal;
  width: 241px;
}

.text5 {
  display: flex;
  flex-direction: column;
  height: 60px;
  left: 202px;
  position: absolute;
  top: 1265px;
  width: 322px;
}

.text-8 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 318px;
}

.text-7 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 288px;
}

.text4 {
  display: flex;
  height: 54px;
  left: 202px;
  position: absolute;
  top: 1211px;
  width: 193px;
}

.cashbook {
  font-size: 36px;
  color: #274DD5;
  font-weight: 800;
  height: 54px;
  line-height: normal;
  width: 191px;
}

.text3 {
  display: flex;
  height: 54px;
  left: 522px;
  position: absolute;
  top: 961px;
  width: 398px;
}

.text-9 {
  font-size: 34px;
  color: white;
  font-weight: 800;
  height: 54px;
  line-height: normal;
  width: 396px;

  left: 0;
  right: 0;
  margin: auto;
}

.btn-start {
  height: 68px;
  left: 780px;
  position: absolute;
  top: 626px;
  width: 208px;
}

.btn-start:hover {
  background-color: gray;
  border-radius: 15px;
}

.text2 {
  display: flex;
  flex-direction: column;
  height: 120px;
  left: 783px;
  position: absolute;
  top: 476px;
  width: 486px;
}

.text-13 {
  font-size: 19px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 465px;
}

.text-12 {
  font-size: 19px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 450px;
}

.text-11 {
  font-size: 19px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 478px;
}

.text-10 {
  font-size: 19px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 350px;
}

.text1 {
  display: flex;
  flex-direction: column;
  height: 108px;
  left: 783px;
  position: absolute;
  top: 338px;
  width: 521px;
}

.text-14 {
  font-size: 32px;
  color: black;
  font-weight: 800;
  height: 54px;
  line-height: normal;
  width: 517px;
}

.meetang {
  font-size: 32px;
  color: transparent;
  font-weight: 800;
  height: 54px;
  line-height: normal;
  width: 476px;
}

.span0 {
  color: black;
  font-weight: 800;
}

.span1 {
  color: #0f222b;
  font-weight: 800;
}

.span2 {
  color: #274DD5;
  font-weight: 800;
  letter-spacing: 0;
}

.wallet-2 {
  height: 472px;
  left: 209px;
  position: absolute;
  top: 241px;
  width: 481px;
}

.nav {
  align-items: flex-start;
  display: flex;
  height: 85px;
  left: 0;
  right: 0;
  min-width: 1245px;
  position: fixed;
  top: 57px;
  z-index: 3;
  justify-content: center;
}

.overlap-group2 {
  align-items: flex-start;
  background-color: #eef7ff;
  border: 3px solid;
  border-color: #4197fc;
  border-radius: 25px;
  display: flex;
  height: 85px;
  min-width: 1237px;
  padding: 15px 31px;
}

.logo {
  align-self: center;
  height: 45px;
  margin-bottom: 4px;
  object-fit: cover;
  width: 45px;
}

.line {
  height: 48px;
  margin-left: 14px;
  margin-top: 1.5px;
  width: 3px;
}

.overlap-group3 {
  align-self: flex-end;
  height: 46px;
  margin-left: 16px;
  position: relative;
  width: 125px;
}

.text {
  color: #274DD5;
  font-size: 18px;
  font-weight: 500;
  left: 3px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 26px;
  width: 130px;
}

.name {
  color: #274DD5;
  font-size: 20px;
  font-weight: 800;
  height: 30px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
}

.place {
  align-self: center;
  color: #274DD5;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
  margin-left: 493px;
  min-height: 1px;
  min-width: 48px;
}

.place:hover {
  color: grey;
}

.about {
  align-self: center;
  color: #274DD5;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
  margin-left: 49px;
  min-height: 1px;
  min-width: 49px;
}

.about:hover {
  color: grey;
}

.overlap-group1 {
  align-items: flex-start;
  background-color: #77ADFF;
  border-radius: 10px;
  display: flex;
  height: 45px;
  margin-left: 49px;
  margin-top: 1px;
  min-width: 126px;
  padding: 12px 40px;
}

.login,
.signup {
  color: white;
  font-weight: 500;
  line-height: normal;
  min-height: 24px;
}

.overlap-group1:hover {
  background-color: grey;
}

.overlap-group:hover {
  background-color: grey;
}


.overlap-group {
  align-items: flex-start;
  background-color: #274DD5;
  border-radius: 10px;
  display: flex;
  height: 45px;
  margin-left: 23px;
  margin-top: 1px;
  min-width: 126px;
  padding: 12px 35px;
}

.flex-row {
  align-items: flex-start;
  background-color: #77ADFF;
  display: flex;
  gap: 8px;
  height: 1055px;
  min-width: 1440px;
  padding: 51px 140px;
  z-index: 2;
}

.flex-col {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 13.87px;
  width: 500px;
}

.text8 {
  display: flex;
  margin-left: 62px;
  width: 211px;
}

.dashboard {
  font-size: 36px;
  color: #274DD5;
  font-weight: 800;
  height: 54px;
  line-height: normal;
  width: 209px;
}

.text9 {
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-right: 64px;
  width: 312px;
}

.text-4 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 308px;
}

.text-3 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 306px;
}

.d5 {
  height: 356px;
  margin-top: 255px;
  object-fit: cover;
  width: 500px;
}

.flex-col-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 725px;
  width: 652px;
}

.overlap-group6 {
  height: 392px;
  position: relative;
  width: 652px;
}

.d4 {
  height: 355px;
  left: 152px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 500px;
}

.d4-2 {
  height: 135px;
  left: 18px;
  object-fit: cover;
  position: absolute;
  top: 160px;
  width: 197px;
}

.d4-1 {
  height: 135px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 257px;
  width: 196px;
}

.text10 {
  display: flex;
  margin-right: 108px;
  margin-top: 219px;
  width: 160px;
}

.near-me {
  font-size: 36px;
  color: #274DD5;
  font-weight: 800;
  height: 54px;
  line-height: normal;
  width: 158px;
}

.text11 {
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-left: 20px;
  width: 288px;
}

.text-2 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 261px;
}

.text-1 {
  color: white;
  font-size: 20px;
  height: 30px;
  letter-spacing: 0;
  line-height: normal;
  width: 284px;
}

.routerLink {
  text-decoration: none;
}
</style>
