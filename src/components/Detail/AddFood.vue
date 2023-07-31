<template>
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
</template>
<script>
export default {
  data() {
    return {

      foodList: [
        {id: 1, name: 'Pepper  Julienned', img: '/imgs/perper.png', total: 2.30, checked: true},
        {id: 2, name: 'Baby Spinach', img: '/imgs/spinach.png', total: 4.70 ,checked: false},
        {id: 3, name: 'Masroom', img: '/imgs/masroom.png', total: 2.50, checked: false},
      ],

    }
  },
}
</script>
<style scoped lang="scss">
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
</style>