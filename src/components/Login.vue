<template>
  <div class="page">
    <div class="centralized">
      <form>
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input id ="username" class="form-control" v-model="username">
        </div>

        <div class="form-group">
          <label for="password">Senha:</label>
          <input id="password" class="form-control" type="password" v-model="password">
        </div>

        <div>
          <button type="submit" class="btn btn-primary" @click="login">Login</button>
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
      try {
        const response = await this.$http.post('login/', credentials)

        localStorage.token = response.data.token
        localStorage.user = response.data.user_id
        await this.$router.push({ name: 'faq' })
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
  margin: 50px auto;
}
</style>
