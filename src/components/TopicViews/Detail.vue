<template>
  <div>
    <div class="detail-content">
      <h1>{{ topic.title }}</h1>
      <p>{{ topic.text }}</p>
    </div>

    <div class="detail-helpful">
      <div v-if="!hasAnswered">
        <button @click="isHelpful"> Marcar como util </button>
      </div>

      <div v-else>
        <p> Você marcou como util </p>
      </div>
    </div>

    <div>
      <router-link :to="{name: 'topics.edit', params: {id: topic.id} }">
        <button> Editar </button>
      </router-link>
    </div>

  </div>
</template>

<script>
import getters from '../../mixins/getters'

export default {
  name: 'TopicList',
  mixins: [getters],
  props: ['id'],
  data () {
    return {
      topic: {},
      user: null,
      hasAnswered: false
    }
  },
  mounted: async function () {
    // Obtendo o topico selecionado
    this.topic = await this.getTopic(this.$props.id)

    // Obtendo a resposta do usuario para o topico
    this.getIsHelpful()
  },
  methods: {
    async getIsHelpful () {
      // obtendo id do usuario logado
      this.user = window.localStorage.user
      try {
        this.helpfulTopicAnswer = await this.getHelpfulTopicAnswer(this.user, this.topic.id)
        this.hasAnswered = true
      } catch (error) {
        this.hasAnswered = false
      }
    },
    async isHelpful () {
      let instance = {user: this.user, topic: this.topic.id, helpful: true}
      await this.$http.post('helpfultopics/', instance)
      this.hasAnswered = true
    }
  }
}
</script>
