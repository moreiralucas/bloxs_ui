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
        <v-data-table>
        <tr>
              <td>Teste TD 1.1</td>
              <td>Teste TD 1.2</td>
        </tr>
        <tr>
              <td>Teste TD 2.1</td>
              <td>Teste TD 2.2</td>
        </tr>
        </v-data-table>
    </v-card-text>
  </v-card>

</template>
<style lang="scss" scoped></style>
<script lang="ts">

import { defineComponent } from 'vue'


export default defineComponent({
    name: "TransactionList",

    data() {
        return {
            msg: "Transaction List Button",
        }
    }
})
</script>
