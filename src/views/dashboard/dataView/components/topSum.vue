<template>
  <a-card
    class="general-card"
    :title="$t('dataview.topTitle')"
    :header-style="{ paddingBottom: '0', paddingTop: '15px' }"
  >
    <a-list :bordered="false" style="height: calc(40vh - 58px)">
      <a-list-item v-for="(item, index) in data" :key="index">
        <div style="height: 19%; display: flex; margin-left: -13px">
          <img :src="imageUrl(index)" style="height: 40px" />
          <div class="text" style="font-size: 16px; font-weight: 600">
            {{ item.name }}
          </div>
          <div :style="getStyles(index)">
            {{ item.count }}
          </div>
        </div>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts" setup>
  import rank1 from '@/assets/images/Rank1.png';
  import rank2 from '@/assets/images/Rank2.png';
  import rank3 from '@/assets/images/Rank3.png';
  import rank4 from '@/assets/images/Rank4.png';
  import rank5 from '@/assets/images/Rank5.png';

  const data = [
    {
      name: '北京',
      count: 5000,
    },
    {
      name: '上海',
      count: 4500,
    },
    {
      name: '广州',
      count: 1800,
    },
    {
      name: '汕头',
      count: 800,
    },
    {
      name: '韶关',
      count: 99,
    },
  ];
  const imgs = [rank1, rank2, rank3, rank4, rank5];
  const imageUrl = (index: number) => {
    return imgs[index];
  };
  const getStyles = (index: number) => {
    const cloros = ['#F75C03', '#F98030', '#F7BA1E', '#1D2129', '#1D2129'];
    return {
      'font-weight': '600',
      'position': 'absolute',
      'right': '0',
      'text-align': 'center',
      'line-height': '40px',
      'width': '5rem',
      'color': cloros[index],
    };
  };
</script>

<style scoped>
  .text {
    margin-left: 1rem;
    line-height: 100%;
    align-items: center;
    display: grid;
  }
</style>
