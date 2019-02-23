/**
 * Métodos usados para obtenção de dados na API
 */

export default {
  methods: {
    async getTopics () {
      const response = await this.$http.get('topics/')
      return response.data
    },
    async getTopic (id) {
      const response = await this.$http.get(`topics/${id}`)
      return response.data
    }
  }
}
