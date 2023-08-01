<template>
  <div class="title">
    <div @click="prevPage" class="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
        <path d="M6 1L1 5.68393L6 10.6839" stroke="#111719" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="title-big">{{ title }}</div>
    <div class="trong"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    prevPage() {
      window.history.go(-1)
    },
  }
};
</script>
<style scoped lang="scss">
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
  .trong{
    width: 40px;
  }
  .title-big {
    color: #111719;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
}
</style>