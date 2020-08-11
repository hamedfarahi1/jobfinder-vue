<template>
  <section id="login" v-bind:class="isShake">
    <div class="loginForm">
        <form>
          <div>
            <label>
              {{username && <span>نام کاربری</span>}}
              <input
                class=""
                id="username"
                placeholder="ایمیل"
                v-model="login.username"
                type="email"
              />
              <p>
                نام کاربری نمیتواند خالی باشد
              </p>
            </label>
            <label>
              {{login.password ? <span>پسوورد</span> : ''}}
              <input
                id="password"
                placeholder="پسوورد"
                v-model="login.password"
                type="password"
              />
              <p>
                پسوورد نمیتواند خالی باشد
              </p>
            </label>
          </div>
          <button v-on:click="onSubmit">ورود</button>
      <div v-if="loggingIn">ورود ....</div>
      <div v-if="loginError">خطا ....</div>
        </form>
      </div>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
export default {
  data: () => ({
    alert: {
      message: "وارد شوید"
    },
    login: {
      username: "",
      password: ""
    },
    shake: false,
    good: "",
    fake: {
      username: "vincent",
      password: "admin"
    }
  }),
    computed: {
      ...mapState([
        'loggingIn',
        'loginError',
        'accessToken'
      ]),
       isShake: function() {
      if (this.shake == true) {
        return "shake";
      }
      return "none";
    }
    },
  methods: {
    ...mapActions([
        'doLogin'
      ]),
    onSubmit: function(event) {
      event.preventDefault();
      this.doLogin(this.login);
    }
  }
};
</script>

<style lang="scss" scoped>
.loginForm {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      label {
        &:first-of-type {
          margin-left: 20px;
        }
      }
      @media screen and(max-width:395px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        label {
          margin: 0 0 20px 0 !important;
        }
      }
    }
    button {
      @extend %gradientButton;
      margin-bottom: 25px;
    }
  }
  @extend %inputStyles;
}
</style>
