<template>
  <div class="container">
    <svg @click="nextPage" class="next" xmlns="http://www.w3.org/2000/svg" width="79" height="78" viewBox="0 0 79 78" fill="none">
      <g filter="url(#filter0_d_814_3876)">
        <path d="M41.5 10H27.5C20.8726 10 15.5 15.3726 15.5 22V36C15.5 42.6274 20.8726 48 27.5 48H41.5C48.1274 48 53.5 42.6274 53.5 36V22C53.5 15.3726 48.1274 10 41.5 10Z" fill="white"/>
      </g>
      <path d="M37.5 24L32.5 28.6839L37.3161 33.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <filter id="filter0_d_814_3876" x="0.5" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="5" dy="10"/>
          <feGaussianBlur stdDeviation="10"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_3876"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_3876" result="shape"/>
        </filter>
      </defs>
    </svg>
     <div class="header">
       <img class="avt" src="@/assets/imgs/img-cuoi.png"/>
       <div class="title">How was your last order from Pizza Hut ?</div>
       <div class="evaluate">
         <div class="trai-nghiem">Good</div>
         <div class="star">
           <div v-for="a in 5">
             <svg xmlns="http://www.w3.org/2000/svg" width="53" height="51" viewBox="0 0 53 51" fill="none">
               <g filter="url(#filter0_d_814_3987)">
                 <path
                     d="M36.2441 38L26.228 32.7308L16.2118 38L18.1256 26.8409L10 18.9371L21.2074 17.3095L26.2154 7L31.2235 17.3095L42.4309 18.9371L34.3249 26.8409L36.2441 38Z"
                     fill="#FFC529"/>
               </g>
               <defs>
                 <filter id="filter0_d_814_3987" x="0.191546" y="0.134083" width="52.0476" height="50.6169"
                         filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                   <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                   <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"/>
                   <feOffset dy="2.94254"/>
                   <feGaussianBlur stdDeviation="4.90423"/>
                   <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.772549 0 0 0 0 0.160784 0 0 0 0.4 0"/>
                   <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_3987"/>
                   <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_3987" result="shape"/>
                 </filter>
               </defs>
             </svg>
           </div>
           <!--        <div>-->
           <!--          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">-->
           <!--            <path-->
           <!--                d="M23.3853 20.0104L24.9607 29.1708L16.7394 24.8458L16.2739 24.6009L15.8083 24.8458L7.58592 29.1713L9.15711 20.01L9.24609 19.4911L8.86876 19.1241L2.19767 12.6351L11.397 11.2991L11.9213 11.223L12.1527 10.7464L16.2613 2.28861L20.3699 10.7464L20.6014 11.223L21.1257 11.2991L30.3281 12.6355L23.6727 19.125L23.2962 19.4921L23.3853 20.0104Z"-->
           <!--                stroke="#FFC529" stroke-width="2"/>-->
           <!--          </svg>-->
           <!--        </div>-->
         </div>
       </div>
       <div>
         <input class="cmt" type="text" placeholder="Write">
       </div>
     </div>
    <div class="btn-save-wrapper">
      <button class="btn-save">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    nextPage(){
      window.history.go(-1)
    }

  }

}
</script>
<style scoped lang="scss">
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 37px 26px;
  .header{
    .avt{
      display: flex;
      justify-content: center;
      margin: 0 auto;
      padding-bottom: 30px;
    }
    .title{
      color: #000;
      text-align: center;
      font-size: 31px;
      font-weight: 300;
      padding-bottom: 30px;
    }
    .evaluate{
      .trai-nghiem{
        color: #FE724C;
        font-size: 22px;
        font-weight: 400;
        padding-bottom: 14px;
        text-align: center;
      }
      .star{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:15px;
        padding-bottom: 44px;
      }

    }
    .cmt{
      color: rgba(0, 0, 0, 0.20);
      font-size: 16px;
      font-weight: 400;
      width: 100%;
      padding-bottom: 14px;
      border-right: none;
      border-left: 0;
      border-top: 0;
      margin-bottom: 50px;
    }
  }
  .btn-save-wrapper {
    padding: 0 65px;

    .btn-save {
      border-radius: 28px;
      background: var(--primary-color, #FE724C);
      box-shadow: 0px 20px 30px 0px rgba(254, 114, 76, 0.25);
      padding: 25px 75px;
      color: #FFF;
      font-size: 15px;
      font-weight: 600;
      border: 0;
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
}
</style>