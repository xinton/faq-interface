<template>
  <div>
    <div class="content">
      <topic-form :topic="topic" @submit="save"/>
    </div>
  </div>
</template>

<script>
import TopicForm from './Form'
import management from '../../mixins/management'

export default {
  mixins: [
    management
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
    async save (value) {
      const redirect = { name: 'topics.list' }
      this.insert('topics/', redirect, value)
    }
  }
}
</script>

<style scoped>

</style>
