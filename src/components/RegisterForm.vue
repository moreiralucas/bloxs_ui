<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-class-component';


export default class LoginForm extends Vue {
  msg!: string
}
</script>
