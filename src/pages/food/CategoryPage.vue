<template>
  <div class="category">
    <FastFood/>
    <WrapperFood/>
  </div>
</template>
<script>
import FastFood from "@/components/Category/FastFood.vue";
import WrapperFood from "@/components/Category/WrapperFood.vue";

export default {
  components: {
    WrapperFood,
    FastFood
  },


}
</script>
<style scoped lang="scss">
.category {
  width: 100%;
  height: 100%;
  box-shadow: 18px 18px 36px 0px rgba(211, 209, 216, 0.25);



}

</style>