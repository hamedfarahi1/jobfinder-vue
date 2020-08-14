<template>
  <section id="login">
<div class="container" id="container">
	<div class="form-container sign-in-container">
		<form v-if="!loggingIn" action="#">
			<h1>وارد شوید</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>اطلاعات خود را وارد کنید</span>
			<input v-model="login.username" type="text" placeholder="نام کاربری" />
			<input v-model="login.password" type="password" placeholder="پسوورد" />
			<a href="#">رمز عبور خود را فراموش کردید؟</a>
			<button v-if="!loggingIn" @click="onSubmit">ورود</button>
		</form>
    <Spinner v-if="loggingIn"/>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1>سلام دوست عزیز</h1>
				<p>اطلاعات خود را وارد کنید و از سرویس رایگان ما استفاده کنید</p>
				<router-link to="/register">
        <button class="ghost" id="signUp">
       ثبت نام</button>
      </router-link>
			</div>
		</div>
	</div>
</div>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Spinner from '../../shared/templates/Spinner'
export default {
  components: {
    Spinner
  },
  data: () => ({
    login: {
      username: "",
      password: ""
    }
  }),
    computed: {
      ...mapState([
        'loggingIn',
        'loginError',
        'accessToken'
      ]),
       isLogging: function() {
      if (this.loggingIn) {
        return "blur-section";
      }
      return "none";
    }
    },
  methods: {
    ...mapActions([
        'doLogin',
        'logout'
      ]),
    onSubmit: function(event) {
      event.preventDefault();
      this.doLogin(this.login);
    }
  },
  mounted() {
    this.logout()
  }
};
</script>

<style lang="scss" scoped src="./account.scss">
</style>
