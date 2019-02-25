/**
 * Métodos usados pelos componetes para inserir/atualizar registros em tabelas
 *
 * Os dois métodos esperam os mesmos paramêstros a seguir:
 * @param {String} request String que indica a rota da API que o componente faz a requisição
 * @param {Object} redirect Objeto que contem informações necessárias para os métodos redirecionarem o usuário para páginas especificas
 * @param {Object} instance Objeto contendo informações que devem ser submetidas a API
 */

export default {
  methods: {
    async insert (request, redirect, instance) {
      try {
        await this.$http.post(request, instance)
        this.$router.push(redirect)
      } catch (error) {
        console.log(error)
      }
    },

    async update (request, redirect, instance) {
      try {
        await this.$http.put(`${request}${instance.id}/`, instance)
        this.$router.push(redirect)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
