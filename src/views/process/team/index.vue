<template>
  <div class="container">
    <Detail v-if="detailFlag" />
    <Table v-else />
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Detail from './components/detail.vue';
  import Table from './components/table.vue';

  const { query } = useRoute();
  const detailFlag = ref(false);
  onMounted(() => {
    if (query.id) {
      detailFlag.value = true;
    } else {
      detailFlag.value = false;
    }
  });
</script>

<script lang="ts">
  export default {
    name: 'Team',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }
</style>
