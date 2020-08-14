<template>
  <section id="signup">
<div class="container right-panel-active" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>ثبت نام کنید</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>با استفاده از ایمیل خود ثبت نام کنید</span>
			<input v-model="register.email" type="email" placeholder="ایمیل" />
			<input v-model="register.username" type="text" placeholder="نام کاربری" />
			<input v-model="register.password" type="password" placeholder="پسوورد" />
			<button @click="onSubmit">Sign Up</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<router-link to="/login"><button class="ghost" id="signIn">
       ورود</button>
      </router-link>
			</div>
		</div>
	</div>
</div>

  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
export default {
  data: () => ({
    register: {
      email: "",
      username: "",
      password: ""
    }
  }),
    computed: {
      ...mapState([
        'registeringIn',
        'registerError',
        'accessToken'
      ])
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
  }
};
</script>

<style lang="scss" scoped src="./account.scss">
</style>
