<template>
  <div class="page">
    <div class="centralized">
      <form ref="form" @submit.native.prevent="login">
        <div>
          <label for="username">Usuario:</label>
          <input v-model="username">
        </div>

        <div>
          <label for="password">Senha:</label>
          <input type="password" v-model="password">
        </div>

        <div>
          <button @click="login">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const credentials = { username: this.username, password: this.password }
      console.log(this.username)

      try {
        const response = await this.$http.post('login/', credentials)

        localStorage.token = response.data.token
        localStorage.user = response.data.user_id
        this.$router.push({ name: 'faq' })
        console.log({localStorage})
      } catch (error) {
        // TODO NOTIFY
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.centralized {
  width: 40vh;
  margin: 0 auto;
}
</style>
