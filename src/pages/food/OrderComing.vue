<template>
  <div class="order-comming">
    <div class="header">
      <div @click="nextPage" class="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M6 1L1 5.68393L6 10.6839" stroke="#111719" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="title-header">My Orders</div>
      <img class="avt" src="@/assets/imgs/avt.png"/>
    </div>
    <div class="btn">
      <button class="btn-avtive">Upcoming</button>
      <button class="btn-nomal">History</button>
    </div>
    <div class="wrapper-order">
      <div class="item-order">
        <div class="header-item">
          <div class="avt-item">
            <img class="avt" src="@/assets/imgs/union.png"/>
            <div>
              <div class="item">3 Items</div>
              <div class="bao-nam-item">
                <router-link to="resturent" class="name-item">Starbuck</router-link>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <circle cx="4" cy="4" r="4" fill="#029094"/>
                  <path d="M2.6665 3.37786L3.6665 4.44453L5.33317 2.66675" stroke="white"/>
                </svg>
              </div>

            </div>
          </div>
          <div class="color">#264100</div>
        </div>
        <div class="brand">
          <div>
            <div class="brand-item">Estimated Arrival</div>
            <div class="time">25<span class="unit">min</span></div>
          </div>
          <div>
            <div class="now">Now</div>
            <div class="food-way">Food on the way</div>
          </div>
        </div>
        <div class="order-btn">
          <button class="btn-no">Cancel</button>
          <button class="btn-yes">Track Order</button>
        </div>
      </div>
      <LastedOrders/>
    </div>
  </div>
</template>
<script>
import LastedOrders from "@/components/ordercoming/LastedOrders.vue";

export default {
  components: {
    LastedOrders
  },

  methods:{
    nextPage(){
      window.history.go(-1)
    }

  }
}
</script>
<style scoped lang="scss">
.order-comming {
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
  .wrapper-order{
    .item-order{
      border-radius: 18.214px;
      background: #FFF;
      box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);
      padding: 18px;
      margin-bottom: 32px;
        .header-item{
          display: flex;
         justify-content: space-between;
          gap:10px;
          .color{
            color: #FE724C;
            font-size: 16px;
            font-weight: 400;
          }
          .avt-item{
            display: flex;
            align-items: center;
            gap:18px;
            .avt{
              fill: #FFF;
              filter: drop-shadow(11px 17px 22px rgba(211, 209, 216, 0.45));
              padding: 10px;
            }
          }
          .item{
            color: #9796A1;
            font-size: 12px;
            font-weight: 400;
            padding-bottom: 10px;
          }
          .bao-nam-item{
            display: flex;
            align-items: center;
            gap:5px;
            color: #000;
            font-size: 16px;
            font-weight: 600;
            padding-bottom: 10px;
          }

        }
      .brand{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 21px;
        .brand-item{
          color: #9796A1;
          font-size: 12px;
          font-weight: 400;
          padding-bottom: 11px;
        }
        .time{
          color: #111719;
          font-size: 39px;
          font-weight: 600;
          .unit{
            padding-left: 3px;
            color:  #111719;
            font-size: 15px;
            font-weight: 400;
          }
        }
        .now{
          color: #9796A1;
          font-size: 12px;
          font-weight: 400;
          padding-bottom: 6px;
        }
        .food-way{
          color: #111719;
          font-size: 14px;
          font-weight: 400;
        }

      }
      .order-btn{
        width: 100%;
        font-size: 15px;
        font-weight: 400;
        cursor: pointer;
        display: flex;
        gap:17px;
        .btn-no{
          width: 50%;
          padding: 15px 42px;
          color: #111719;
          border-radius: 100px;
          background: #FFF;
          box-shadow: 0px 20px 30px 0px rgba(211, 209, 216, 0.25);
          border: 0;
        }
        .btn-yes{
          width: 50%;
          padding: 15px 42px;
          color: #FFF;
          border-radius: 28.5px;
          background: #FE724C;
          box-shadow: 0px 20px 30px 0px rgba(254, 114, 76, 0.25);
          border: 0;
        }
      }
    }
  }


}
</style>