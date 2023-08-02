<template>
  <div class="cart">
    <div class="header-cart">
      <HeaderPage :title="title"/>
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
import HeaderPage from "@/components/HeaderPage.vue";

export default {
  components: {
    HeaderPage,
    PayPage,
    OrderList
  },
  data() {
    return {
      title: 'Cart',
      change_quality: '',
    }
  },
  methods: {
    prevPage() {
      // window.history.go(-1)
      this.$router.push('/detail/1')
    },
  },
  computed: {
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