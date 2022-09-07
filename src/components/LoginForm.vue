<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      msg: "Login Form",
    }
  }
})
</script>
