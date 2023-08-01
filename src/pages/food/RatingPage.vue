<template>
  <div class="container">
    <div class="bao-img">
      <svg @click="prevPage" class="next" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
        <g filter="url(#filter0_d_814_4030)">
          <path d="M41 10H27C20.3726 10 15 15.3726 15 22V36C15 42.6274 20.3726 48 27 48H41C47.6274 48 53 42.6274 53 36V22C53 15.3726 47.6274 10 41 10Z" fill="white"/>
        </g>
        <path d="M37 24L32 28.6839L36.8161 33.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <filter id="filter0_d_814_4030" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="5" dy="10"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_4030"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_4030" result="shape"/>
          </filter>
        </defs>
      </svg>
      <img class="img" src="@/assets/imgs/img-rating.png"/>
    </div>
    <div class="photo-representative">
      <div class="circle">
        <img class="avt" src="@/assets/imgs/im-rating.png"/>
        <svg class="cam" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8.22643" cy="8.22643" r="7.58141" fill="#029094"/>
          <path d="M5.31055 7.5139L7.49749 9.84664L11.1424 5.95874" stroke="white" stroke-width="2.18695"/>
        </svg>
      </div>
      <div class="name">Pizza Hut</div>
      <div class="update-profile">4102 Pretty View Lanenda</div>
      <div class="order-cicrle">
        <div class="circle-green"></div>
        <div>Order Delivered</div>
      </div>
    </div>
    <div class="title-evaluate">Please Rate Delivery Service</div>
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
      <input type="text" class="input" placeholder="Write review"/>
    </div>
    <div class="btn-save-wrapper">
      <button class="btn-save">SUBMIT</button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    prevPage(){
      window.history.go(-1)
    }

  }

}
</script>
<style scoped lang="scss">
.container {
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);
  width: 100%;
  height: 100%;
  padding: 37px 26px;
  .bao-img{
     position: relative;
    .img{
      width: 100%;
      object-fit: contain;
    }
    .next{
      position: absolute;
      left: 20px;
      top: 20px;
    }
  }
  .photo-representative{
    padding-bottom: 49px;
    transform: scale(1.4);
    .circle{
      max-width: 93px;
      max-height: 93px;
      position: relative;
      padding-bottom: 13px;
      margin: 0 auto;
      background: #FFFFFF;
      border-radius: 999px;
      margin-bottom: 15px;
      .avt{
        width: 93px;
        height: 93px;
        border-radius: 999px;
        padding: 9px;
        border: white;
        object-fit: cover;
      }
      .cam{
        position: absolute;
        bottom: 12px;
        right: 16px;
      }
    }
    .name{
      color: #000;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    .update-profile{
      color: #9796A1;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .order-cicrle{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:6px;
    color: #4EE476;
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 10px;
    padding-top: 15px;
    .circle-green{
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: #4EE476;
    }
  }
  .title-evaluate{
    color: #111719;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 27px;
    text-align: center;
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
  .input{
    padding: 24px 175px 129px 24px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 57px;
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