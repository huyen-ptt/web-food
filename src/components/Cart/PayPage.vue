<template>
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
</template>
<style scoped lang="scss">
.wrapper-total {
  .item-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;

    .phi {
      color: #000;
      font-size: 16px;
      font-weight: 400;

      .tong {
        color: #BEBEBE;
        font-size: 14px;
        font-weight: 300;
        padding-left: 3px;
      }
    }

    .money {
      color: #000;
      text-align: right;
      font-size: 19px;
      font-weight: 500;

      .usd {
        color: #9796A1;
        font-size: 14px;
        font-weight: 400;
        padding-left: 5px;
      }
    }

  }
}
</style>