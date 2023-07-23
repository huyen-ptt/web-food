<template>
  <div>
    <el-input placeholder="slot inout">
      <template #suffix>123</template>
      <template #prefix>ởee</template>
    </el-input>
    <SlottPage>
      <template v-slot="slotProps">
        {{ slotProps }}
      </template>
      <template #name="scope">
        <el-button type="primary">
          Huyền {{ scope }}
        </el-button>
        <el-button type="danger">
          chính
        </el-button>
      </template>
      <template #icon> Icon </template>
    </SlottPage>
  </div>
</template>

<script>
import SlottPage from "@/components/SlottPage.vue";
export default {
  components: {
    SlottPage
  }
}
</script>