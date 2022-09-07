<template>
  <div class="home">
    <RegisterForm msg="Welcome to Register Page"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RegisterForm from '@/components/RegisterForm.vue'; // @ is an alias to /src

@Options({
  components: {
    RegisterForm,
  },
})
export default class HomeView extends Vue {}
</script>
