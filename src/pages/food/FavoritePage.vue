<template>
<div class="my-favorite">
  <div class="header">
    <div @click="prevPage" class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
        <path d="M6 1L1 5.68393L6 10.6839" stroke="#111719" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="title-header">Favorites</div>
    <img class="avt" src="@/assets/imgs/avt.png"/>
  </div>
  <div class="btn">
    <button class="btn-avtive">Food Items</button>
    <button class="btn-nomal">Resturents</button>
  </div>
 <FavoriteFood/>
</div>
</template>
<script>
import FavoriteFood from "@/components/Favorite/FavoriteFood.vue";

export default {
  components: {
    FavoriteFood
  },
  methods:{
    prevPage(){
      window.history.go(-1)
    }

  }

}
</script>
<style scoped lang="scss">
.my-favorite{
  width: 100%;
  height: 100%;
  padding: 37px 26px;
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);
  .arrow{
    padding: 12px 17px;
    border-radius: 10px;
    box-shadow: 0px 20px 30px 0px rgba(211, 209, 216, 0.25);
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 40px;
    .title-header {
      color: #111719;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
    }

    .avt {
      border-radius: 12px;
      background: #C4C4C4;
      width: 38px;
      height: 38px;
    }
  }

  .btn {
    width: 100%;
    border-radius: 27px;
    border: 1px solid #F2EAEA;
    padding: 4px 6px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 32px;

    .btn-avtive {
      width: 50%;
      padding: 17px 45px;
      color: #FEFEFE;
      border-radius: 23px;
      background: #FE724C;
      border: 0;
      box-shadow: 0px 18px 40px 0px rgba(211, 209, 216, 0.25);
    }
    .btn-nomal {

      width: 50%;
      padding: 17px 45px;
      color: #FE724C;
      border-radius: 23px;
      background: #FFFFFF;
      border: 0;

    }
  }

}
</style>