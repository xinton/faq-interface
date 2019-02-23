<template>
  <div class="content">
    <div v-for="topic in topics" :key="topic.id">
      <router-link :to="{ name: 'TopicDetail', params: { id: topic.id } }">
        <h1>{{ topic.title }}</h1>
      </router-link>
      <p>{{ topic.text }}</p>
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
  mounted: async function () {
    this.topics = await this.getTopics()
  }
}
</script>
