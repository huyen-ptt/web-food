<template>
  <div>
    <el-input v-model="password"
              :type="inputType"
              placeholder="Nhập mật khẩu">
      <template #suffix>
        <i v-if="password"
           @click="iconPassword"
           :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'">
        </i>
      </template>
    </el-input>

  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      showPassword: true
    };
  },
  computed: {
    inputType() {
      return this.showPassword ? 'password' : 'text';
    }
  },
  methods: {
    iconPassword() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>