<template>
  <div>
    <div class="content">
      <topic-form :topic="topic" @submit="submit"/>
    </div>
  </div>
</template>

<script>
import TopicForm from './Form'
import management from '../../mixins/management'
import getters from '../../mixins/getters'

export default {
  mixins: [
    management,
    getters
  ],
  components: {
    TopicForm
  },
  data () {
    return {
      topic: {
        title: '',
        text: ''
      }
    }
  },
  methods: {
    async submit (value) {
      const redirect = { name: 'topic.detail', params: value.id }
      await this.update('topics/', redirect, value)
    }
  },
  mounted: async function () {
    this.topic = await this.getTopic(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
