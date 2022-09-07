<template>
  <div class="home">
    <LoginForm/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LoginForm from '@/components/LoginForm.vue';


@Options({
  components: {
    LoginForm,
  },
})
export default class HomeView extends Vue {}
</script>
