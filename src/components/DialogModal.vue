<template>
  <v-dialog v-model="isOpen" persistent :max-width="dialogMaxWidth">
    <v-card v-click-outside="closeModal">
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" dense @click="negative()">
          {{ negativeLabel }}
        </v-btn>
        <v-btn color="primary" dense @click="afirmative()">
          {{ afirmativeLabel }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: "DialogModal",
  data() {
    return {
      title: "Dialog Modal",
      dialogMaxWidth: "400px",
      isOpen: true,
    }
  },
  props: {
    title: String,
    dialogMaxWidth: String,
    isOpen: Boolean,
    afirmativeLabel: {type: String, default: "Sim"},
    negativeLabel: {type: String, default: "Não"},
  },
  methods: {
    afirmative() {
      console.log("afirmative");
    },
    negative() {
      console.log("negative");
    },
  }
})
</script>
