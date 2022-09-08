<template>
  <v-card>
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>
        <v-btn
        class="mr-8 mt-8"
        color="primary"
        dense
        @click="depositar"
        >Depositar
        <v-icon right dark> mdi-plus </v-icon>
        </v-btn>
        <v-btn
        class="mr-8 mt-8"
        color="warning"
        @click="sacar"
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
    Saldo atual: R$ {{saldo}}
    </v-card-text>
    <v-card-text>
        <EasyDataTable
            :headers="headers"
            :items="items"
        />
    </v-card-text>
  </v-card>
  <DialogModal :title="sacarLabel" />
</template>
<style lang="scss" scoped></style>
<script lang="ts">

import DialogModal from '@/components/DialogModal.vue';
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
    data() {
        return {
            title: "Extrato",
            sacarLabel: "Você deseja sacar o dinheiro?"
        }
    },
    props: {
        saldo: String,
        headers: Array,
        items: Array
    },
    mounted() {
        // this.$props.foo // how to type `this` out of this context?
    },
    methods: {
    sacar(){
      console.log("sacando o dinheiro");
    },
    depositar(){
      console.log("depositando o dinheiro");
    },
    bloquear(){
      console.log("depositando o dinheiro");
    },      
    },
})
</script>
