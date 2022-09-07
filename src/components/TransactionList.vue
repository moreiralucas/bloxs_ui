<template>
  <v-card>
    <v-btn
      class="float-right mr-8 mt-8"
      color="primary"
      dense
    >{{ msg }}
    <v-icon right dark> mdi-folder-plus </v-icon>
    </v-btn>
  </v-card>
</template>
<style lang="scss" scoped></style>
<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class TransactionList extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
