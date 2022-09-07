<template>
  <v-card>
    <v-card-title>Extrato</v-card-title>
    <v-card-text>
        <v-btn
        class="mr-8 mt-8"
        color="primary"
        dense
        >Depositar
        <v-icon right dark> mdi-plus </v-icon>
        </v-btn>
        <v-btn
        class="mr-8 mt-8"
        color="warning"
        dense
        >Sacar
        <v-icon right dark> mdi-minus </v-icon>
        </v-btn>
        <v-btn
        class="float-right mr-8 mt-8"
        color="error"
        dense
        >Bloquear Conta
        <v-icon right dark> mdi-close-circle </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
    </v-card-text>
    <v-card-text>
        <EasyDataTable
            :headers="headers"
            :items="items"
        />
    </v-card-text>
  </v-card>

</template>
<style lang="scss" scoped></style>
<script lang="ts">

import { defineComponent } from 'vue'
import type { Header, Item } from "vue3-easy-data-table";


export type SelectOption = {
  value: string;
  text: string;
};

export type SelectOptionItem = {
  name: string;
  height: number;
  weight: number;
  age: number;
};

export default defineComponent({
    name: "TransactionList",
    setup() {},
    data() {
        return {
            msg: "Transaction List Button",
        }
    },
    props: {
        headers: Array,
        items: Array
    },
    mounted() {
        // this.$props.foo // how to type `this` out of this context?
    }
})
</script>
