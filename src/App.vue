<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import Login from './components/account/Login.vue'

export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style>
html, body{
	width:100%;
	height:100%;
	margin:0px;
	font-family: 'Work Sans', sans-serif;
}

body{
		background-image:url('https://images-assets.nasa.gov/image/6900952/6900952~orig.jpg');
	  background-size: cover;
		display: flex;
		flex-direction:column;
		justify-content:center;
	  align-items:center;
		color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
