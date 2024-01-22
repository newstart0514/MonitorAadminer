<template>
  <a-card
    class="general-card"
    :title="$t('dataview.dangerTitle')"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{ padding: '0' }"
  >
    <Chart style="height: calc(40vh - 46px)" :option="chartOption" />
  </a-card>
</template>

<script lang="ts" setup>
  const chartOption = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: '安全报警',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: '未处理' },
          { value: 735, name: '已处理' },
          { value: 580, name: '处理中' },
        ],
      },
    ],
  };
</script>

<style scoped lang="less"></style>
