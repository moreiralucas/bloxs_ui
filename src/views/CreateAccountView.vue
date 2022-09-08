<template>
  <div class="home">
    <CreateAccountForm msg="Welcome to Create Account Page"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CreateAccountForm from '@/components/CreateAccountForm.vue'; // @ is an alias to /src

@Options({
  components: {
    CreateAccountForm,
  },
})
export default class HomeView extends Vue {}
</script>
