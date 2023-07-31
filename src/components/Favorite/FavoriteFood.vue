<template>
  <div class="wrapper-food">
    <div class="choice">
      <div class="short-by">
        <div class="item-short-by">Short by:</div>
        <div class="popular">
          <div>Popular</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
            <path d="M1 1L3 3L5 1" stroke="#9796A1" stroke-width="1.2"/>
          </svg>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
        <path d="M8.38818 16.1233L1.85918 16.1233" stroke="#FE724C" stroke-width="2" stroke-linecap="round"/>
        <path d="M20.1401 16.1233L8.38814 16.1233" stroke="#FE724C" stroke-opacity="0.25" stroke-width="2"
              stroke-linecap="round"/>
        <path
            d="M11.2061 16C11.2061 14.3431 9.86291 13 8.20605 13C6.5492 13 5.20605 14.3431 5.20605 16C5.20605 17.6569 6.5492 19 8.20605 19C9.86291 19 11.2061 17.6569 11.2061 16Z"
            fill="#FE724C" stroke="#FE724C" stroke-width="1.5"/>
        <path d="M13.6113 3.87671L20.1403 3.87671" stroke="#FE724C" stroke-width="2" stroke-linecap="round"/>
        <path d="M1.85938 3.87671L13.6114 3.87671" stroke="#FE724C" stroke-opacity="0.25" stroke-width="2"
              stroke-linecap="round"/>
        <path
            d="M10.793 4C10.793 5.65685 12.1361 7 13.793 7C15.4498 7 16.793 5.65685 16.793 4C16.793 2.34315 15.4498 1 13.793 1C12.1361 1 10.793 2.34315 10.793 4Z"
            fill="#FE724C" stroke="#FE724C" stroke-width="1.5"/>
      </svg>
    </div>
    <div v-for="a in 2" class="item-food">
      <div class="product">
        <img class="img-pizza" src="@/assets/imgs/pizza-chicken.png"/>
        <div class="price">
          <div><span class="do-la">$</span>10.35</div>
        </div>
        <svg class="tym" xmlns="http://www.w3.org/2000/svg" width="72" height="71" viewBox="0 0 72 71" fill="none">
          <g filter="url(#filter0_d_814_5460)">
            <path
                d="M35.8569 44.1428C45.2458 44.1428 52.8569 36.5317 52.8569 27.1428C52.8569 17.754 45.2458 10.1428 35.8569 10.1428C26.4681 10.1428 18.8569 17.754 18.8569 27.1428C18.8569 36.5317 26.4681 44.1428 35.8569 44.1428Z"
                fill="#FE724C"/>
          </g>
          <path
              d="M39.5667 19.8572C38.6985 19.8573 37.8461 20.0885 37.0968 20.5271C36.3476 20.9656 35.7286 21.5957 35.3033 22.3525C34.878 21.5955 34.2588 20.9653 33.5093 20.5268C32.7598 20.0882 31.9071 19.8571 31.0388 19.8572C29.7089 19.929 28.4578 20.5108 27.5459 21.4815C26.634 22.4522 26.1315 23.7371 26.1428 25.0689C26.1428 31.8604 35.3033 36.5985 35.3033 36.5985C35.3033 36.5985 44.4639 31.8628 44.4639 25.0689C44.4752 23.7369 43.9725 22.4518 43.0603 21.4811C42.1482 20.5103 40.8968 19.9287 39.5667 19.8572V19.8572Z"
              fill="white"/>
          <defs>
            <filter id="filter0_d_814_5460" x="0.642647" y="0.428535" width="70.4286" height="70.4286"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="8.5"/>
              <feGaussianBlur stdDeviation="9.10714"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.298039 0 0 0 0.4 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_5460"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_5460" result="shape"/>
            </filter>
          </defs>
        </svg>
        <div class="star">
          <div class="product-quality">4.5</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path
                d="M8.94083 9.44598L5.88729 7.84144L2.83258 9.44598L3.41732 6.0451L0.943848 3.63712L4.35876 3.14125L5.88729 0L7.41581 3.14125L10.8307 3.63712L8.35725 6.04627L8.94083 9.44598Z"
                fill="#FFC529"/>
          </svg>
          <div class="quantity">(25+)</div>
        </div>
      </div>
      <div class="name-food">Chicken Hawaiian</div>
      <div class="include">Chicken, Cheese and pineapple</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper-food{
  padding: 26px 26px 0;
  .choice{
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding-bottom: 20px;
    .short-by{
      display: flex;
      align-items: center;
      gap:10px;
      .item-short-by{
        color:  #111719;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
      }
      .popular{
        display: flex;
        align-items: center;
        gap:5px;
        color: #FE724C;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .item-food{
    padding-bottom: 20px;
    .product{
      width: 100%;
      position: relative;
      margin-bottom: 22px;
      .img-pizza{
        border-radius: 20px;
        width: 100%;
        object-fit: cover;
      }
      .price{
        position: absolute;
        top:18px;
        left: 18px;
        color: #111719;
        font-size: 18px;
        font-weight: 600;
        padding: 8px 10px;
        background: #FFFFFF;
        border-radius: 30px;
        .do-la{
          color: #FE724C;
          font-size: 18px;
          font-weight: 600;
        }
      }
      .tym{
        position: absolute;
        right: 8px;
        top: 5px;
      }
      .star{
        display: flex;
        align-items: center;
        gap:4px;
        border-radius: 12px;
        background: #FFF;
        box-shadow: 5px 10px 20px 0px rgba(211, 209, 216, 0.30);
        padding: 9px;
        position: absolute;
        bottom:-10px;
        left: 17px;
        .product-quality{
          color: #000;
          font-size: 11px;
          font-weight: 600;
        }
        .quantity{
          color: #9796A1;
          font-size: 8px;
          font-weight: 400;
        }

      }
    }
    .name-food{
      color: #000;
      font-size: 18.214px;
      font-weight: 600;
      padding-bottom: 10px;
    }
    .include{
      color: #5B5B5E;
      font-size: 14px;
      font-weight: 400;
      padding-bottom: 13px;
    }
  }
}
</style>