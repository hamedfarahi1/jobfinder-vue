<template>
  <div id="app">
    <nav v-if="accessToken">
    <ul class="menuItems">
      <li><router-link to="/">صفحه اصلی</router-link></li>
      <li>
      <router-link to="/about">درباره</router-link></li>
      <li><a href="#" @click="logout">خروج</a></li>
    </ul>
  </nav>
    <div v-if="accessToken" id="nav">
      
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions ,mapState} from 'vuex';
export default {
  methods: {
    ...mapActions([
      'logout'
    ])
  },
  computed: {
      ...mapState([
        'accessToken'
      ])
    },
}
</script>

<style lang="scss">
body{
    background: #f6f5f7;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background: #f9f9f9;
  margin-bottom: 25px;
  .menuItems {
    list-style: none;
    display: flex;

    li {
      margin: 50px;

      a {
        .router-link-exact-active {
        color: #42b983 !important;
    }
        text-decoration: none;
        color: #8f8f8f;
        font-size: 24px;
        font-weight: 400;
        transition: all 0.5s ease-in-out;
        position: relative;
        text-transform: uppercase;

        &::before {
          content: attr(data-item);
          transition: 0.5s;
          color: #8254ff;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          overflow: hidden;
        }

        &:hover {
          &::before {
            width: 100%;
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
