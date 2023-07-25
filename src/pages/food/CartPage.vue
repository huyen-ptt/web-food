<template>
  <div class="cart">
    <div class="header-cart">
      <div class="title">
       <router-link to="/detail/1">
         <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
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
       </router-link>
        <div class="title-big">Cart</div>
        <div></div>
      </div>
      <div class="wrapper-order">
        <div v-for="food in orderList"
             :key="food.id"
             class="item-order">
          <div class="product">
            <div>
              <img class="avt-food" :src="food.img"/>
            </div>
           <div>
             <div class="name-food">{{ food.name }}</div>
             <div class="main-food">{{ food.main_food }}</div>
             <div class="price">${{ food.price }}</div>
           </div>
          </div>
          <div class="item-right">
            <svg class="x" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5.09229 4.97754L13.4773 13.3625" stroke="#FF3600" stroke-linecap="round"/>
              <path d="M5.09375 13.3628L13.4787 4.97779" stroke="#FF3600" stroke-linecap="round"/>
            </svg>
            <div class="luong-mua">
              <i class="fa-solid fa-circle-minus"></i>
              <div class="total-mua">{{ food.quantity }}</div>
              <i class="fa-solid fa-circle-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="note">
        <input type="text" class="input-note" placeholder="Promo Code"/>
        <button class="btn">Apply</button>
      </div>
      <div class="wrapper-total">
        <div class="item-total">
          <div class="phi">Subtotal</div>
          <div class="money">$27.30<span class="usd">USD</span></div>
        </div>
        <div class="item-total">
          <div class="phi">Tax and Fees</div>
          <div class="money">$5.30<span class="usd">USD</span></div>
        </div>
        <div class="item-total">
          <div class="phi">Delivery</div>
          <div class="money">$1.00<span class="usd">USD</span></div>
        </div>
        <div class="item-total">
          <div class="phi">Total<span class="tong">(2 item)</span></div>
          <div class="money">$33.60<span class="usd">USD</span></div>
        </div>
      </div>
    </div>
    <div class="btn-check">
      <button class="btn-check-out">Checkout</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          id: 1,
          name: 'Red n hot pizza',
          price: 15.31,
          quantity: 2,
          main_food: 'Spicy chicken, beef',
          img: '/src/assets/imgs/pizza-cart.png'
        },
        {
          id: 2,
          name: 'Greek salad ',
          price: 12.32,
          quantity: 2,
          main_food: 'with baked salmon',
          img: '/src/assets/imgs/salad-cart.png'
        },
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.cart {
  width: 100%;
  height: 100%;
  padding: 37px 26px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .header-cart{
    padding-bottom: 110px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 39px;

      .title-big {
        color: #111719;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
      }
    }

    .wrapper-order {
      padding-bottom: 10px;
      .item-order {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .product{
          display: flex;
          align-items: center;
          gap: 15px;
          .name-food{
            color: #000;
            font-size: 18px;
            font-weight: 600;
            padding-bottom: 5px;
          }
          .main-food{
            color: #8C8A9D;
            font-size: 14px;
            font-weight: 300;
            padding-bottom: 13px;
          }
          .price{
            color: #FE724C;
            font-size: 16px;
            font-weight: 600;
          }
        }
        .item-right {
          display: flex;
          gap:35px;
          flex-direction: column;
          .x{
            margin-left: 57px;
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
              font-size: 27px;
              color: #FE724C;
            }
          }
        }
      }
    }
    .note{
      width: 100%;
      position: relative;
      padding-bottom: 30px;
      .input-note{
        border-radius: 100px;
        border: 1px solid #EEE;
        background: #FFF;
        padding: 25px 30px;
        width: 100%;
        color: #BEBEBE;
        font-size: 14px;
        font-weight: 300;
      }
      .btn{
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 15px 25px;
        border-radius: 28.5px;
        background: #FE724C;
        color: #FFF;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        border: 0;

      }
    }
    .wrapper-total{
      .item-total{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 35px;
        .phi{
          color: #000;
          font-size: 16px;
          font-weight: 400;
          .tong{
            color: #BEBEBE;
            font-size: 14px;
            font-weight: 300;
            padding-left: 3px;
          }
        }
        .money{
          color: #000;
          text-align: right;
          font-size: 19px;
          font-weight: 500;

          .usd{
            color: #9796A1;
            font-size: 14px;
            font-weight: 400;
            padding-left: 5px;
          }
        }

      }
    }
  }
  .btn-check{
    margin: 0 auto;
    .btn-check-out{
      color: #FFF;
      font-size: 15px;
      font-weight: 600;
      padding: 22px 80px;
      border-radius: 28.5px;
      background:  #FE724C;
      box-shadow: 0px 8px 30px 0px rgba(254, 114, 76, 0.25);
      border: 0;
    }
  }


}
</style>