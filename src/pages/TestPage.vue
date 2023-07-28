<template>
  <div>
    <label v-for="food in foods" :key="food.id" class="custom-checkbox">
      <input type="checkbox" :id="`check${food.id}`" v-model="food.checked">
      <span class="checkbox-icon"></span>
      {{ food.name }}
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        { id: 1, name: 'Pizza', checked: false },
        { id: 2, name: 'Burger', checked: true },
        { id: 3, name: 'Salad', checked: false },
        // Add more food items as needed
      ],
    };
  },
};
</script>

<style scoped>

.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 20px;
}

.custom-checkbox input[type="checkbox"] {
  display: none; /* Hide the default checkbox */
}

.custom-checkbox .checkbox-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%; /* Make it circular */
  border: 2px solid #ff0000; /* Red border color */
  background-color: white; /* White background color for the circular checkbox */
  padding: 4px; /* Add some padding inside the checkbox */
  margin-right: 8px;
  vertical-align: middle;
  box-sizing: border-box; /* Include padding in the width and height */
}

.custom-checkbox input[type="checkbox"]:checked + .checkbox-icon {
  background-color: #ff0000; /* Red background color when checked */
}

/* Add styles for the second checkbox */
.custom-checkbox .checkbox-icon + .checkbox-icon {
  margin-left: 10px; /* Add some space between the two checkboxes */
}
</style>