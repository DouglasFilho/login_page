<template>
    <div class="container">
      <LogIn/>
    </div>
</template>

<script>
import LogIn from '@/components/LogIn.vue';

export default {
  name: 'LoginView',
  components: {
    LogIn,
  },
  data() {
    return {
      passwordType: 'password',
      email: '',
      password: '',
    };
  },
  methods: { },
};
</script>

<style>
  .container {
    background-color: #3C79F5;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
