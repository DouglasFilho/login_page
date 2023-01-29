<template>
    <div class="container">
        <div class="loginDiv">
            <p class="welcome">Welcome back!</p>
            <div style="display:block">
                <!--eslint-disable-next-line-->
                <input type="text" placeholder="Username">
            </div>

            <div style="display:block">
                <!--eslint-disable-next-line-->
                <input :type="passwordType" placeholder="Password">
            </div>

            <div style="display:block">
                <button @click="logIn()">Log in</button>
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
      count: 0,
      passwordType: 'password',
    };
  },
  methods: {
    singUp() {
      alert('sing up');
    },
    logIn() {
      alert('logIn');
    },
    forgotPassword() {
      alert('forgotPassword');
    },
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

    .welcome{
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
