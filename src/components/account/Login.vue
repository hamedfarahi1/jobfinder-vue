<template>
  <section id="login" v-bind:class="isShake">
    <form>
      <h2>ورود</h2>
      <div class="info" v-bind:class="good">
        <p>{{ alert.message }}</p>
      </div>
      <input type="text" v-model="login.username" placeholder="نام کاربری" />
      <input type="password" v-model="login.password" placeholder="پسوورد" />
      <button v-on:click="onSubmit">ورود</button>
    </form>
  </section>
</template>

<script>
import { accountService } from "../../core/services/account/accountService";
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
    isShake: function() {
      console.log(this.shake);
      if (this.shake == true) {
        return "shake";
      }
      return "none";
    }
  },
  methods: {
    onSubmit: function(event) {
      event.preventDefault();
      accountService.login(this.login).then(res => console.log(res));
    }
  }
};
</script>

<style scoped>
section {
  background-color: #f9f9f9;
  width: 30%;
  min-width: 400px;
  margin: auto;
  min-height: 25%;
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  padding: 15px;
}

h2 {
  font-family: "Archivo Black", sans-serif;
  color: #868b8e;
  margin-left: auto;
  margin-right: auto;
}

.info {
  width: 100%;
  padding: 1em 5px;
  text-align: center;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info.error {
  border: 1px solid #a90e0e;
  background-color: #ff3c41;
  color: #a90e0e;
}
.info p {
  margin: auto;
  padding: 5px;
}

.info.good {
  border: 1px solid #416d50;
  background-color: #47cf73;
  color: #416d50;
}

input {
  height: 35px;
  padding: 5px 5px;
  margin: 10px 0px;
  background-color: #e0dada;
  border: none;
}

button {
  height: 40px;
  padding: 5px 5px;
  margin: 10px 0px;
  font-weight: bold;
  background-color: #be5256;
  border: none;
  color: #e0dada;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #711f1b;
}

@keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate(10px, 0, 0);
  }
}

.shake {
  animation-name: shake;
  animation-duration: 1s;
  /*animation-fill-mode: both;*/
}

@media screen and (max-width: 780px) {
  section {
    width: 90%;
  }
}
</style>
