<template>
  <div id="app">
    <div class="page-header">
      <h1><a href="/#/faq"> FAQ </a></h1>
      <button @click="logout"> Logout </button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: unset;
  color: #2c3e50;
  margin-top: 0px;
}

.page-header {
    background-color: rgb(54, 51, 233);
    margin-top: 0;
    text-align: center;
    padding: 10px 10px 10px 40px;
}
</style>
