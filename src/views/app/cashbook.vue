<template>
    <div class="heading">
        <h1 class="cashbook title">CashBook</h1>
    </div>
    <div class="content">
        <div class="userBar">
            <img class="user-1" src="/icon/user 1.png" alt="user 1"/>
            <div class="flex-col">
                <h1 class="summarizeYearTitle">สรุปรายการความเคลื่อนไหวบัญชีประจำปี</h1>
                <h1 class="userName">คุณธนวรรณ ณ กรุงเทพมหานคร</h1>
                <h2 class="userEmail">64050138@kmitl.ac.th</h2>
            </div>
        </div>
        <br>

        <div class="AmountContainer">
            <!-- add v-row -->
            <v-row>
                <!-- add v-col -->
                <v-col>

                    <div class="textInputContainer">
                        <h2 class="inputAmountText">ยอดเงินเข้ารวม</h2>
                        <div class="inputPriceText">
                            <!-- <span> -->
                                <h2 class="inputPrice">326,000 บาท</h2>
                                <!-- <span class="inputNbsp">&nbsp;</span> -->
                                <!-- <span class="inputBaht">บาท</span> -->
                            <!-- </span> -->
                        </div>
                    </div>

                </v-col>
                <v-col>

                    <div class="textOutputContainer">
                        <h2 class="outputAmountText">ยอดเงินออกรวม</h2>
                        <div class="outputPriceText">
                            <!-- <span> -->
                                <h2 class="outputPrice">248,000 บาท</h2>
                               <!--  <span class="outputNbsp">&nbsp;</span>
                                <span class="outputBaht">บาท</span>
                            </span> -->
                        </div>
                    </div>

                </v-col>
            </v-row>
            
        </div>
        
        <!-- Graph Year as an image -->
        <img class="graphYear" img src="/icon/graphYear.png" alt="graphYear"/>

        <div class="summarizeMonthGroup">
            <h1 class="summarizeMonthTitle">สรุปรายการความเคลื่อนไหวบัญชีประจำเดือนธันวาคม</h1>
        </div>
        <br>
        <div class="AmountContainer">
            <!-- add v-row -->
            <v-row>
                <!-- add v-col -->
                <v-col>

                    <div class="textInputContainer">
                        <h2 class="inputAmountText">ยอดเงินเข้ารวม</h2>
                        <div class="inputPriceText">
                            <!-- <span> -->
                                <h2 class="inputPrice">28,000 บาท</h2>
                                <!-- <span class="inputNbsp">&nbsp;</span>
                                <span class="inputBaht">บาท</span>
                            </span> -->
                        </div>
                    </div>

                </v-col>
                <v-col>

                    <div class="textOutputContainer">
                        <h2 class="outputAmountText">ยอดเงินออกรวม</h2>
                        <div class="outputPriceText">
                            <!-- <span> -->
                                <h2 class="outputPrice">23,000 บาท</h2>
                                <!-- <span class="outputNbsp">&nbsp;</span>
                                <span class="outputBaht">บาท</span>
                            </span> -->
                        </div>
                    </div>

                </v-col>
            </v-row>

        </div>
        <!-- Graph Month as an image -->
        <img class="graphMonth" img src="/icon/graphMonth.png" alt="graphMonth"/>"
    </div>
</template>

<style>
    .heading {
        display: flex;
        flex-direction: column;
        height: 99px;
        width: 1337px;
    }
    
    .content {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        min-height: 2091px;
        padding: 9px 2px;
        width: 1210px;
    }

    .userBar {
        align-items: center;
        background: linear-gradient(180deg, rgb(67, 130, 254) 0%, rgb(129, 172, 255) 100%);
        border-radius: 10px;
        box-shadow: 0px 2px 4px #0000001a;
        display: flex;
        gap: 21px;
        height: 184px;
        min-width: 1172px;
        padding: 12px 121px;
    }

    .user-1 {
        align-self: flex-end;
        height: 158px;
        object-fit: cover;
        width: 158px;
    }

    .flex-col {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin-top: 0.44px;
        min-height: 124px;
        width: 684px;
    }

    .summarizeYearTitle {
        color: var(--deep-sapphire);
        font-weight: 800;
        height: 36px;
        line-height: normal;
        text-align: center;
        width: 612px;
    }

    .userName {
        color: #FFFFFF;
        align-self: flex-end;
        height: 30px;
        letter-spacing: 0;
        line-height: normal;
        margin-top: 0px;
        width: 628px;
    }

    .userEmail {
        color: #FFFFFF;
        align-self: center;
        height: 30px;
        letter-spacing: 0;
        line-height: normal;
        margin-right: 102px;
        margin-top: 22px;
        width: 280px;
    }

    .amountContainer {
        align-items: flex-start;
        display: flex;
        gap: 24px;
        height: 119px;
        margin-top: 21px;
        min-width: 1172px;
    }

    .textInputContainer {
        align-items: flex-start;
        background-color: #58B99C;
        border-radius: 10px;
        box-shadow: 0px 2px 4px #0000001a;
        display: flex;
        flex-direction: column;
        gap: 15px;
        min-height: 119px;
        padding: 17.5px 30.1px;
        width: 574px;
    }

    .inputAmountText {
        color: #CDEAE1;
        font-weight: 800;
        height: 30px;
        line-height: normal;
        text-align: 0.86px;
        width: 322px;
    }

    .inputPriceText {
        align-self: flex-end;
        color: transparent;
        font-weight: 800;
        height: 30px;
        line-height: normal;
        text-align: right;
        width: 264px;
    }

    .inputPrice {
        color: #ffffff;
    }

    .textOutputContainer {
        align-items: flex-start;
        background-color: #B95858;
        border-radius: 10px;
        box-shadow: 0px 2px 4px #0000001a;
        display: flex;
        flex-direction: column;
        gap: 15px;
        min-height: 119px;
        padding: 17.5px 28px;
        width: 574px;
    }

    .outputAmountText {
        color: #F2CDC8;
        font-weight: 800;
        height: 30px;
        line-height: normal;
        width: 348px;
    }

    .outputPriceText {
        align-self:flex-end;
        color: transparent;
        font-weight: 800;
        height: 30px;
        line-height: normal;
        margin-right: 8.25px;
        text-align: right;
        width: 243px;
    }

    .outputPrice {
        color: #FFFFFF;
    }
    
    .graphYear {
        align-self: center;
        height: 643px;
        margin-left: 26px;
        margin-top: 52px;
        object-fit: cover;
        width: 1074px;
    }

    .summarizeMonthGroup {
        align-items: center;
        background: linear-gradient(180deg, rgb(67, 130, 254) 0%, rgb(129, 172, 255) 100%);
        border-radius: 10px;
        box-shadow: 0px 2px 4px #0000001a;
        display: flex;
        height: 80px;
        justify-content: flex-end;
        margin-top: 153px;
        min-width: 1172px;
        padding: 0 182px;
    }

    .summarizeMonthTitle {
        color: var(--deep-sapphire);
        font-weight: 800;
        height: 36px;
        line-height: normal;
        text-align: center;
        width: 798px;
    }

    .graphMonth {
        align-self: center;
        height: 592px;
        margin-left: 41px;
        margin-top: 58px;
        object-fit: cover;
        width: 1089px;
    }
</style>