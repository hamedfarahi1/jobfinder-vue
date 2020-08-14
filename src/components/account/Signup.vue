<template>
  <section id="signup">
<div class="container right-panel-active" id="container">
	<div class="form-container sign-up-container">
		<form v-if="!registering" action="#" class="mobile">
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
			<button @click="onSubmit">تکمیل ثبت نام</button>
		</form>
        <Spinner v-if="registering"/>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel mobile overlay-left">
				<h1>خوش آمدید</h1>
				<p>برای برقراری ارتباط دو باره با ما, لطفا وارد شوید</p>
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
import Spinner from '../../shared/templates/Spinner'

export default {
    components: {
        Spinner
    },
  data: () => ({
    register: {
      email: "",
      username: "",
      password: ""
    }
  }),
    computed: {
      ...mapState([
        'registering',
        'registerError'
      ])
    },
  methods: {
    ...mapActions([
        'doRegister',
        'logout'
      ]),
    onSubmit: function(event) {
      event.preventDefault();
      this.doRegister(this.register);
    }
  }
};
</script>

<style lang="scss" scoped src="./account.scss">
</style>
