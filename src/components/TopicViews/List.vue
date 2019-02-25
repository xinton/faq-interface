<template>
  <div class="content">
    <router-link :to="{ name: 'topics.create' }">
        <button> Adicionar </button>
      </router-link>
    <div v-for="topic in topics" :key="topic.id">
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
