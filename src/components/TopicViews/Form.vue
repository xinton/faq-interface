<template>
  <div class="form-content mx-auto">
    <!-- TODO RULES -->
    <form @submit.native.prevent>
      <div class="form-group">
        <label for="title">Titulo:</label>
        <input class="form-control" v-model="topic.title" type="text" id="title">
      </div>

      <div class="form-group">
        <label for="text">Texto:</label>
        <textarea class="form-control" v-model="topic.text" id="text" name="textarea" rows="10" cols="50"></textarea>
      </div>

      <div>
        <button type="submit" class="btn btn-primary" @click.prevent="submit()">Salvar</button>
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
<style scoped>
.form-content {
  width: 100%
}
</style>
