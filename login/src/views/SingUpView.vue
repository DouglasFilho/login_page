<template>
    <div class="container">
      <SingUp/>
    </div>
</template>

<script>
import SingUp from '@/components/SingUp.vue';

export default {
  name: 'LoginView',
  components: {
    SingUp,
  },
  data() {
    return {
      passwordType: 'password',
      email: '',
      password: '',
    };
  },
  methods: { },
  computed: { },
};
</script>

<style>
  .container {
    background: rgb(63,94,251);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
