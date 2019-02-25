<template>
  <div>
    <div class="detail-content">
      <h1>{{ topic.title }}</h1>
      <p>{{ topic.text }}</p>
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
      topic: {}
    }
  },
  mounted: async function () {
    // Obtendo o topico selecionado
    this.topic = await this.getTopic(this.$props.id)
  }
}
</script>
