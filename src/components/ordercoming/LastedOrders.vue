<template>
  <div class="lasted-orders">
    <div class="title-lasted">Lasted Orders</div>
    <div v-for="item in orderComingList"
         :key="item.id"
         class="item-order">
      <div class="header-item">
        <div class="avt-item">
          <img class="avt" :src="item.img"/>
          <div>
            <div class="time-item">
              <div>{{ item.time }}</div>
              <div class="circle"></div>
              <div>{{ item.item }} item</div>
            </div>
            <div class="bao-nam-item">
              <router-link to="resturent" class="name">{{ item.name }}</router-link>

              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#029094"/>
                <path d="M2.6665 3.37786L3.6665 4.44453L5.33317 2.66675" stroke="white"/>
              </svg>
            </div>
            <div class="order-cicrle">
              <div class="circle"></div>
              <div>Order Delivered</div>
            </div>
          </div>
        </div>
        <div class="color">${{ item.price }}</div>
      </div>
      <div class="order-btn">
        <button class="btn-no">Rate</button>
        <button class="btn-yes">Re-Order</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderComingList: [
        {id: 1, img: '/imgs/nhan-hang.png', time: '20 Jun, 10:30', item: 3, price: 17.51, name: 'Jimmy John’s  '},
        {id: 2, img: '/imgs/nhan-hangg.png', time: '19 Jun, 11:50', item: 2, price: 12.12, name: 'Subway  '},
      ]
    }
  },
}
</script>
<style scoped lang="scss">
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
  .lasted-orders{
    .title-lasted{
      color: #111719;
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 20px;
    }
  }
  .color{
    color: #FE724C;
    font-size: 16px;
    font-weight: 400;
  }
}
.time-item{
  display: flex;
  align-items: center;
  gap:9px;
  color: #9796A1;
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 10px;
  .circle{
    width: 4px;
    height: 4px;
    border-radius: 999px;
    background: #C4C4C4;
  }
}
.order-cicrle{
  display: flex;
  align-items: center;
  gap:6px;
  color: #4EE476;
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 10px;
  .circle{
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: #4EE476;
  }
}
</style>