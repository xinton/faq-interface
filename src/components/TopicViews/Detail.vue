<template>
    <div class='detail-content'>
        <h1>{{ topic.title }}</h1>
        <p>{{ topic.text }}</p>
    </div>
</template>

<script>
import getters from '../../mixins/getters'

export default {
  name: 'TopicList',
  mixins: [
    getters
  ],
  props: [
    'id'
  ],
  data () {
    return {
      topic: {}
    }
  },
  mounted: function () {
    this.getTopic(this.$props.id)
  },
  methods: {
    getTopic: function () {
      this.$http
        .get(`topics/${this.$props.id}`)
        .then(response => {
          this.topic = response.data
        })
        .catch(err => {
          // TODO ERROR
          console.log(err)
        })
    }
  }
}
</script>
