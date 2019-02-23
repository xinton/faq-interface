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
export default {
  name: 'TopicList',
  data () {
    return {
      topics: []
    }
  },
  mounted: function () {
    this.getTopics()
  },
  methods: {
    getTopics: function () {
      this.$http
        .get('http://127.0.0.1:8000/topics/')
        .then(response => {
          this.topics = response.data
        })
        .catch(err => {
        // TODO ERROR
          console.log(err)
        })
    }
  }
}
</script>
