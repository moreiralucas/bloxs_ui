<template>
  <div class="home">

    <TransactionListTransaction msg="Extrato" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TransactionListTransaction from '@/components/TransactionList.vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TransactionListTransaction,
  },
});
</script>
