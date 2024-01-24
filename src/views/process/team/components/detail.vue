<template>
  <Breadcrumb :items="['menu.process.user', 'menu.profile']" />
  <a-space direction="vertical" :size="16" fill>
    <a-card class="general-card" :title="$t('basicProfile.title.form')">
      <template #extra>
        <a-space>
          <a-button type="primary">
            {{ $t('basicProfile.goBack') }}
          </a-button>
          <a-button>{{ $t('basicProfile.cancel') }}</a-button>
        </a-space>
      </template>
      <a-steps v-model:current="step" line-less class="steps">
        <a-step>{{ $t('basicProfile.steps.commit') }}</a-step>
        <a-step>{{ $t('basicProfile.steps.approval') }}</a-step>
        <a-step>{{ $t('basicProfile.steps.finish') }}</a-step>
      </a-steps>
    </a-card>
    <a-card class="general-card">
      <Item :loading="loading" :render-data="currentData" />
    </a-card>
    <a-card class="general-card">
      <Item :loading="preLoading" type="pre" :render-data="preData" />
    </a-card>
    <Log />
  </a-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { queryProfileBasic, ProfileBasicRes } from '@/api/profile';
  import Item from './item.vue';
  import Log from './log.vue';

  const { loading, setLoading } = useLoading(true);
  const { loading: preLoading, setLoading: preSetLoading } = useLoading(true);
  const currentData = ref<ProfileBasicRes>({} as ProfileBasicRes);
  const preData = ref<ProfileBasicRes>({} as ProfileBasicRes);
  const step = ref(1);
  const fetchCurrentData = async () => {
    try {
      const { data } = await queryProfileBasic();
      currentData.value = data;
      step.value = 2;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const fetchPreData = async () => {
    try {
      const { data } = await queryProfileBasic();
      preData.value = data;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      preSetLoading(false);
    }
  };
  fetchCurrentData();
  fetchPreData();
</script>

<style scoped lang="less">
  .steps {
    max-width: 548px;
    margin: 0 auto 10px;
  }
</style>
