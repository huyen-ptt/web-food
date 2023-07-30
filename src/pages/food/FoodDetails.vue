<template>
  <div class="food-detail">
    <div class="restaurant">
      <div class="img-restaurant">
        <img class="avt" src="@/assets/imgs/img-detail.png"/>
        <svg @click="nextPage" class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78"
             fill="none">
          <g filter="url(#filter0_d_814_6308)">
            <path
                d="M41 10H27C20.3726 10 15 15.3726 15 22V36C15 42.6274 20.3726 48 27 48H41C47.6274 48 53 42.6274 53 36V22C53 15.3726 47.6274 10 41 10Z"
                fill="white"/>
          </g>
          <path d="M37 24L32 28.6839L36.8161 33.5" stroke="#111719" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <defs>
            <filter id="filter0_d_814_6308" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dx="5" dy="10"/>
              <feGaussianBlur stdDeviation="10"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6308"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6308" result="shape"/>
            </filter>
          </defs>
        </svg>
        <svg class="tym" xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
          <g filter="url(#filter0_d_814_6304)">
            <path
                d="M29 36C36.732 36 43 29.732 43 22C43 14.268 36.732 8 29 8C21.268 8 15 14.268 15 22C15 29.732 21.268 36 29 36Z"
                fill="#FE724C"/>
          </g>
          <path
              d="M31.591 16C30.9707 16.0001 30.3617 16.1653 29.8264 16.4786C29.2911 16.7919 28.8488 17.2421 28.545 17.7828C28.2411 17.242 27.7987 16.7917 27.2632 16.4784C26.7278 16.1651 26.1185 16 25.4981 16C24.548 16.0513 23.6542 16.467 23.0026 17.1605C22.3511 17.854 21.9921 18.772 22.0001 19.7236C22.0001 24.5758 28.545 27.961 28.545 27.961C28.545 27.961 35.0899 24.5776 35.0899 19.7236C35.0979 18.7719 34.7388 17.8538 34.0871 17.1602C33.4354 16.4667 32.5413 16.0511 31.591 16V16Z"
              fill="white"/>
          <defs>
            <filter id="filter0_d_814_6304" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="7"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.447059 0 0 0 0 0.298039 0 0 0 0.4 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6304"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6304" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="name-restaurant">Ground Beef Tacos</div>
      <div class="review">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
          <g filter="url(#filter0_d_814_6283)">
            <path
                d="M24.3919 24L18.8992 21.1104L13.4065 24L14.456 17.8805L10 13.5462L16.146 12.6536L18.8923 7L21.6387 12.6536L27.7847 13.5462L23.3395 17.8805L24.3919 24Z"
                fill="#FFC529"/>
          </g>
          <defs>
            <filter id="filter0_d_814_6283" x="0.191546" y="0.134083" width="37.4016" height="36.6169"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="2.94254"/>
              <feGaussianBlur stdDeviation="4.90423"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.772549 0 0 0 0 0.160784 0 0 0 0.4 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_814_6283"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_814_6283" result="shape"/>
            </filter>
          </defs>
        </svg>
        <div class="product-quality">4.5</div>
        <div class="quantity">(30+)</div>
        <router-link to="/review">
          <div class="see-all">See Review</div>
        </router-link>

      </div>
      <div class="so-luong-mua">
        <div class="money"><span>$</span>{{(gia_ca*quanlity).toFixed(2)}}</div>
        <div class="luong-mua">
          <i @click="minusQuanlity" class="fa-solid fa-circle-minus"></i>
          <div class="total-mua">{{quanlity}}</div>
          <i @click="plusQuanlity" class="fa-solid fa-circle-plus"></i>
        </div>
      </div>
      <div class="describe">
        Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices –
        chili powder, cumin, onion powder.
      </div>
    </div>
    <div class="product">
      <div class="choice">Choice of Add On</div>
      <div class="wrapper-food">
        <div v-for="food in foodList"
             :key="food.id"
             class="item-food">
        <label :for="`check${food.id}`">
          <div class="item-one">
            <img class="img-food" :src="food.img"/>
            <div class="name-food">
              {{ food.name }}
            </div>
          </div>
        </label>
          <label :for="`check${food.id}`">
            <div class="item-one">
              <div class="total-food">+${{ food.total }}</div>
              <input type="checkbox" :id="`check${food.id}`" v-model="food.checked">
<!--              <label class="container">-->
<!--                <input type="checkbox" checked="checked" name="radio" :id="`check${food.id}`" v-model="food.checked">-->
<!--                <span class="checkmark"></span>-->
<!--              </label>-->
            </div>
          </label>
        </div>
      </div>
    </div>
    <router-link to="/cart" class="btn-cart">
      <div class="bag">
        <img class="cartt" src="@/assets/imgs/cart.png"/>
      </div>
      <div>Add to cart</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quanlity: 2,
      foodList: [
        {id: 1, name: 'Pepper  Julienned', img: '/imgs/perper.png', total: 2.30, checked: true},
        {id: 2, name: 'Baby Spinach', img: '/imgs/spinach.png', total: 4.70 ,checked: false},
        {id: 3, name: 'Masroom', img: '/imgs/masroom.png', total: 2.50, checked: false},
      ],
      gia_ca: 9.21
    }
  },
  methods:{

    nextPage(){
      window.history.go(-1)
    },
    minusQuanlity(){
      if (this.quanlity > 0) {
        this.quanlity--;
      }
    },
    plusQuanlity(){
      this.quanlity ++;
    }


  }
}
</script>
<style scoped lang="scss">
.food-detail {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);

  .restaurant {
    .img-restaurant {
      position: relative;
      margin-bottom: 30px;

      .avt {
        width: 100%;
        border-radius: 20px;
        height: auto;
        object-fit: cover;
      }

      .arrow-left {
        position: absolute;
        top: 5px;
        left: 0px;
      }

      .tym {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }

    .name-restaurant {
      color: #323643;
      font-size: 28px;
      font-weight: 600;
      padding-bottom: 13px;
    }

    .review {
      display: flex;
      align-items: center;
      gap: 6px;
      padding-bottom: 18px;

      .product-quality {
        color: #111719;
        font-size: 14px;
        font-weight: 600;
      }

      .quantity {
        color: #9796A1;
        font-size: 14px;
        font-weight: 400;
      }

      .see-all {
        color: #FE724C;
        font-size: 13px;
        font-weight: 400;
      }
    }

    .so-luong-mua {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 23px;

      .money {
        color: #FE724C;
        font-size: 31px;
        font-weight: 600;

        span {
          font-size: 17px;
          font-weight: 500;
        }
      }

      .luong-mua {
        display: flex;
        align-items: center;
        gap: 9px;

        .total-mua {
          color: #000;
          font-size: 16px;
          font-weight: 600;
        }

        .fa-solid {
          font-size: 30px;
          color: #FE724C;
        }
      }
    }

    .describe {
      color: #858992;
      font-size: 15px;
      font-weight: 400;
      padding-bottom: 22px;
    }

  }

  .product {
    .choice {
      color: #323643;
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 20px;
    }

    .wrapper-food {
      .item-food {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30px;

        .item-one {
          display: flex;
          align-items: center;
          gap: 10px;

          .name-food {
            color: #000;
            font-size: 14px;
            font-weight: 400;
          }

          .total-food {
            color: #000;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
  }

  .btn-cart {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #FE724C;
    border-radius: 40px;
    border: 0;
    padding: 15px 28px 15px 15px;
    margin: 0 auto;
    color: #FFF;
    font-size: 15px;
    font-weight: 400;
    margin-top: 20px;
    width: 167px;

    .bag {
      background: #FFFFFF;
      border-radius: 999px;
      padding: 8px 10px;
    }
  }

}
</style>