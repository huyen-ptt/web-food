<template>
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
          <div class="price">${{ (food.price * food.quantity).toFixed(2) }}</div>
        </div>
      </div>
      <div class="item-right">
        <svg class="x" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5.09229 4.97754L13.4773 13.3625" stroke="#FF3600" stroke-linecap="round"/>
          <path d="M5.09375 13.3628L13.4787 4.97779" stroke="#FF3600" stroke-linecap="round"/>
        </svg>
        <div class="luong-mua">
          <i @click="minusQuanlity(food)" class="fa-solid fa-circle-minus"></i>
          <div class="total-mua">{{ food.quantity }}</div>
          <i @click="plusQuanlity(food)" class="fa-solid fa-circle-plus"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      orderList: [
        {
          id: 1,
          name: 'Red n hot pizza',
          price: 15.31,
          quantity: 2,
          main_food: 'Spicy chicken, beef',
          img: '/imgs/pizza-cart.png'
        },
        {
          id: 2,
          name: 'Greek salad ',
          price: 12.32,
          quantity: 2,
          main_food: 'with baked salmon',
          img: '/imgs/salad-cart.png'
        },
      ],
    }
  },

  methods: {
    minusQuanlity(food) {
      if (food.quantity > 0) {
        food.quantity -= 1;
      }

    },
    plusQuanlity(food) {
      food.quantity += 1;
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper-order {
  padding-bottom: 10px;

  .item-order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    .avt-food{
      width: 101px;
      height: 101px;
      border-radius: 20px;
    }
    .product {
      display: flex;
      align-items: center;
      gap: 15px;

      .name-food {
        color: #000;
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 5px;
      }

      .main-food {
        color: #8C8A9D;
        font-size: 14px;
        font-weight: 300;
        padding-bottom: 13px;
      }

      .price {
        color: #FE724C;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .item-right {
      display: flex;
      gap: 35px;
      flex-direction: column;

      .x {
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
</style>