<template>
  <div class="content">
    <div>
      <router-link :to="{ name: 'topics.create' }">
        <button type="button" class="btn btn-primary"> Adicionar Pergunta </button>
      </router-link>
    </div>

    <div class="card topic-content" v-for="topic in topics" :key="topic.id">
      <router-link :to="{ name: 'topics.detail', params: { id: topic.id } }">
        <h1>{{ topic.title }}</h1>
      </router-link>
      <p>{{ textPreview(topic.text) }}</p>
    </div>
  </div>
</template>

<script>
import getters from '../../mixins/getters'

export default {
  name: 'TopicList',
  mixins: [
    getters
  ],
  data () {
    return {
      topics: []
    }
  },
  methods: {
    textPreview (text) {
      return text.slice(0, 50) + '...'
    }
  },
  mounted: async function () {
    this.topics = await this.getTopics()
  }
}
</script>

<style>
.content {
    margin: 10px 10px 10px 10px;
}

.topic-content {
    margin-top: 10px;
}
</style>
