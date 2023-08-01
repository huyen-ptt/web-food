<template>
  <div class="header">
    <div class="header-left">

      <svg @click="prevPage" class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78"
           fill="none">
        <g filter="url(#filter0_d_814_5554)">
          <path
              d="M41 10H27C20.3726 10 15 15.3726 15 22V36C15 42.6274 20.3726 48 27 48H41C47.6274 48 53 42.6274 53 36V22C53 15.3726 47.6274 10 41 10Z"
              fill="white"/>
        </g>
        <path d="M37 24L32 28.6839L37 33.6839" stroke="#111719" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
        <defs>
          <filter id="filter0_d_814_5554" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dx="5" dy="10"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_5554"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_5554" result="shape"/>
          </filter>
        </defs>
      </svg>
      <div class="fast-food">Fast
        <span class="active">Food</span>
      </div>
      <div class="type-pizza">80 type of pizza</div>
    </div>
    <img class="avt" src="@/assets/imgs/pizza-big.png"/>
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
.header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 55px;

  .avt {
    object-fit: contain;
  }

  .header-left {
    padding-left: 27px;

    .fast-food {
      color: #272D2F;
      font-size: 45px;
      font-weight: 700;
      padding-bottom: 19px;

      .active {
        color: #FE724C;
        font-size: 55px;
        font-weight: 700;
      }
    }

    .type-pizza {
      color: #9796A1;
      font-size: 19px;
      font-weight: 400;
    }
  }

}
</style>