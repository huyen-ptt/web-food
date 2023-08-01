<template>
  <div class="container-popular">
    <div v-for="item in popularList"
         :key="item.id"
         class="popular">
      <div class="img-popular">
        <img class="avt" :src="item.img"/>
        <div class="star">
          <div class="product-quality">4.5</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path
                d="M8.94083 9.44598L5.88729 7.84144L2.83258 9.44598L3.41732 6.0451L0.943848 3.63712L4.35876 3.14125L5.88729 0L7.41581 3.14125L10.8307 3.63712L8.35725 6.04627L8.94083 9.44598Z"
                fill="#FFC529"/>
          </svg>
          <div class="quantity">(25+)</div>
        </div>
        <div class="tym">
          <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
            <g filter="url(#filter0_d_1023_52)">
              <path
                  d="M29.7759 36.3552C37.5801 36.3552 43.9067 30.0286 43.9067 22.2243C43.9067 14.4201 37.5801 8.09351 29.7759 8.09351C21.9716 8.09351 15.645 14.4201 15.645 22.2243C15.645 30.0286 21.9716 36.3552 29.7759 36.3552Z"
                  fill="#FE724C"/>
            </g>
            <path
                d="M32.8596 16.1685C32.138 16.1686 31.4294 16.3608 30.8066 16.7253C30.1838 17.0898 29.6693 17.6135 29.3158 18.2427C28.9623 17.6134 28.4476 17.0896 27.8246 16.725C27.2016 16.3605 26.4928 16.1684 25.771 16.1685C24.6655 16.2282 23.6257 16.7117 22.8677 17.5186C22.1097 18.3255 21.6919 19.3935 21.7013 20.5006C21.7013 26.1458 29.3158 30.0843 29.3158 30.0843C29.3158 30.0843 36.9303 26.1479 36.9303 20.5006C36.9397 19.3934 36.5218 18.3252 35.7636 17.5183C35.0054 16.7114 33.9653 16.2279 32.8596 16.1685V16.1685Z"
                fill="white"/>
            <defs>
              <filter id="filter0_d_1023_52" x="0.64502" y="0.0935059" width="58.2617" height="58.2617"
                      filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                               result="hardAlpha"/>
                <feOffset dy="7"/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.298039 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1023_52"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1023_52" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
        <div class="quanlityy"><span class="do">$</span>{{ item.total}}
        </div>
      </div>
      <div class="name">{{ item.name }}</div>
      <div class="description">{{ item.description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popularList: [
        {id: 1, name: 'Salmon Salad', description: 'Baked salmon fish', img: '/imgs/popular-img.png', total: 5.52},
        {id: 2, name: 'Salmon Salad', description: 'Baked salmon fish', img: '/imgs/popular-avt.png', total: 3.21},
        {id: 3, name: 'Salmon Salad', description: 'Baked salmon fish', img: '/imgs/popular-avt.png', total: 5.32},
        {id: 4, name: 'Salmon Salad', description: 'Baked salmon fish', img: '/imgs/popular-img.png', total: 4.34},
        {id: 5, name: 'Salmon Salad', description: 'Baked salmon fish', img: '/imgs/popular-avt.png', total: 2.12},
        {id: 6, name: 'Salmon Salad', description: 'Baked salmon fish', img: '/imgs/popular-img.png', total: 5.76},

      ]
    }
  }
}
</script>
<style scoped lang="scss">
.container-popular {
  display: grid;
  grid-template-columns:auto auto auto;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  .img-popular{
    position: relative;
  }
  .popular {

    .name{
      color: #000;
      font-size: 14px;
      font-weight: 600;
      padding-bottom: 10px;
      margin-top: 25px;
      padding-left: 10px;
    }
    .description{
      color: #9796A1;
      font-size: 12px;
      font-weight: 300;
      padding-left: 10px;
    }
    .avt {
      //padding-bottom: 20px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .star {
      display: flex;
      align-items: center;
      gap: 4px;
      border-radius: 100px;
      background: #FFF;
      box-shadow: 0px 5px 23px 0px rgba(254, 114, 76, 0.20);
      padding: 9px;
      position: absolute;
      bottom: 0px;
      left: 15px;
      transform: translateY(50%);


      .product-quality {
        color: #000;
        font-size: 11.695px;
        font-weight: 600;
      }

      .quantity {
        color: #9796A1;
        font-size: 8.186px;
        font-weight: 400;
      }

    }

    .tym {
      position: absolute;
      right: 8px;
      top: 6px;
    }
    .quanlityy{
      position: absolute;
      top:10px;
      left: 10px;
      border-radius: 20px;
      background: #FFF;
      box-shadow: 0px 5px 23px 0px rgba(254, 114, 76, 0.2);
      padding: 9px;
      color: #111719;
      font-size: 20px;
      font-weight: 600;

      .do{
        color: #FE724C;
        font-size: 11px;
        font-weight: 500;
        padding-right: 2px;
      }
    }
  }
}

@media (max-width: 568px) {
  .container-popular {
    grid-template-columns:auto auto ;
  }
}
</style>
