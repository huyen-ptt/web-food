<template>
  <div class="wrapper-product">
    <div v-for="product in productList"
         :key="product.id"
         class="item-product">
      <img class="avt" :src="product.img"/>
      <div>{{ product.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      productList: [
        {id: 1, name: 'Burger', img: '/imgs/burger.png'},
        {id: 2, name: 'Donat', img: '/imgs/donet.png'},
        {id: 3, name: 'Pizza', img: '/imgs/pizza.png'},
        {id: 4, name: 'Mexican', img: '/imgs/mexican.png'},
        {id: 5, name: 'Asian', img: '/imgs/asian.png'},
        {id: 6, name: 'Burger', img: '/imgs/burger.png'},
        {id: 7, name: 'Donat', img: '/imgs/donet.png'},
        {id: 8, name: 'Pizza', img: '/imgs/pizza.png'},
        {id: 9, name: 'Burger', img: '/imgs/burger.png'},
        {id: 10, name: 'Donat', img: '/imgs/donet.png'},
        {id: 11, name: 'Pizza', img: '/imgs/pizza.png'},
      ]
    }
  }

}
</script>
<style scoped lang="scss">
.wrapper-product {
  display: flex;
  align-items: center;
  gap: 15px;
//overflow: hidden;
  margin-bottom: 41px;
//overflow-y: hidden;
  overflow: auto;

.item-product {
  color: #67666D;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  border-radius: 100px;
  background: #FFF;
  box-shadow: 0px 20px 30px 0px rgba(211, 209, 216, 0.25);
  padding: 8px 10px 28px 10px;

&:hover {
   color: #FFF;
   background: #FE724C;
   cursor: pointer;
 }

.avt {
  padding-bottom: 10px;
}
}
}
</style>