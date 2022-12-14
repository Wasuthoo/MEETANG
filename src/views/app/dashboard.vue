<template>
   <h1>Dashboard</h1>
      <div class="summery">
         <div class="flex-col">
            <div class="flex-col-1">
               <div class="summary-1 valign-text-middle big-text">Summary</div>
               <img class="Oo-1" src="/icon/o.png" alt="O" />
            </div>
         </div>
      </div>
</template>

<style>
.summary-1
{
   color: var(--black) ;
   font-weight: 600;
   height: 30px;
   line-height: normal;
}
.flex-col {
align-items: center;
background-color: var(--white) ;
border-radius: 20px;
box-shadow: 0px 4px 4px #00000040;
display: flex;
flex-direction: column;
gap: 21px;
min-height: 257px;
padding: 13px 0;
width: 257px;
}
.flex-col-1{
   align-items:flex-start;
   display: flex;
   flex-direction: column;
   gap:8px;
   min-height:39px;
   width:594px;
}
.flex-row {
   align-items:flex-start;
   display: flex;
   height:171px;
   margin-right: 6px;
   min-width: 550px;

}
.Oo-1{

}
.rectangle-152 
{
   background-color: var(--white) ;
   border-radius: 20px;
   box-shadow: 0px 4px 4px #000000;
   height: 257px;
   width: 594px;
}
</style>