<template>
  <div class="food-detail">
    <product-information/>
    <AddFood/>
    <router-link to="/cart" class="btn-cart">
      <div class="bag">
        <img class="cartt" src="@/assets/imgs/cart.png"/>
      </div>
      <div>Add to cart</div>
    </router-link>
  </div>
</template>
<script>
import ProductInformation from "@/components/Detail/ProductInformation.vue";
import AddFood from "@/components/Detail/AddFood.vue";

export default {
  components: {
    AddFood,
    ProductInformation,
  },


}
</script>
<style scoped lang="scss">
.food-detail {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);

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