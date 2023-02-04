<template>
  <div class="container">
      <div class="loginDiv">
          <p class="title">Welcome back!</p>
          <div style="display:block">
              <!--eslint-disable-next-line-->
              <input v-model="email" type="text" placeholder="Email">
          </div>

          <div style="display:block">
              <!--eslint-disable-next-line-->
              <input v-model="password" :type="passwordType" placeholder="Password">
          </div>

          <div style="display:block">
              <button @click="logIn()" @keyup.enter="enterHandler">Log in</button>
          </div>

          <div style="display:block">
              <!--eslint-disable-next-line-->
              <span class="forgotText" @click="forgotPassword()">Forgot password?</span>
          </div>

          <div class="divider"></div>

          <span class="singUpText">
              <!--eslint-disable-next-line-->
              Don't have a account? <strong @click="singUp()">Sing-up</strong>
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  components: { },
  data() {
    return {
      passwordType: 'password',
      email: '',
      password: '',
    };
  },
  methods: {
    singUp() {
      alert('sing up');
    },
    logIn() {
      const user = this.users.filter((el) => {
        if (el.email === this.email) return true;
        return false;
      });

      if (user.length > 0) {
        if (user[0].password === this.password) {
          alert('usuario logado com sucesso');
        } else {
          alert('senha incorreta');
        }
      } else {
        alert('usuario nao encontrado');
      }
    },
    forgotPassword() {
      alert('forgotPassword');
    },
    keyUpHandler(event) {
      if (event.key === 'Enter') {
        this.logIn();
      }
    },
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
  mounted() {
    document.addEventListener('keyup', this.keyUpHandler);
  },
  beforeUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  },
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

  .loginDiv{
      background-color: #FFFFFF;
      width: 350px;
      height: 330px;
      border-radius: 3%;
  }

  .title{
      font-size: 30px;
      color: #3C79F5;
  }

  body {
      margin: 0px;
  }

  input[type="text"], input[type="password"]{
      width: 60%;
      padding: 10px 20px;
      margin-bottom: 8px;
      border: 1px solid #3C79F5;
      border-radius: 4px;
      display: inline-block;
  }

  button{
      width: 72%;
      padding: 10px 20px;
      margin-bottom: 4px;
      border: none;
      border-radius: 4px;
      background-color: #3C79F5;
      color: #FFFFFF;
  }

  .forgotText{
      float: left;
      margin-left: 50px;
      font-size: 10px;
      color: #878F9F;
      display: inherit;
  }

  .singUpText{
      display: inline-block;
      color: #878F9F;
      font-size: 10px;
  }

  .divider{
      display: inline-block;
      width: 70%;
      background-color: #3C79F5;
      height: 1px;
      margin-top: 20px;
  }

  input:focus{
      outline: none;
  }
</style>
