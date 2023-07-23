<template>
    <div class="bao-input" v-click-outside="onClickOutside">
      <input type="text" v-model="inputText"
             placeholder="tìm kiêms"
             @focus="showList">
      <ul v-if="option" class="option-list">
        <li v-for="item in filterItems"
            :key="item"
            @click="searchItem(item)"
            class="option-item">{{ item }}</li>
      </ul>
    </div>
</template>
<script>
import vClickOutside from 'click-outside-vue3'
export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return{
      inputText: '',
      option: false,
      items: ['Apple', 'Banana', 'Orange', 'Kiwi'],

    }

  },
  methods: {
    onClickOutside (event) {
      console.log('Clicked outside. Event: ', event)
      this.option = false;
    },
    showList() {
      this.option = true;
    },
    closeList() {
      this.option = false;
    },
    searchItem(item) {
      console.log('122')
      this.inputText = item;
      this.option = false;
    },
  },
  computed: {
    filterItems() {
      return this.items.filter(item => {
        return item.toLowerCase().includes(this.inputText.toLowerCase())
      });
      // item.toLowerCase(): Chuyển đổi mỗi phần tử item thành chữ thường để so sánh không phân biệt chữ hoa, chữ thường.
      // this.inputText.toLowerCase(): Chuyển đổi giá trị của inputText thành chữ thường để so sánh không phân biệt chữ hoa, chữ thường.
      // item.toLowerCase().includes(this.inputText.toLowerCase()): So sánh nội dung của item và inputText để kiểm tra xem item có chứa nội dung của inputText không.
    }
  }
}
</script>
<style scoped>
.bao-input {
  position: relative;
}

.option-list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
}

.option-item {
  padding: 10px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}
</style>