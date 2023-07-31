<template>
  <div class="cart">
    <div class="header-cart">
      <div class="title">
        <div @click="nextPage" class="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M6 1L1 5.68393L6 10.6839" stroke="#111719" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="title-big">Cart</div>
        <div></div>
      </div>
      <OrderList/>
      <div class="note">
        <input type="text" class="input-note" placeholder="Promo Code"/>
        <button class="btn">Apply</button>
      </div>
      <PayPage/>
    </div>
    <router-link to="/profile">
      <div class="btn-check">
        <button class="btn-check-out">Checkout</button>
      </div>
    </router-link>
  </div>
</template>
<script>
import OrderList from "@/components/Cart/OrderList.vue";
import PayPage from "@/components/Cart/PayPage.vue";

export default {
  components: {
    PayPage,
    OrderList
  },
  data() {
    return {
      change_quality: '',
    }
  },
  methods: {
    nextPage() {
      window.history.go(-1)
    },
  },
  computed: {
    // minusQuanlity(item){
    //   console.log(item)
    //   if (item > 0) {
    //    return  item --;
    //   }
    // },
    // plusQuanlity(item){
    //   console.log(item)
    //   return item ++;
    // }
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
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);

  .header-cart {
    padding-bottom: 110px;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 39px;

      .arrow {
        padding: 12px 17px;
        border-radius: 10px;
        box-shadow: 0px 20px 30px 0px rgba(211, 209, 216, 0.25);

      }

      .title-big {
        color: #111719;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
      }
    }



    .note {
      width: 100%;
      position: relative;
      padding-bottom: 30px;

      .input-note {
        border-radius: 100px;
        border: 1px solid #EEE;
        background: #FFF;
        padding: 25px 30px;
        width: 100%;
        color: #BEBEBE;
        font-size: 14px;
        font-weight: 300;
      }

      .btn {
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


  }

  .btn-check {
    margin: 0 auto;

    .btn-check-out {
      color: #FFF;
      font-size: 15px;
      font-weight: 600;
      padding: 22px 80px;
      border-radius: 28.5px;
      background: #FE724C;
      box-shadow: 0px 8px 30px 0px rgba(254, 114, 76, 0.25);
      border: 0;
      margin: 0 auto;
      display: flex;
    }
  }


}
</style>