<template>
  <div class="home">
    <TransactionListTransaction :items="items" :headers="headers" :saldo="saldo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import TransactionListTransaction from '@/components/TransactionList.vue';
import services from "@/services/";
import type { Header, Item } from "vue3-easy-data-table";
import { TransactionModel } from "@/services/models";

export type SelectOption = {
  value: string;
  text: string;
};

export default defineComponent({
  name: 'HomeView',

  components: {
    TransactionListTransaction,
  },
  data(){
    return {
      saldo: "",
      items: new Array<TransactionModel>(),
      headers: new Array<SelectOption>()
    }
  },

  async mounted(): Promise<void> {
    const response_extract = await services.extractAccountByID(1);
    this.items = response_extract.data;

    const response_balance = await services.getBalanceByID(1);
    this.saldo = `${response_balance.data.saldo}`;

    this.headers = [
      { text: "ID da transação", value: "id_transacao" },
      { text: "Valor", value: "valor"},
      { text: "ID da conta", value: "id_conta" },
      { text: "Data de transação", value: "data_transacao" }
    ];
  }
});
</script>
