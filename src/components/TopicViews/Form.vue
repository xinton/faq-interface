<template>
  <div>
    <!-- TODO RULES -->
    <form @submit.native.prevent>
      <div>
        <label for="title">Titulo:</label>
        <input v-model="topic.title" type="text" id="title">
      </div>
      <div>
        <label for="text">Texto:</label>
        <input v-model="topic.text" type="text" id="text">
      </div>

      <div>
        <button type="submit" id="bt-save" @click.prevent="submit()">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TopicForm',
  props: {
    topic: {
      type: Object,
      default: () => {
        return {
          title: '',
          text: ''
        }
      }
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.topic)
    }
  }
}
</script>
